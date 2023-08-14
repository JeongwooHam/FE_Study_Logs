import type { TodoDataBase } from "@/types/todo";
import { TodoApiWithGeneric } from "@/apis/2";
import { useEffect, useState } from "react";
import OneTodo from "./components/one-todo";

// todo[]를 map으로 순회하여 OneTodo 컴포넌트들을 렌더링할 상위 컴포넌트
const Q1Component: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoDataBase[]>([]);

  const getDataWithGeneric = async (): Promise<TodoDataBase[]> => {
    const todo = await TodoApiWithGeneric.getTodo();
    return todo;
  };

  useEffect(() => {
    getDataWithGeneric().then((res) => setTodoList(res));
  }, []);

  return (
    <div>
      {todoList.map((todo) => (
        <OneTodo todo={todo} />
      ))}
    </div>
  );
};
export default Q1Component;
