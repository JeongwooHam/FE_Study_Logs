// 타입 종류

// 문자
// 할당하지 않은 변수는 undefined로 시작. 이후 string이 할당 되어야 한다고 명시
// null, undefined는 숫자, union, ... 모든 타입의 하위 타입
let str: string;
let red: string = "red";
let myCol: string = `My Color is ${red}`;
let yourCol: string = "Your Color is" + red;

// 숫자
let integer: number = 6;
let float: number = 3.14;
// infinity, nan도 숫자 데이터로 취급됨
let inifinity: number = Infinity;
let nan: number = NaN;

// 불린
let isLoading: boolean = false;

// null, undefined
// null: 아무것도 없음을 나타내는 값
// undefined: 자동으로 암시적 값에 할당됨
// 지정하는 것이 가능하나 유용하지 않아 거의 사용되지 않음
let nul: null;
let und: undefined;
// console.log(nul); // ERROR: 'nul' 변수가 할당되기 전에 사용되었습니다.
nul = null;
// nul = undefined; // ERROR: 'undefined' 형식은 'null' 형식에 할당할 수 없습니다.
console.log(und); // 자동으로 undefined 값이 할당되어 선언만 해주어도 에러가 발생하지 않는 것!

// 배열
const fruits: string[] = ["apple", "orange", "kiwi"];
// 배열의 아이템으로 여러 타입을 줄 수도 있음
// 소괄호 사용에 주의!
const unionArr: (string | number)[] = [0, "apple", 1, "orange", 2, "kiwi"];
// 타입 명시 없이 배열 기호만 사용할 수는 없음
// const arr: [] = [1, 2, 3]; // ERROR: '[number, number, number]' 형식은 '[]' 형식에 할당할 수 없습니다. 소스에 3개 요소가 있지만, 대상에서 0개만 허용합니다.

// 객체
// typeof DATA === "object" > 배열, 함수도 object 타입으로 명시 가능
// 엄격하지 않으므로 잘 사용하지 않음
const obj: object = {};
const arr: object = [];
const func: object = () => {};

// 👩‍🏫 이렇게 사용합시다.
// const user_a: {
//   name: string;
//   age: number;
//   isAuth: boolean;
// } = {
//   name: "Jane",
//   age: 24,
//   isAuth: true,
// }

// const user_b: {
//   name: string;
//   age: number;
//   isAuth: boolean;
// } = {
//   name: "James",
//   age: 24,
//   isAuth: false,
// };

// 🤔 매번 객체의 타입을 위와 같이 지정해주어야 할까?

// 인터페이스
interface User {
  name: string;
  age: number;
  isAuth: boolean;
}

const user_a: User = {
  name: "Jane",
  age: 24,
  isAuth: true,
  // email: "aaa" > ERROR: 지정되지 않은 형식에는 사용할 수 없음
};

const user_b: User = {
  name: "James",
  age: 24,
  isAuth: false,
};

// 함수
// 매개변수 및 반환값의 타입 지정
const addNum: (x: number, y: number) => number = (x, y) => {
  return x + y;
};
const newNum: number = addNum(1, 2);

// 함수 자체에 타입을 줘서 사용하는 것도 가능함
const addNum_2 = (x: number, y: number): number => {
  return x + y;
};
const newNum_2: number = addNum(1, 2);

// 별도의 매개변수 타입 X
// 함수 부분에서 return 부분이 없어 undefined를 반환하는 경우 void 사용
const sayHi: () => void = () => {
  console.log("HI:D");
};
const sayHi_2 = (): void => {
  console.log("HI:D");
};

const greeting: void = sayHi();
