// Q2. 타입가드로 유동적인 타입에 자동완성 지원하기
// 타입 가드를 활영하여 todo.type에 따라 자동 완성이 구현되도록 구현하기
// props로 todo:TodoDataBase를 전달받음

import { TodoDataBase } from "@/types/todo";
import CheckTodoType from "@/utils/checkType";
interface props {
  todo: TodoDataBase;
}

const OneTodo: React.FC<props> = (props) => {
  if (CheckTodoType.dailyTodo(props.todo))
    return (
      <div>
        <div>DAILY TODO</div>
        <div>제목: {props.todo.title}</div>
        <div>내용: {props.todo.content}</div>
      </div>
    );
  if (CheckTodoType.weeklyTodo(props.todo))
    return (
      <div>
        <div>WEEKLY TODO</div>
        <div>총 날짜: {props.todo.total + ""}</div>
      </div>
    );
  if (CheckTodoType.monthlyTodo(props.todo))
    return (
      <div>
        <div>MONTLY TODO</div>
        <div>이번 달 목표: {props.todo.goal}</div>
      </div>
    );
};
export default OneTodo;
