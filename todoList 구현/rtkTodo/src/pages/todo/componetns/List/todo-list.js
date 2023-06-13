import { useSelector } from "react-redux";
import OneTodo from "./one-todo";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todos);
  const { loading } = useSelector((state) => state.todo.addTodoState);
  console.log(loading);

  if (loading) return <div>🏃‍♂️loading...🏃‍♀️</div>;
  return (
    <>
      {todoList.map((todo, i) => (
        <OneTodo key={i} todo={todo} />
      ))}
    </>
  );
};
export default TodoList;
