import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { todoMock } from "__mock__/datas/todo.data";

const initialState = {
  todos: todoMock,
  addTodoState: {
    loading: false,
    done: false,
    err: null,
  },
  deleteTodoState: {
    loading: false,
    done: false,
    err: null,
  },
  editTodoState: {
    loading: false,
    done: false,
    err: null,
  },
  editTodoStateState: {
    loading: false,
    done: false,
    err: null,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // Thunk 사용 전 rtk로만 작성한 코드
  reducers: {
    // addTodo(state, action) {
    //   state.todos.unshift(action.payload);
    // },
    // deleteTodo(state, action) {
    //   state.todos = state.todos.filter((el) => el.id !== action.payload);
    // },
    // updateTodoContent(state, action) {
    //   const index = state.todos.findIndex((el) => el.id === action.payload.id);
    //   state.todos[index].content = action.payload.content;
    //   state.todos[index].state = action.payload.state;
    // },
    // updateTodoState(state, action) {
    //   const index = state.todos.findIndex((el) => el.id === action.payload.id);
    //   state.todos[index].state = action.payload.state;
    // },
  },
  extraReducers: (builder) => {
    // 추가
    builder.addCase(addTodo.pending, (state) => {
      state.addTodoState.loading = true;
      state.addTodoState.done = false;
      state.addTodoState.err = null;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos.unshift(action.payload);
      state.addTodoState.loading = false;
      state.addTodoState.done = true;
      state.addTodoState.err = null;
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.addTodoState.loading = false;
      state.addTodoState.done = false;
      state.addTodoState.err = action.payload;
    });
    // 삭제
    builder.addCase(deleteTodo.pending, (state) => {
      state.deleteTodoState.loading = true;
      state.deleteTodoState.done = false;
      state.deleteTodoState.err = null;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      console.log("data", action.payload);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      state.deleteTodoState.loading = false;
      state.deleteTodoState.done = true;
      state.deleteTodoState.err = null;
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.deleteTodoState.loading = false;
      state.deleteTodoState.done = false;
      state.deleteTodoState.err = action.payload;
    });
    // 내용 수정
    builder.addCase(updateTodoContent.pending, (state) => {
      state.editTodoState.loading = true;
      state.editTodoState.done = false;
      state.editTodoState.err = null;
    });
    builder.addCase(updateTodoContent.fulfilled, (state, action) => {
      const index = state.todos.findIndex((el) => el.id === action.payload.id);
      state.todos[index].content = action.payload.content;
      state.todos[index].state = action.payload.state;
      state.editTodoState.loading = false;
      state.editTodoState.done = true;
      state.editTodoState.err = null;
    });
    builder.addCase(updateTodoContent.rejected, (state, action) => {
      state.editTodoState.loading = false;
      state.editTodoState.done = false;
      state.editTodoState.err = action.payload;
    });
    // 상태 수정
    // builder.addCase(updateTodoState.pending, (state) => {
    //   state.editTodoStateState.loading = true;
    //   state.editTodoStateState.done = false;
    //   state.editTodoStateState.err = null;
    // });
    // builder.addCase(updateTodoState.fulfilled, (state, action) => {
    //   const index = state.todos.findIndex((el) => el.id === action.payload.id);
    //   state.todos[index].state = action.payload.state;
    //   state.editTodoStateState.loading = false;
    //   state.editTodoStateState.done = true;
    //   state.editTodoStateState.err = null;
    // });
    // builder.addCase(updateTodoState.rejected, (state, action) => {
    //   state.editTodoStateState.loading = false;
    //   state.editTodoStateState.done = false;
    //   state.editTodoStateState.err = action.payload;
    // });
  },
});

// export const { addTodo } = todoSlice.actions;
// export const { deleteTodo } = todoSlice.actions;
// export const { updateTodoContent } = todoSlice.actions;
// export const { updateTodoState } = todoSlice.actions;
export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async ({ title, content }) => {
    const res = await axios.post("/api/todo", { title, content });
    return res.data;
  }
);

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  try {
    const res = await axios.delete(`/api/todo/${id}`);
    return res.data;
  } catch (err) {
    throw new Error("Failed to DELETE:(");
  }
});

export const updateTodoContent = createAsyncThunk(
  "todo/updateTodoContent",
  async (updatedContent) => {
    try {
      const res = await axios.put(`/api/todo/${updatedContent.id}`, {
        content: updatedContent.content,
        state: updatedContent.state,
      });
      // const res = await axios.request({
      //   url: `/api/todo/${updatedContent.id}}`,
      //   method: "PUT",
      //   data: updatedContent,
      // });
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
);

// export const updateTodoState = createAsyncThunk(
//   "todo/updateTodoState",
//   async (updatedContent) => {
//     try {
//       const res = await axios.put(`/api/todo/${updatedContent.id}`, {
//         state: updatedContent.state,
//       });
//       return res.data;
//     } catch (err) {
//       console.error(err);
//     }
//   }
// );
