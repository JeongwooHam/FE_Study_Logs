import { setupWorker } from "msw";
import * as TodoAPI from "./apis/todo.apis";

const handler = [...Object.values(TodoAPI)];

export const worker = setupWorker(...handler);
