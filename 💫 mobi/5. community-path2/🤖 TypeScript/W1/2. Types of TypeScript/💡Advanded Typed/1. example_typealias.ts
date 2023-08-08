// type alias
type CalcAge = (year: number) => number;

// 🤔 type alias가 없었다면..?
// 한 줄로 복잡하고 긴 타입을 정의해야 해서 가독성에 좋지 않음
// const CAT: {
//   name: string;
//   age: Cal_Age;
//   isFemale: boolean;
//   family: string[];
// } = {
//   name: "덕순",
//   age: (year: number) => year - 2020,
//   isFemale: true,
//   family: ["father", "mother", "sister1", "sister2"],
// };

// TYPE ALIAS를 사용하면
type CAT = {
  name: string;
  age: CalcAge;
  isFemale: boolean;
  family: string[];
};

const CuteCat: CAT = {
  name: "덕순",
  age: (year: number) => year - 2020,
  isFemale: true,
  family: ["father", "mother", "sister1", "sister2"],
};

const currentYear: number = 2023;
const age: number = CuteCat.age(currentYear);
console.log(`I am ${age} years old.`); // I am 3 years old
