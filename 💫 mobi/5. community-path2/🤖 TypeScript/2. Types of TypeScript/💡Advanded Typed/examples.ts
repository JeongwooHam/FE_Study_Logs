// union
let union: string | object;
union = "{'key' : 'value'}";
union = { key: "value" };
union = [value]; // error

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

// intersection

// conditional

// type alias

// interface

// as const

// optional

// satisfies

// generic

// ===========================================================================================
// [Utility Types]

// Partial

// Omit

// Pick

// ReturnType
