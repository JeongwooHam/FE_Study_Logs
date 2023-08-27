const { axiosInstance } = require("./@core");

// 이 상수만 바뀌면 모든 API의 URL이 바뀌며 오타 걱정 X
const PATH = "/user";

// 이렇게 API를 나눔으로써 자동완성 가능 (URL 고민할 필요 X)
const AuthApi = {
  login(email, password) {
    return axiosInstance.get(
      PATH + "/login",
      { email, password },
      { withCredentials: true }
    );
  },
  signUp(email, password) {
    return axiosInstance.post(PATH + "/signIn", { email, password });
  },
  logout() {
    return axiosInstance.post(PATH + "/logout");
  },
};

export default AuthApi;
