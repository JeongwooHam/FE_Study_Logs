import { useModal } from "context/modal";
import { useTodoList } from "context/todo";
import { useEffect } from "react";
import TodoApi from "apis/todo.api";

const useTodo = () => {
  const { todoList, setTodoList } = useTodoList();
  const { setIsAddTodoModal } = useModal();

  const getTodoList = async () => {
    try {
      const res = await TodoApi.getTodo();
      console.log(res);
      setTodoList(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  // 추가
  const addTodo = async (title, content) => {
    try {
      if (!title || !content) {
        const err = new Error();
        err.type = "empty error";
        err.message = "빈칸을 채워주세요";
        throw err;
      }
      const res = await TodoApi.addTodo(title, content);
      setTodoList([res.data.data, ...todoList]);
      setIsAddTodoModal(false);
    } catch (err) {
      throw err;
    }
  };

  // 내용 수정
  const updateTodo = async (id, content, state) => {
    try {
      const res = await TodoApi.updateTodo(id, content, state);
      console.log(res.data.data);
      getTodoList();
    } catch (err) {
      console.error(err);
    }
  };

  // 상태 수정
  const updateTodoState = async (id, content, state) => {
    try {
      const res = await TodoApi.updateTodoState(id, content, state);
      console.log(res.data.data);
      getTodoList();
    } catch (err) {
      console.error(err);
    }
  };

  // 삭제
  const deleteTodo = async (id) => {
    try {
      if (window.confirm("정말 삭제하시겠습니까")) {
        const res = await TodoApi.deleteTodo(id);
        console.log(res.data.data);
        getTodoList();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return {
    getTodoList,
    addTodo,
    updateTodo,
    updateTodoState,
    deleteTodo,
  };
};
export default useTodo;
