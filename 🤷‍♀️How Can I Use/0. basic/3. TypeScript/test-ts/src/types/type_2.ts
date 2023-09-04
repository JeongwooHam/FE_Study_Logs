{
  // any
  // TS 사용 의미가 사라지므로 사용 지양
  // 어떤 데이터가 할당되어도 상관 없음을 의미
  let hello: any = "hello world";

  // unknown
  // 어떤 데이터가 할당될지 알 수 없어 우선 지정해두는 타입
  const a: any = 123;
  const u: unknown = 123;

  const any: any = a; // any 타입에 any 타입 할당 가능
  const bool: boolean = a; // any가 아닌 타입에도 any 타입 할당 가능
  const num: number = a;
  const arr: string[] = a;
  const obj: { x: string; y: number } = a;
  // ➡️ TS를 사용하는 의미 X

  const any_2: any = u;
  // ERROR: 알 수 없는 값을 지정된 타입에 할당하여 에러 발생
  const bool_2: boolean = u;
  const num_2: number = u;
  const arr_2: string[] = u;
  const obj_2: { x: string; y: number } = u;
  // ➡️ TS를 사용하는 의미 X
}

// tuple
const tuple: [string, number, boolean] = ["string", 0, true]; // 뒤에 다른 값 넣으면 에러 발생
// 배열 데이터 + 각각의 아이템이 튜플 타입
const users: [number, string][] = [
  [1, "one"],
  [2, "two"],
  [3, "three"],
];

// void
// return 값이 없을 때는 any, void만 사용 가능. undefined를 대신 사용할 경우 에러 발생
// void를 사용해야 return 값이 없는 함수임을 명시해줄 수 있음
function printHello(id: string): void {
  console.log(`hello ${id}`);
}

const hihi: void = printHello("Jane");

// never
// 절대 발생하지 않을 값. 명시하는 경우 많지 않다.
const nev: [] = []; // 배열에 어떤 아이템도 넣을 수 없으므로 자동으로 never 값 지원
// push(...items: never[]): number
// nev.push(3); ERROR: 'number' 형식의 인수는 'never' 형식의 매개 변수에 할당될 수 없습니다

// union
let union: string | number;
let union_2: string | number[]; // 문자열 + 숫자 배열
let union_3: (string | number)[]; // 문자열 배열 + 숫자 배열
union = "Jane";
union = 111;
// union= [1]; ERROR: 'number[]' 형식은 'string | number' 형식에 할당할 수 없습니다.

// intersection
interface User_2 {
  name: string;
  pw: number;
}

interface Valid {
  isAuth: boolean;
}

// user_2 인터페이스 + valid 인터페이스
const new_user: User_2 & Valid = {
  name: "Jane",
  pw: 1234,
  isAuth: true,
  // 셋 중 하나라도 없으면 에러 발생!
};
