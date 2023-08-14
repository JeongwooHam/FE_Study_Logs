// Q1. 데이터 통신을 통해 받아온 데이터의 타입 부여하기 _ generic
import axios from "axios";
import type { TodoDataBase } from "@/types/todo";

export const TodoApiWithGeneric = {
  async getTodo<T = TodoDataBase[]>(): Promise<T> {
    const res = await axios.get<T>("/");
    console.log(res);
    return res.data;
  },
};
