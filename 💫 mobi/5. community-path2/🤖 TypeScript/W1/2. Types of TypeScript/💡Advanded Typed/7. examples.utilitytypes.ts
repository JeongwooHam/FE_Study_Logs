// [Utility Types]

// Partial
// 직접 정의해보면
type PARTIAL<T> = {
  [P in keyof T]?: T[P] | undefined;
};

interface SignUp {
  email: string;
  pw: string;
  age: number;
  phoneNum: string | number;
}

type Partial_SignUp = PARTIAL<SignUp>;
type signup = Partial<SignUp>; // 위에서 직접 정의한 PARTIAL과 동일하게 동작함
/*
type signup = {
    email ?: string | undefined;
    pw ?: string | undefined;
    age ?: string | undefined;
    phoneNum ?: string | number | undefined
}
*/

const newUser1: Partial<SignUp> = {}; // 빈 객체만 할당해줘도 됨
// const newUser2: Partial<SignUp> = { region: "Seoul" }; // 물론 없는 속성 지정 시 에러 발생

// Pick
// 직접 정의해보면
// generic T와 K의 관계를 extends를 사용하여 명시
type PICK<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Pick 사용법
interface Book {
  title: string;
  author: string;
  publication: number;
  pages: number;
}

type newBook = Pick<Book, "title" | "publication">; // Book의 속성들이 자동완성됨

const myBook: newBook = {
  title: "Frankenstein",
  publication: 1816,
};

myBook; // newBook이 자동완성되어 보여짐

// Omit
// 직접 정의해보면
// 유틸 타입 중 Pick과 Exclude를 조합한 버전이라고 볼 수 있음
// K에 해당하는 타입을 Exclude한 타입들을 Pick
// extends keyof any: 오직 타입만 받도록 설정한 것
type OMIT<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// Omit 사용법
interface Movie {
  title: string;
  director: string;
  openingYear: number;
  runningTime: number;
}

type newMovie = Omit<Movie, "runningTime">;

const myMovie: newMovie = {
  // title, director, openingYear까지만 자동완성됨
  title: "The Perks of Being a Wallflower",
  director: "Stephen Chbosky",
  openingYear: 2012,
};

myMovie; // newMovie가 자동완성되어 보여짐

// ReturnType
function FUNCTION(args: string): number {
  return parseInt(args);
}

// return 타입이므로 string이 아닌 number!
const B: ReturnType<typeof FUNCTION> = 12345;

// 함수의 리턴 타입을 반환
// type TYPE = number
type TYPE = ReturnType<typeof FUNCTION>;

// const A: TYPE = "111"; // 에러 발생
const Aa: TYPE = 111;

const C = FUNCTION("123"); // 실제 함수를 실행하려면 이렇게 해야 함

// return 값에 따른 returnType

type First = ReturnType<() => number>;
// number
type Second = ReturnType<(data: number) => typeof data>;
// number
type Third = ReturnType<number>;
// 함수가 아니므로 에러 발생. Third의 타입은 any로 추론됨
type Fourth = ReturnType<() => {}>;
// { } (void가 아닌 객체로 추론됨)
type Fifth = ReturnType<() => void>;
// void
type Sixth = ReturnType<() => []>;
// []
type Seventh = ReturnType<() => number[]>;
// number[]
type Eighth = ReturnType<(data) => {}>;
// {} (data의 타입은 any로 추론됨)
