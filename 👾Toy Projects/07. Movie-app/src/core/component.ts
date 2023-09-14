// @ Component
// 각각의 값들은 쓰일수도, 쓰이지 않을 수도 있음
interface CompPayload {
  tagName?: string;
  props?: {
    [key: string]: unknown;
  };
  state?: {
    [key: string]: unknown;
  };
}

/*
🤔 왜 다시 public으로 선언해주나요?

: TS에서 클래스 멤버 변수의 접근 제한자를 명시적으로 지정하기 위해서!
> 이를 통해 해당 멤버들이 외부에 공개되어 있는지를 명확하게 보여주고, 가독성을 높인다.
*/
export class Component {
  public el;
  public props;
  public state;
  constructor(payload: CompPayload = {}) {
    const {
      tagName = "div", // 최상위 요소의 태그 이름
      props = {},
      state = {},
    } = payload;
    this.el = document.createElement(tagName); // 컴포넌트의 최상위 요소
    this.props = props; // 컴포넌트가 사용될 때 부모 컴포넌트에서 받는 데이터
    this.state = state; // 컴포넌트 안에서 사용할 데이터
    this.render();
  }
  render() {
    // 컴포넌트를 렌더링하는 함수
    // ...
  }
}

// @ Router

interface Route {
  path: string;
  component: typeof Component;
}
type Routes = Route[];
// 페이지 렌더링
function routeRender(routes: Routes) {
  // 접속할 때 해시 모드가 아니면(해시가 없으면) /#/로 리다이렉트!
  if (!location.hash) {
    history.replaceState(null, "", "/#/"); // (상태, 제목, 주소)
  }
  const routerView = document.querySelector("router-view"); // 하나의 요소이거나 null이 될 수 있음
  const [hash, queryString = ""] = location.hash.split("?"); // 물음표를 기준으로 해시 정보와 쿼리스트링을 구분

  // 1) 쿼리스트링을 객체로 변환해 히스토리의 상태에 저장!
  interface Query {
    [key: string]: string;
  }

  const query = queryString.split("&").reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {} as Query); // 초기값을 빈 객체로 설정해두면 TS는 어떠한 값도 들어갈 수 없다고 판단함
  // as를 사용하여 타입 단언
  history.replaceState(query, ""); // (상태, 제목)

  // 2) 현재 라우트 정보를 찾아서 렌더링!
  // routes는 배열 데이터임을 알 수 있음
  const currentRoute = routes.find((route) =>
    new RegExp(`${route.path}/?$`).test(hash)
  );

  // 뒤에서 빈 문자열을 할당하기 때문에 optional chaining을 사용해도 에러가 사라지지 않음
  // 이때 사용할 수 있는 것이 바로 type guard!
  if (routerView) {
    routerView.innerHTML = "";
    // currentRoute는 Route 구조를 가짐
    // find가 콜백함수를 통해 값을 찾지 못하면 undefined 반환 > new 생성자와 사용할 수 없어 에러 발생
    // 조건식에 routerView && currentRoute를 사용할 수도 있지만 그러면 routerView만 있으면 되는 위의 코드까지 사용할 수 없는 문제 발생
    // 💡 이처럼 type guard로 여러 내용을 합칠 때에는 주의가 필요하다!
    // && 사용!!
    currentRoute && routerView.append(new currentRoute.component().el); // 이 코드만 있을 경우 optional chaining도 가능
  }

  // 3) 화면 출력 후 스크롤 위치 복구!
  window.scrollTo(0, 0);
}
export function createRouter(routes: Routes) {
  // 원하는(필요한) 곳에서 호출할 수 있도록 함수 데이터를 반환!
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes);
  };
}

// @ Store
interface Observers {
  // value에는 감시해서 실행하려고 하는 각각의 콜백함수가 배열의 아이템으로 들어가야 함
  [key: string]: CallbackFunc[];
}

// 호출 시그니쳐
interface CallbackFunc {
  (arg: unknown): void;
}

export class Store<S> {
  public state = {} as S; // 상태(데이터), 빈 객체 할당 시 타입 추론이 빈 객체로 되므로 타입 단언 필요
  private observers = {} as Observers; // class 내부에서만 쓰므로 private
  constructor(state: S) {
    for (const key in state) {
      // 각 상태에 대한 변경 감시(Setter) 설정!
      Object.defineProperty(this.state, key, {
        // Getter
        get: () => state[key],
        // Setter
        set: (val) => {
          state[key] = val;
          // observers는 객체 데이터이면서 indexing이 가능해야 함
          if (Array.isArray(this.observers[key])) {
            // 호출할 콜백이 있는 경우!
            this.observers[key].forEach((observer) => observer(val));
          }
        },
      });
    }
  }
  // 상태 변경 구독!
  // key: 상태의 이름, cb: callback
  subscribe(key: string, cb: CallbackFunc) {
    Array.isArray(this.observers[key]) // 이미 등록된 콜백이 있는지 확인!
      ? this.observers[key].push(cb) // 있으면 새로운 콜백 밀어넣기!
      : (this.observers[key] = [cb]); // 없으면 콜백 배열로 할당!

    // 예시)
    // observers = {
    //   구독할상태이름: [실행할콜백1, 실행할콜백2]
    //   movies: [cb, cb, cb],
    //   message: [cb]
    // }
  }
}
