// typeof
function sampleFunc(args: number | boolean): void {
  // if문 내에서는 args가 number 타입임을 컴파일러가 확신할 수 있다.
  if (typeof args === "number") {
    console.log(args + 1);
  } else {
    // number이 아니면 boolean임을 추론한다.
    console.log(!args);
  }
}

// Array.isArray
function sampleFunc2(args: number | number[]): void {
  if (Array.isArray(args)) {
    console.log(args.slice(0, 1));
  } else {
    console.log(args + 1);
  }
}

class Dog {
  bark = true;
  fly = false;
}

class Bird {
  fly = true;
  chirp = true;
}

// instance of
function MyPet(args: Dog | Bird) {
  if (args instanceof Dog) {
    console.log(args.bark);
    console.log(args.fly);
  } else {
    console.log(args.bark);
    console.log(args.fly);
  }
  console.log(args.fly);
  console.log(args.chirp);
}

MyPet(new Dog());

// in
interface Cat {
  sleep: boolean;
  fly: boolean;
}

interface Bird2 {
  fly: boolean;
  chirp: boolean;
}

function NewPet(args: Cat | Bird2) {
  if ("sleep" in args) {
    console.log(args.fly); // fly, sleep 자동완성
  } else {
    console.log(args.fly); // never 형식에 fly 속성이 없습니다.
  }

  console.log(args.fly); // fly만 자동완성됨
}

const myCat: Cat = { sleep: true, fly: false };
NewPet(myCat);

// 리터럴 타입 가드
type iphone = { type: "apple"; released: number };
type galaxy = { type: "samsung"; liked: number };

function myPhone(args: iphone | galaxy) {
  if (args.type === "apple") {
    console.log(args.released); // type, released 자동완성
  } else {
    console.log(args.liked); // type, liked 자동완성
  }
}

// null check
const fakeFunc = (props: unknown): void => {
  if (props === null || props === undefined) return;
  // 함수 로직...
};

function foo(a?: number | null) {
  if (a == null) return;
  console.log(a + 1);
  // 이제부터 a는 무조건 number입니다.
}

// 사용자 정의 타입가드
interface yourDog {
  bark: number;
  fly: boolean;
}
interface yourBird {
  chirp: number;
  fly: boolean;
}

// 타입 가드 역할을 하는 커스텀 함수
// yourDog 타입인지 확인 하는 역할을 한다. (리턴 타입에 is 키워드를 붙여 사용한다.)
function dogOrBird(a: yourDog | yourBird): boolean {
  // 직접 타입 판별 로직 구현 (bark라는 프로퍼티가 있다면)
  if ((a as yourDog).bark) {
    // bark, fly 자동완성
    return false; // 만일 개면 false
  } else {
    return true; // 만일 새면 true
  }
}

function pet(a: yourDog | yourBird) {
  if (dogOrBird(a)) {
    // 개일 경우
    console.log(a.bark); // bark, fly 자동완성
  } else {
    // 새일 경우
    console.log(a.chirp); // chirp, fly 자동완성
  }
}

// 콜백함수 타입가드

declare const FOO: { KEY?: { VALUE: string } };

function IIFE(callbackFunc: () => void) {
  callbackFunc();
}

// Type Guard
if (FOO.KEY) {
  console.log(FOO.KEY.VALUE);
  const val = FOO.KEY;
  IIFE(() => {
    console.log(val.VALUE); // ERROR! 'FOO.KEY'은(는) 'undefined'일 수 있습니다.
  });
}
