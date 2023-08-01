// interface
// 1. 객체의 스펙 (속성과 속성의 타입)
// Cat 객체는 name(문자열), age(숫자), weight(숫자) 속성을 가져야함을 나타냄
interface Cat {
  name: string;
  age: number;
  weight: number;
}

// 2. 함수의 파라미터
// 두 개의 number 타입 파라미터를 받아야함을 나타냄
interface YearArgs {
  currentYear: number;
  birthYear: number;
}

// 3. 함수의 스펙 (파라미터, 반환 타입 등)
// Calc_age 함수는, 두 개의 number 타입 파라미터를 받아야하며
// 두 값을 통해 계산한 결과인 숫자값을 반환해야 함을 나타냄
// 인자를 조금 더 명시적으로 받아올 수 있음
interface CalAge {
  (args: YearArgs): number;
}

const HowOld: CalAge = (args: YearArgs) => {
  return args.currentYear - args.birthYear;
};

const result1 = HowOld({ currentYear: 2023, birthYear: 2020 });
// const result2 = HowOld({ currentYear: 2023, birthYear: "2020" }); // error

const info = { birthYear: 2020, currentYear: 2023, name: "cat" };
// 인터페이스를 인자로 받아 사용할 때, 항상 인터페이스의 속성 개수와 인자로 받는 객체의 속성 개수를 일치시킬 필요 없음
// 인터페이스에 정의된 속성, 타입의 조건만 만족하면 객체의 속성 개수가 더 많아도 됨
// 인터페이스에 선언된 속성 순서를 지키지 않아도 됨
// 만약 info에 birthYear나 currentYear가 없다면 에러 발생!
const result3 = HowOld(info);

// 4. 배열과 객체에 접근하는 방식
// ProductArr 배열에는 숫자 인덱스 값으로 문자열 요소에 접근할 수 있음을 나타냄
interface ProductArr {
  [index: number]: string;
}

// UserObj 객체에 어떻게 접근할 수 있는지 나타냄
interface UserObj {
  name: string;
  age: number;
  isSeller: boolean;
  products: ProductArr;
}

const user1: UserObj = {
  name: "hihi",
  age: 50,
  isSeller: false,
  products: ["pants", "socks"],
};

// 5. 클래스
interface CaT {
  name: string;
  legs: number;
  isFly?: boolean; // optional
  isCute: boolean;
  emotion: (action: string) => string;
}

class Cutecat implements CaT {
  name = "덕순";
  legs = 4;
  isFly = false;
  isCute = true;
  emotion = (action: string) => {
    if (action === "play") {
      return "happy";
    } else if (action === "shower") {
      return "angry";
    } else {
      return "soso";
    }
  };
}

class Cutecat2 implements CaT {
  name = "덕순";
  legs = 4;
  // isFly는 Optional 속성이므로 없어도 에러가 발생하지 않음
  isCute = true;
  emotion = (action: string) => {
    if (action === "play") {
      return "happy";
    } else if (action === "shower") {
      return "angry";
    } else {
      return "soso";
    }
  };
}

const myCat = new Cutecat();
console.log(myCat.emotion("play")); // happy
