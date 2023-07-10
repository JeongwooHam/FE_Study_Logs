import axios from "axios";
import TokenRepository from "../repositories/tokenRepository";
import AuthApi from "./auth.api";

// 객체를 만들 때 axiosInstatnce의 기본값으로 심어주는 것
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${TokenRepository.getToken()}`,
  },
  withCredentials: true,
});

// request: 주로 access token 달아주는 로직 (FE가 BE에 요청을 보내기 전에 가로채는 것)
// 위의 headers 로직 대신해서 쓴 부분 (access token을 interceptor로 가로채서 설정할 수있음)
axiosInstance.interceptors.request.use((config) => {
  // 토큰 불러와서
  const access_token = TokenRepository.getToken();
  if (access_token) {
    // header에 토큰을 담고
    config.headers.Authorization = `Bearer ${TokenRepository.getToken()}`;
  }
  // 다시 요청 그대로 전송
  return config;
});

// reponse: 주로 refresh token 달아주는 로직 (FE가 응답을 받기 전에 응답을 가로채는 것)
axiosInstance.interceptors.response.use(
  // 성공했을 때에는 그대로 돌려줌 (성공 시 실행할 로직이 있다면 구현해줘도 됨)
  (res) => {
    return res;
  },
  // refresh token을 재발급 받아야 한다는 것은 에러가 발생했음을 의미함
  // 인증토큰이 없어서(만료되었을 때) 에러가 발생했을 때 해당 에러 코드를 가로채서 요청
  async (err) => {
    // 401번 에러 발생 시 단순히 로그아웃 시키고 토큰 삭제
    /* Access Token은 자동으로 덮어씌워짐에도 불구하고 logout 시키는 이유는?
     1. Redis로 중복 로그인 등을 관리 중인 경우
     2. logout 시점을 logging 해야 하는 경우 (logout 기록이 필요한 경우 - 최초/최종 로그인)
     3. session으로 관리 중인 경우 (서버에 부담이 가므로 session 제거 필요)
     4. refresh token을 BE에서 제거/만료해주는 경우
    */
    if (err.response.status === 401) {
      await AuthApi.logout();
      TokenRepository.removeToken();
    }

    // error의 설정 파일을 담고 있음
    const originalRequest = err.config;
    // 한 번도 재사용 된 적이 없다면
    if (err.response.status === 403 && !originalRequest._retry) {
      // 한 번 요청 후 실패 시 바로 로그아웃 시킴
      originalRequest._retry = true;

      const res = await axiosInstance.post("/user/jwt");
      // 성공 시
      if (res.status === 200) {
        // 재발급 받았으므로 토큰 다시 받아 autorization에 넣어줌
        // 응답 데이터인 토큰
        const token = res.data.data;
        // webstorage에 토큰 재설정
        TokenRepository.setToken(token);
        // header에 토큰 재설정
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
        // 기존 요청 재전송
        return axiosInstance(originalRequest);
      }
    }
  }
);
