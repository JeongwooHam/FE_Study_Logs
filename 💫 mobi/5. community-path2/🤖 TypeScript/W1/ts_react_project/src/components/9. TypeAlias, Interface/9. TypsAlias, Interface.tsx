// 1. 함수를 사용할 수 있는가?
type FuncType = (num1: number, num2: number) => number;
const addType: FuncType = (num1, num2) => num1 + num2;
console.log(addType(1, 2)); // ok!

interface FuncInterface {
  (num1: number, num2: number): number;
}
const addInterface: FuncInterface = (num1, num2) => num1 + num2;
console.log(addInterface(1, 2)); // ok!

// 2. 생성자를 사용할 수 있는가?
class User {
  constructor(public name: string, public age: number) {}
}

type ConsType = new (name: string, age: number) => User;

interface ConsInterface {
  new (name: string, age: number): User;
}

const createUserType: ConsType = User;
const JaneDoe = new createUserType("Jane", 20); // ok!

const createUserInterface: ConsInterface = User;
const JohnDoe = new createUserInterface("John", 20); // ok!

// 3. 튜플을 사용할 수 있는가?
type TupleType = [string, boolean];

// 표준 튜플 타입이 따로 존재하지 않고, 직접 구현해주어야 함
interface TupleInterface {
  0: string;
  1: boolean;
}

const createTupleType: TupleType = ["isHot", true]; // ok!
const createTupleInterface: TupleInterface = ["iscold", false]; 

// 4. 정의된 후 동일한 이름으로 확장 가능한가?
type Book = {
  title: string;
};

type Book = {
  author: string;
};

const Frankenstein: Book = {
  title: "Frankenstein",
  author: "Mary Shelley",
};

interface BOOK {
  title: string;
}

interface BOOK {
  author: string;
}

const Hamlet: BOOK = {
  title: "Hamlet",
  author: "Shakespeare",
};

// 5. 객체가 아닌 값을 사용할 수 있는가?
type Str = string;
type Num = number;
type StringArr = string[];

// ERROR!
//인터페이스는 'string' 같은 기본 형식을 확장할 수 없습니다.
// 인터페이스는 명명된 형식 및 클래스만 확장할 수 있습니다.
interface STR extends string {
  value: string;
}
// ERROR!
// 인터페이스는 선택적 형식 인수가 포함된 식별자/정규화된 이름만 확장할 수 있습니다
interface STRARR extends string[] {

}

// 6. Computed Value를 사용할 수 있는가?
type info = "height" | "age" 

type UserInfo = {
    [key in info]: number
}

const NewUser: UserInfo = {height: 180, age: 20}

interface UserInterface {
    [key in info]: number
}

const NewUser2: UserInterface = {height: 180, age: 20}

// 7. mapped type을 사용할 수 있는가?
type MyMap<T> = {
    [K in keyof T]: T[K] | null;
}

type Animal = {
    legs: number;
    isFly: boolean;
}

type MyCat = MyMap<Animal>;
const CuteCat: MyCat = {
    legs: 4,
    isFly: false,
}

// T, K, keyof, T 값을 읽을 수 없다는 에러 발생
interface MyMapInterface<T> = {
    [K in keyof T]: T[K] | null;
}

// 8. 다른 TypeAlias/Interface와 intersection을 형성할 수 있는가?
type TYPE1 = {x: string};
type TYPE2 = {y: boolean};

type TYPE3 = TYPE1 & TYPE2;
const NewType: TYPE3 = {
    x: "a",
    y: true
}

interface INTER1 {
    x: string
}

interface INTER2 {
    y: boolean
}

// ERROR! 
// 인터페이스는 선택적 형식 인수가 포함된 식별자/정규화된 이름만 확장할 수 있습니다.
interface INTER3 extends (INTER1 & INTER2) {

}

// 9. 다른 TypeAlias/Interface와 union을 형성할 수 있는가?
type TYPE4 = {x: string};
type TYPE5 = {y: boolean};

type TYPE6 = TYPE1 | TYPE2;
const NewType2: TYPE6 = {
    x: "a",
}

interface INTER4 {
    x: string
}

interface INTER5 {
    y: boolean
}

// ERROR! 
// 인터페이스는 선택적 형식 인수가 포함된 식별자/정규화된 이름만 확장할 수 있습니다.
interface INTER6 extends (INTER1 | INTER2) {

}

// 10. 에러메세지와 로그를 자세히 보여줄 수 있는가?
type MyBook = {
    title: string,
    author: string
}

const Demian: MyBook = {title: "Demian", author: "Hermann Hesse"}

interface YourBook {
    title: string,
    author: string
}

const Gatsby: YourBook = {title:"The Great Gatsby", author: "F. Scott Fitzgerald"}