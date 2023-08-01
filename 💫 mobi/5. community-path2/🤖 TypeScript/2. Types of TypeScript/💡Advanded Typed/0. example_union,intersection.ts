// union
let union: string | object;
union = "{'key' : 'value'}";
union = { key: "value" };
// union = [value]; // error

// 배열에 union 사용하기
// 1.  tuple처럼 string과 number만 허용하는데 순서가 자유로움
let arr: (string | number)[] = [0, "1", 2, 3, "4"];
// 위처럼 괄호로 묶지 않으면 의도대로 표현 불가능
let arr2: string | number[];
arr2 = "aa";
arr2 = [1, 2, 3]; // string과 number[]로 인식
// 2. 다른 표현 방법
let arr3: Array<string | number> = ["0", 1, "2", 3, "4"];

// 함수에 union 사용하기
const calculateMoney = (user: string, bill: number | string) => {
  return;
};
const User1 = calculateMoney("user1", 1000000);
const User2 = calculateMoney("user2", "100,000");

// 함수의 오버로딩
function ReturnData(
  data1: string | number,
  data2: string | number
): string | number | undefined {
  return data1 + data2; // error: + 연산자를 string|number, string|number 형식에 적용할 수 없음
}
// string + number, number + string이 될 수도 있어 에러 발생
ReturnData("hi", 1);

// 오버로드 함수 선언법: 중괄호 없는 함수를 실제 함수 위에 써줌
// 하나의 함수 타입에서는 하나의 역할만 하게 됨
function ReturnDataOverload(data1: string, data2: string): string;
function ReturnDataOverload(data1: number, data2: number): number;
// 🤔 오버로드 함수에서는 any를 써도 괜찮을까?
// any는 함수의 실행부에 적혀 있는데,
// 컴파일러는 오버로드 함수 선언부들의 타입만 보고 실행하기 때문에 실행부에 쓴 any는 문제가 되지 않음
// 실제로 실행부만 보고 선언부에 정의되지 않은 타입의 데이터를 넣으면 오류가 발생하므로,
// 실행부에서의 any 타입은 작동하지 않음을 알 수 있다.
function ReturnDataOverload(data1: any, data2: any): any {
  // 오버로드 함수 실행부
  return data1 + data2;
}

ReturnDataOverload("hello", "hi");
ReturnDataOverload(1, 2);
ReturnDataOverload("hi", 1); // 에러: 이 호출과 일치하는 오버로드가 없습니다.

// intersection
type Person = {
  isFemale: boolean;
  job: string;
};

type Student = {
  job: string;
  grade: number;
};

// person과 student의 속성 모두 사용 가능
const Jane: Person & Student = {
  isFemale: true,
  job: "student",
  grade: 4,
};
