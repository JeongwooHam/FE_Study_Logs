// generic
// any를 지정한 것처럼 어떤 타입의 인자와 반환 값이 오더라도 잘 동작함
// 하지만 컴파일러 입장에서는 number 등이 들어왔을 때는 length가 유효하지 않을 수 있으므로
// 아래의 상태에서는 .length가 허용되지 않음
function returnData<T>(data: T): T {
  // data에 length가 있다는 단서가 없기 때문에 에러 발생
  console.log(data.length); // Error: T 형식에 length 속성이 없습니다.
  return data;
}

function returnDataLength<T>(data: T[]): T[] {
  console.log(data.length); // generic 타입이 배열이므로 length 혀용
  return data;
}
// 조금 더 명시적인 방법
function returnDataLength2<T>(data: Array<T>): Array<T> {
  console.log(data.length); // generic 타입이 배열이므로 length 혀용
  return data;
}

// 복잡한 코드에서 아래의 방식으로 타입 추정이 안 될 경우 사용
const numberArr = returnData<number[]>([1, 2, 3]);
// 두 번째 방법이 코드도 더 간결하고 가독성도 좋아 자주 사용됨
const stringArr = returnData(["a", "b", "c"]);

// generic과 interface
function returnCatData<T>(data: T): CaT<T> {
  return data as CaT<T>;
}

interface CaT<T> {
  name: string;
  legs: number;
  emotion: (action: string) => string;
  // option 속성에는 다양한 데이터 자료가 들어온다고 가정할 수 있음
  options: T;
}

// generic 자체에 리터럴 객체 타입도 할당 가능
const newCat: CaT<{ isFly: boolean; isCute: boolean }> = {
  name: "cutecat",
  legs: 4,
  emotion: (action: string) => {
    if (action === "nap") {
      return "😸";
    } else if (action === "hospital") {
      return "😾";
    } else {
      return "😼";
    }
  },
  // generic 타입에 의해 options 속성의 타입이 유연하게 할당됨
  options: { isFly: false, isCute: true },
};

const createNewCat = returnData<typeof newCat>(newCat);
console.log(createNewCat.emotion("bother Jane")); // 😼

// 제네릭 클래스
class CalcBill<T> {
  sum: T;
  tax: T;
  totalBill: (sum: T, tax: T) => T;
}

let Restaurant = new CalcBill<number>();

// 제네릭 제약 조건
interface Length {
  length: number;
}

function getLength<T extends Length>(data: T): T {
  console.log(data.length);
  return data;
}

getLength(10); // number 형식의 인수에는 length가 존재하지 않으므로 에러 발생
getLength("hi"); // string에는 length 속성이 자체적으로 존재함
getLength({ length: 5 }); // 객체의 length라는 키 값에 접근하여 에러 없음

// 객체의 속성 제약
// O extends keyof T를 통해 첫 번째 인자로 받는 객체의 키 값이 아닌 경우 접근 불가하게 제한
function getUserData<T, O extends keyof T>(obj: T, key: O) {
  return obj[key];
}

let userObj = { name: "aaa", pw: 1234, isSeller: false };

getUserData(userObj, "name");
getUserData(userObj, "region"); // 존재하지 않는 키값이므로 에러 발생
