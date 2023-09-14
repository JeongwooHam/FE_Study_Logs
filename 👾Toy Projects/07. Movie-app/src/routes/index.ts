import { createRouter } from "../core/component";
import Home from "./Home";
import Movie from "./Movie";
import About from "./About";
import NotFound from "./NotFound";

export default createRouter([
  // 객체 내에 path, component가 아닌 다른 key 값 추가 시 에러 발생
  { path: "#/", component: Home },
  { path: "#/movie", component: Movie },
  { path: "#/about", component: About },
  { path: ".*", component: NotFound }, // '.*' === '.{0,}'
]);
