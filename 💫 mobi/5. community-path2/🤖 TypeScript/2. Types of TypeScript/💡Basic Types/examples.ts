// boolean
let isBoolean: boolean = true;
console.log(isBoolean);

// number
const bin: number = 111110;
const dec = parseInt(bin.toString(), 2); // 62 (자동 추론)
console.log(dec);
// 정수, 부동소수점 구분 X
const integer: number = 7;
const float: number = 7.0;
console.log(integer === float); // true

// string
let NAME: string = "함정우"; // prettier 적용으로 바뀌었지만 ' '
let nick_name: string = "Jane";
NAME = `name: ${nick_name}`;
console.log(NAME); // name: Jane

// array
const stringArr: string[] = ["a", "b", 1]; // 에러 발생
const numberArr: Array<number> = [1, 2, 3];

// tuple
let TUPLE: [string, number, boolean];
TUPLE = ["1", 1, true]; // 성공
TUPLE = []; // 값을 넣지 않으면 에러 발생
TUPLE = [1, "1", true]; // 순서 바뀐 부분에서 에러 발생
const NUM: number = parseInt(TUPLE[1]); // number 형식이므로 string 타입이 들어가야 하는 부분에 넣을 수 없음
TUPLE[4]; // 존재하지 않는 인덱스에 접근하여 에러 발생

// object
// 구분자로 세미콜론과 콤마 혼용 가능
const Anonymous1: { name: unknown; height: number; nickname: string } = {
  name,
  height: 190,
  nickname: "anonymous",
};

// 선택 속성
const Anonymous2: { name?: string; height: number; nickname: string } = {
    height: 190,
    nickname: "anonymous",
};

// 읽기 전용 속성
const Anonymous3: { readonly name: string; height: number; nickname: string } = {
    name: "익명",
    height: 190,
    nickname: "anonymous",
};
Anonymous3.name = "함정우" // 에러 발생: 읽기 전용 속성이므로 name에 할당할 수 없습니다.

// enum
// 숫자 열거형
enum NumericEnums {
  One, // 자동으로 0부터 시작
  Two,
  Three,
  Four,
}

// 선언적 할당을 이용해 확장 가능
enum NumericEnums {
    Five = 5
}

enum NumericEnums2 {
  One = 100, // 100으로 초기화된 숫자 열거형 선언
  // 뒤따르는 항목들은 자동으로 증가하는 값을 갖게 됨
  Two,
  Three,
  Four,
}

// reverse mapping
console.log(NumericEnums2["One"]);
console.log(NumericEnums2["0"]) // 값으로도 접근 가능

// 문자열 열거형 + 모호한 타입
// 숫자 열거형과 달리 모든 멤버들에 대한 상수 초기화 필요
enum StringEnums {
  height, // 첫 번째 위치에 오면 0으로 자동 인식
  // 숫자 열거형과 달리 자동 증가 기능 X
  // 다만 직렬화에 용이
  First = "Jane",
  Middle = "Doe",
  Last = "Ham",
  Last = ":)" // 키 값이 상수로 취급되므로 같은 키 값 다시 사용 불가
  age, // 숫자 자동 추론 X
}

const MyName: StringEnums = StringEnums.Last; // Fisrt, Middle, Last 자동 완성
const myname: string = StringEnums["First"];
console.log(myname); // Jane

// any
const mixedArr: any[] = [1, "a", false];
mixedArr[2] = 3.14; // 에러가 발생하지 않음
const notFunction: any = ":(";
notFunction.isFunction(); // 에러가 발생하지 않음

// unknown
let val: unknown;
val = true;
val = 111;
val = {};

let bool: boolean = val // 에러 발생 (any를 제외한 다른 타입에 unknown 타입의 값 할당 불가)
val[0] // unknown 값은 프로퍼티에 접근 불가
val() // unknown 타입의 메소드 호출 불가
new val() // unknown 타입의 인스턴스 생성 불가


const jsonWithAny = (jsonData: string): any => JSON.parse(jsonData);
const UserWithAny = jsonWithAny('{"id" : "123123" }');
UserWithAny.id; // 파싱된 이후의 타입을 추론할 수 없음 ("123123" or 123123)

const jsonParsedData = (jsonData: string): unknown => JSON.parse(jsonData);
const recentlyAccessUser = jsonParsedData('{"id": "123123" }')
recentlyAccessUser.id // 에러 발생 (해당 값의 타입이 선언되기 전까지 에러 방출)

type User = {id: number};
const jsonWithoutError = (jsonData: string): unknown => JSON.parse(jsonData);
const accessUser = jsonWithoutError('{"id": "123123"}') as User;
accessUser.id // id의 타입이 number로 지정되어 있으므로 에러가 발생하지 않음


// void
function funcWithoutReturn(): void {
  alert("return 값이 없습니당");
}

const arrowFuncWithoutReturn = (): void => {
  console.log("return 값이 없는 화살표 함수");
};

let voidType: void;
voidType = false; // 에러 발생
voidType = undefined;
voidType = null; // 에러 발생 (--strictNullChecks 사용하지 않으면 에러 발생 X)

// null
let nullVal: null = null;
let num: number = null; // 에러 발생 (--strictNullChecks)

// undefined
const undefinedVal: undefined = undefined;
const str: string = undefined; // 에러 발생 (--strictNullChecks)

// never
function returnError(params: string): never {
  throw new Error(params);
}
// never로 타입 추론
const throwError = () => {
  return returnError("에러 발생..!");
};
// 무한 루프로 함수의 마지막에 도달할 수 없는 경우
function InfiniteLoop(): never {
  while (true) {
    alert("무한 루프..!");
  }
}
