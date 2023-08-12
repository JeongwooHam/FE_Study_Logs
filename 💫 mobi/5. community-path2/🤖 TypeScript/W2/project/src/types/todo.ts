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

export type TodoType<T extends TodoEnum = TodoEnum> = Extract<
  TodoDataBase,
  { type: T }
>;
