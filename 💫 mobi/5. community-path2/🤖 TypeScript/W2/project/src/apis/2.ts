// 2. axios에 제네릭을 사용하여 타입 부여하기
import axios from "axios";
import type { TodoDataBase } from "@/types/todo";

export const TodoApi = {
  async getTodo<T = TodoDataBase>(): Promise<T> {
    const res = await axios.get<T>("/");
    console.log(res);
    return res.data;
  },
};
