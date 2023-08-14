// 사용자 정의 타입가드

import { TodoDataBase, TodoEnum } from "@/types/todo";
import type { TodoType } from "@/types/todo";

const dailyTodo = (todo: TodoDataBase): todo is TodoType<TodoEnum.DAILY> => {
  return todo.type === TodoEnum.DAILY;
};

const weeklyTodo = (todo: TodoDataBase): todo is TodoType<TodoEnum.WEEKLY> => {
  return todo.type === TodoEnum.WEEKLY;
};

const monthlyTodo = (
  todo: TodoDataBase
): todo is TodoType<TodoEnum.MONTHLY> => {
  return todo.type === TodoEnum.MONTHLY;
};

const CheckTodoType = { dailyTodo, weeklyTodo, monthlyTodo };

export default CheckTodoType;
