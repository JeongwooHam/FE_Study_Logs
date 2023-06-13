import { useTodoList } from "context/todo";
import OneTodo from "./one-todo";

const TodoList = () => {
  const { todoList } = useTodoList();
  return (
    <>
      {todoList.map((todo) => (
        <OneTodo todo={todo} />
      ))}
    </>
  );
};
export default TodoList;
