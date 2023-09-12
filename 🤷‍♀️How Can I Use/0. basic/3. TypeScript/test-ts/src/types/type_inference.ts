/*
[타입 추론]
1. 초기화된 변수
2. 기본값이 설정된 매개 변수
3. 반환값이 있는 함수
*/

{
  let num = 12;
  num = "hello"; // number로 추론되었음

  // 매개변수 b의 타입이나 return 값의 타입을 지정하지 않아도 자동 추론됨
  const addNum = (a: number, b = 2) => a + b;
}
