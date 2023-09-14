import { Component } from "../../core/component";

interface State {
  [key: string]: unknown;
  menus: { name: string; href: string }[];
}

export default class Header extends Component {
  // 1) public state > ERROR: state 멤버에는 암시적으로 any 타입이 포함됩니다.
  // 2) public state: State > ERROR: 'State' 형식은 '{ [key: string]: unknown; }' 형식에 할당할 수 없습니다.
  // 3) interface에 [key]~ 추가 > ERROR: 속성 'state'은(는) 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다.
  // 4) public state = {} as State > 에러는 사라지지만 정상적으로 동작하지 못함
  // 5) menus 배열 그대로 붙여넣기 > 중복 코드 발생
  // 6) 명확한 할당 단언
  /*
  state에 대한 별도의 초기화가 존재하지 않지만
  할당 단언을 통해 특정 데이터가 할당된 것처럼 state 속성 선언
  > 초기화를 하지 않았지만 에러도 발생하지 않게 해줄 수 있다.
  */
  public state!: State;
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Search",
            href: "#/",
          },
          {
            name: "Movie",
            href: "#/movie?id=tt4520988",
          },
          {
            name: "About",
            href: "#/about",
          },
        ],
      },
    });
    // 4번의 이유
    /*
    주소 해쉬 부분이 바뀔 때마다 this.render 함수 사용
    이때부터는 super 함수로 전달되는 state 부분의 내용을 사용하는 것이 아니라
    class body 부분의 public state를 사용하게 된다.
    하지만 해당 state는 빈 객체 데이터로 초기화 되어 있으므로 
    this.state.menus가 아닌 undefined가 됨
    > 처음에는 잘 렌더링 되지만 페이지를 바꿀 때에 ul 태그 안의 li 태그들이 map을 통해 렌더링 되지 못함
    */
    window.addEventListener("popstate", () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a
        href="#/"
        class="logo">
        <span>OMDbAPI</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus
            .map((menu) => {
              const href = menu.href.split("?")[0];
              const hash = location.hash.split("?")[0];
              const isActive = href === hash;
              return /* html */ `
              <li>
                <a
                  class="${isActive ? "active" : ""}"
                  href="${menu.href}">
                  ${menu.name}
                </a>
              </li>`;
            })
            .join("")}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://heropy.blog/css/images/logo.png" alt="User">
      </a>
    `;
  }
}
