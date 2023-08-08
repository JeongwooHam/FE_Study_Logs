const PALETTE = {
  primary: "skyblue",
  black: [255, 255, 255],
  white: [0, 0, 0],
  grean: "#00FF12", // TYPO! 맞춤법 틀렸으나 에러가 발생하지 않았음
};

// 🤔 색상 객체에서 오타를 방지하게 하려면 어떻게 해야 할까?
// 1. 명시적으로 PALETTE에 들어갈 타입 지정하기
type colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const palette: Record<colors, string | RGB> = {
  red: [255, 0, 0],
  grean: "#00ff00",
  blue: [0, 0, 255],
  // 개체 리터럴은 알려진 속성만 지정할 수 있지만
  // 'Record<color, string | RGB>' 형식에 'grean'이(가) 없습니다.
  // 'green'을(를) 쓰려고 했습니까? > 에러 발생
};

/*
하지만 위처럼 오타를 방지하기 위해 타입 추론 대신 color 타입을 명시적으로 지정 시
Array.prototype나 string에만 적용 가능한 메소드를 사용할 수 없게 됨
만약 string이 될 경우 해당 메소드를 호출할 수 없기 때문!
*/
const RED = palette.red.find((el, i) => i === 1); // 'string | RGB' 형식에 'find' 속성이 없습니다.
// 만약 RGB(배열)이 올 경우 해당 메소드를 호출할 수 없어 에러 발생
const primaryColor = palette.red.toUpperCase(); // 'RGB' 형식에 'toUpperCase' 속성이 없습니다.

// 2. satisfies 적용하기
const newPalette = {
  red: [255, 0, 0],
  grean: "#00ff00", // 에러 검출
  blue: "#FF1221",
} satisfies Record<colors, string | RGB>;

// union 타입과 호환되는 타입의 메소드 호출 시도 시 정적 에러를 발생시키지 않음
// 즉, 철자 오류를 발견함과 동시에 value의 메소드 사용 가능
const redComponent = newPalette.red.find((el, i) => i === 1); // OK!
const PrimaryColor = newPalette.blue.toUpperCase(); //

// 객체가 특정 키만 가지게 하려면?
const new_palette = {
  red: "red",
  green: true, // 에러 검출
  blue: "#FF1221",
  black: false, // colors에 없는 키 값이므로 에러 발생
} satisfies Record<colors, boolean | string>;

const GREEN = new_palette.green; // true (boolean이 아님!)

new_palette.green = false; // ERROR! false 형식은 true 형식에 할당할 수 없습니다.

// 🤔 위의 new_palette는 정적 타입 체크에서 freeze object로 간주됨
// 이를 해결하려면?
const new_palette2 = {
  red: "red" as const, // 변경을 원하지 않는 것만 const로 지정해주면 됨
  green: true, // 에러 검출
  blue: "#FF1221",
} satisfies Record<colors, unknown>;

const GREEN2 = new_palette.green; // OK!

new_palette2.green = false; // OK!

type Variable5 = { key: { name: string; height: number; attribute: object } };
const variable5: Variable5 = {
  key: { name: "a", height: 90 },
};
