import { Store } from "../core/component";

interface Person {
  photo: string;
  name: string;
  email: string;
  github: string;
}

// core > component.ts > Store 컴포넌트의 제네릭 S 부분에 Person이 들어가게 됨
export default new Store<Person>({
  photo: "https://avatars.githubusercontent.com/u/123251211?v=4",
  name: "JANE / JeongwooHam",
  email: "hamjw0122@gmail.com",
  github: "https://github.com/JeongwooHam",
  // phone: 010 > 개체 리터럴은 알려진 속성만 지정할 수 있으며 'Person' 형식에 'phone'이(가) 없습니다.
});
