// interface를 통해 타입 부여하기
import { TodoDataBase } from "@/types/todo";
import axios, { AxiosResponse } from "axios";

/*
실제 axios의 response 구성
* T
  - 서버로부터 받은 응답 데이터의 타입
* D
  - 데이터 디코딩에 사용되는 타입
  - 서버 응답 데이터 포맷에 따라 자동 추론 (JSON, XML 등...) 
export interface AxiosResponse<T = any, D = any> {
  // data: 서버 응답의 실제 데이터 (T에 따라 타입 자동 추론)
  data: T;
  // status: HTTP 응답 상태 코드
  status: number;
  // statusText: HTTP 응답 상태 메시지
  statusText: string;
  // headers: HTTP 응답 헤더
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  // config: Request 객체 설정
  config: InternalAxiosRequestConfig<D>;
  // request: 요청 객체 (optional)
  request?: any;
}
*/

interface Response extends AxiosResponse {
  data: TodoDataBase;
}

export const TodoApi = {
  async getTodo() {
    const res: Response = await axios.get("/");
    return res.data;
  },
};
