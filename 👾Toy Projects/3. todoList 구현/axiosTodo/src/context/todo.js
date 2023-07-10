import { createContext, useContext, useState } from "react";

export const useTodoList = () => useContext(TodoList);

const TodoList = createContext();

const TodoListProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  return (
    <TodoList.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoList.Provider>
  );
};

export default TodoListProvider;
