// Q2. 타입가드로 유동적인 타입에 자동완성 지원하기
// 타입 가드를 활영하여 todo.type에 따라 자동 완성이 구현되도록 구현하기
// props로 todo:TodoDataBase를 전달받음

import { TodoDataBase } from "@/types/todo";
import CheckTodoType from "@/utils/checkType";
import Daily from "./daily";
import Weekly from "./weekly";
import Monthly from "./monthly";

interface props {
  todo: TodoDataBase;
}

const OneTodo: React.FC<props> = ({ todo }) => {
  if (CheckTodoType.dailyTodo(todo))
    return <Daily title={todo.title} content={todo.content} />;
  if (CheckTodoType.weeklyTodo(todo)) return <Weekly total={todo.total} />;
  if (CheckTodoType.monthlyTodo(todo)) return <Monthly goal={todo.goal} />;
};

export default OneTodo;
