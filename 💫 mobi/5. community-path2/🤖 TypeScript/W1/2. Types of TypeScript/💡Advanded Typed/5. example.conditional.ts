// conditional
declare function FUNC<T extends boolean>(
  x: T
): T extends true ? number : number[];

const y = FUNC(true); // 타입은 number
const z = FUNC(false); // 타입은 number[]
// y와 z는 true, false를 지정하였으므로 변환될 가능성이 없어 number, number[]로 추론됨
const decision = 1 > 2;
const z2 = FUNC(decision); // 조건식을 따로 넣어줘도 타입은 number | number[]

interface User {
  name: string;
  age: number;
}

declare function getUser<T>(args: T): T extends User ? string : number;

function getUserData<U>(args: U) {
  // args: U
  // 아직 분기를 선택하지 못한 조건부 타입
  let User_A = getUser(args); // U extends User -> string | number
  // 만약 다른 코드에서 getUserData 호출을 더이상 하지 않게 되면,
  // U를 다른 타입으로 대체하고 조건부 타입 재평가
  let User_B: number | string = User_A; // string | number

  User_B = "hi"; // OK
  User_B = true; // string, number가 아니므로 에러 발생
}

// 🌟 중첩 조건부 타입
// 삼항 연산자를 중첩해서 써야 하므로 가독성이 매우 좋지 않음
type InferType<T> = T extends string
  ? "Type: string"
  : T extends number
  ? "Type: number"
  : T extends boolean
  ? "Type: boolean"
  : T extends undefined
  ? "Type: undefined"
  : T extends Function
  ? "Type: function"
  : T extends void
  ? "Type: void"
  : "Type: object";

type str = InferType<string>; // "Type: string"
type str2 = InferType<"hello!">; // "Type: string"
type bool = InferType<false>; // "Type: boolean"
const calculation = 10 - 5;
type num = InferType<typeof calculation>; // "Type: number"
type func = InferType<() => void>; // "Type: function"
type returnT = InferType<ReturnType<() => void>>; // "Type: void"
type obj = InferType<{}>; // "Type: object"

// 🌟 분산 조건부 타입
const x = FUNC([1, 2, 3].length >= 1); // 타입은 number | number[]
const x2 = FUNC(1 === 1); // 타입은 number | number[]
// x와 x2에서는 사용 가능한 모든 타입을 union으로 합친 결과물을 반환함
// 이는 T가 true일 떄와 false인 경우의 반환값이 각각 상이하기 때문

// 배열이지만 안에 들어가는 요소들의 타입은 변동 가능성이 있을 때
type ArrVal<T> = { value: T };
type Arr<T> = { array: T[] };
type CreateArr<T> = T extends any[] ? Arr<T[number]> : ArrVal<T>;

type arr1 = CreateArr<string>; // {value: string}
type arr2 = CreateArr<string[]>; // {array: string[]}
type arr3 = CreateArr<string | string[]>; // ArrVal<string> | Arr<string[]>

// 🌟 infer
// infer을 통해 타입이 추론되어 자기 자신의 타입 U가 반환됨
// 다만 null 등으로 함수의 형태가 참이 아니게 된다면 never을 반환
type Return_Type<T> = T extends { x: infer U; y: infer U } ? U : never;
type F1 = Return_Type<{ x: string; y: number }>; // F1: string | number
type F2 = Return_Type<{ x: boolean; y: boolean }>; // F2: boolean
type F3 = Return_Type<{ x: null; y: null }>; // F3: null

// 조건부 타입의 타입 추론
// 조건부 타입의 extends 절 안에서 이제 추론될 타입 변수를 도입하는 infer 선언을 가질 수 있음
// 이렇게 추론된 타입 변수는 조건부 타입의 실제 분기에서 참조될 수 있음
// 1. generic 부분: T는 함수 타입만 받을 수 있게 extends(제한)
//                  해당 함수는 (...args:any) => any 형태여야 함
// 즉, Return_Type2<함수> 형태!
// 2. T extends ( ...args: any[] ) => infer R
// : T로부터 함수의 리턴 타입을 가리키는 R부분이 infer(추론)되면 그대로 R을 반환하고, 아니라면 any 반환
type Return_Type2<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;

function FUNCTION2(num: number): string | void {
  return num + "";
}

type Fn = typeof FUNCTION2;

// FUNCTION() 함수의 함수 자체 타입을 넣어줌
type FunctionReturn = Return_Type2<Fn>; // string | void
type FunctionReturn2 = Return_Type2<(num: number) => string>; // string
type FunctionReturn3 = Return_Type2<() => void>; // void

// 🌟 미리 정의된 조건부 타입
// exclude
type EXCLUDE = Exclude<"hi" | "hello" | "bye", "안녕" | "hi">; // "hello" | "bye"

// extract
type EXTRACT = Extract<"hi" | "hello" | "bye", "안녕" | "hi">; // "hi"

// nonnullable
type NONNULLABLE = NonNullable<string | null | number | undefined>; // string | number

// returntype
type RETURNTYPE = ReturnType<() => string>; // string

// instancetype
class CLASS {
  key: "KEY";
  value: "VALUE";
}

type INSTANCE = InstanceType<typeof CLASS>; // CLASS
type ANY = InstanceType<any>; // any
type NEVER = InstanceType<never>; // never
type ERROR = InstanceType<":)">; // 'string' 형식이 'abstract new (...args: any) => any' 제약 조건을 만족하지 않습니다.
