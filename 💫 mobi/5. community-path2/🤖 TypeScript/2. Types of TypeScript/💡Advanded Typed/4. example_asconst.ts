// As Const
let LET = "hello";

let LetToConst = "hello" as const;
LetToConst = "hi";

const CONST = "hello";
CONST = "hi";

// as const로 객체 value 고정하기
// 1. 개별 속성에 대해 설정해주기
const OBJECT = {
  name: "Jane",
  region: "Seoul",
  country: "Korea",
};

console.log(OBJECT.name); // Jane
OBJECT.name = "unknown";
console.log(OBJECT.name); // unknown
// "Jane"을 통해 추론된 타입(string)이기만 하면 다른 값으로 바뀌어도 에러가 발생하지 않음

const ObjectAsConst = {
  name: "Jane" as const,
  region: "Seoul",
  country: "Korea",
};

ObjectAsConst.name = "unknown"; // Error!
ObjectAsConst.region = "unknown"; // OK

// 2. 객체 자체에 설정해주기 (ReadOnly 타입이 됨)
const ConstObj = {
  name: "Jane",
  region: "Seoul",
  country: "Korea",
} as const;

ConstObj.name = "hi"; // ERROR! 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.

// 배열에 적용하기
const a = [1, "2", false]; // (number | string | boolean)[]
a.push([1]); // union 안에 포함되지 않으므로 number[]는 추가할 수 없음
a.push(4); // 하지만 number에 해당하는 값은 추가가 됨

const A = [1, "2", false] as const;
A.push(4); // 'readonly [1, "2", false]' 형식에 'push' 속성이 없습니다.

// 삼항 연산자에 적용하려면?
let bool = 1 === 1;
let Variable = (bool ? "true" : "false") as const;
// 'const' 어설션은 열거형 멤버나 문자열, 숫자, 부울, 배열 또는 개체 리터럴에 대한 참조에만 적용할 수 있습니다.
let VARIABLE = bool ? ("true" as const) : ("false" as const);
// 삼항 연산자의 두 선택문 모두에 as const를 사용해야 타입을 지정 가능
