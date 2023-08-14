// API 통신을 통해 받아온 데이터의 타입
export enum TodoEnum {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}

export type TodoDataBase =
  | {
      type: TodoEnum.DAILY;
      content: string;
      title: string;
    }
  | {
      type: TodoEnum.WEEKLY;
      total: Date;
    }
  | {
      type: TodoEnum.MONTHLY;
      goal: string;
    };

// TodoType은 TodoEnum의 세 값 중 하나가 될 수 있는 제네릭 T를 가진다.
// TodoDataBase에서 type 속성이 T와 일치하는 객체의 타입을 추출한다.
// 예: TodoType<TodoEnum.WEEKLY>: TodoEnum.WEEKLY 객체의 타입 추출
export type TodoType<T extends TodoEnum = TodoEnum> = Extract<
  // 타입을 추출할 범위 타입
  TodoDataBase,
  // 추출할 타입을 조건으로 나타내는 객체 타입 (TodoEnum)
  { type: T }
>;
