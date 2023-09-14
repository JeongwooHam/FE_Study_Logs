import App from "./App";
import router from "./routes";

// query로 값을 찾지 못할 경우의 값인 null까지 포함하는 것으로 여겨짐
const root = document.querySelector("#root");
// ERROR! > 'root'은(는) 'null'일 수 있습니다.
// null이 아닌 경우에만 append 메소드르 사용할 수 있도록 함
root?.append(new App().el);

// 루트 요소를 등록한 후에 실행해야 하는 플러그인!
router();
