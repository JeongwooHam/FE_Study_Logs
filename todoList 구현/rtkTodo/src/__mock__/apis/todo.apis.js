import { todoMock } from "__mock__/datas/todo.data";
import { rest } from "msw";

export const getTodo = rest.get("/api/todo", async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(todoMock));
});

export const addTodo = rest.post("/api/todo", async (req, res, ctx) => {
  let title;
  let content;

  await req.json().then((data) => {
    title = data.title;
    content = data.content;
  });

  return res(
    ctx.status(200),
    ctx.json({
      id: Math.floor(Math.random() * 100000),
      title,
      content,
      state: false,
    })
  );
});

export const deleteTodo = rest.delete(
  "/api/todo/:id",
  async (req, res, ctx) => {
    const { id } = req.params;
    // const filteredArr = todoMock.filter((todo) => todo.id !== parseInt(id));
    return res(ctx.status(200), ctx.json({ id: parseInt(id) }));
  }
);

export const updateTodoContent = rest.put(
  "/api/todo/:id",
  async (req, res, ctx) => {
    const { id } = req.params;
    let content;
    let state;

    await req.json().then((data) => {
      content = data.content;
      state = data.state;
    });

    return res(ctx.status(200), ctx.json({ id: parseInt(id), content, state }));
  }
);

// export const updateTodoState = rest.put(
//   "/api/todo/:id",
//   async (req, res, ctx) => {
//     const { id } = req.params;
//     let state;

//     await req.json().then((data) => {
//       state = data.state;
//     });

//     return res(ctx.status(200), ctx.json({ id: parseInt(id), state }));
//   }
// );
