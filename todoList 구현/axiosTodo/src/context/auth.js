// 로그인 된 상태를 전역 상태로 관리
import AuthApi from "apis/auth.api";
import TokenRepository from "repositories/tokenRepository";

export const SignInUser = async (email, password) => {
  try {
    const res = await AuthApi.login(email, password);
    TokenRepository.setToken(res.data.data.token);
    return res;
  } catch (err) {
    console.log(err);
  }
};
