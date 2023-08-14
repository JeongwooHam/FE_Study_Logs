import { TodoApiWithInterface } from "@/apis/1";
import { TodoApiWithGeneric } from "@/apis/2";

// 1.ts로 받아온 데이터 (todo: TodoDataBase[]로 자동완성됨)
const getDataWithInterface = async () => {
  const todo = await TodoApiWithInterface.getTodo();
  console.log(todo);
};

getDataWithInterface();

// 2.ts로 받아온 데이터 (todo: TodoDataBase[]로 자동완성됨)
const getDataWithGeneric = async () => {
  const todo = await TodoApiWithGeneric.getTodo();
  console.log(todo);
};

getDataWithGeneric();
