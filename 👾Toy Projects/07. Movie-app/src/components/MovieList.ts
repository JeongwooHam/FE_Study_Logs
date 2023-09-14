import { Component } from "../core/component";
import MovieItem from "./MovieItem";
import movieStore from "../store/movie";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => this.render());
    movieStore.subscribe("message", () => this.render());
    movieStore.subscribe("loading", () => this.render());
  }
  render() {
    this.el.classList.add("movie-list");
    this.el.innerHTML = /* html */ `
      ${
        movieStore.state.message
          ? `<div class="message">${movieStore.state.message}</div>`
          : '<div class="movies"></div>'
      }
      <div class="the-loader hide"></div>
    `;

    const moviesEl = this.el.querySelector(".movies");
    moviesEl?.append(
      ...movieStore.state.movies.map(
        (movie) =>
          new MovieItem({
            movie,
          }).el
      )
    );

    const loaderEl = this.el.querySelector(".the-loader");
    movieStore.state.loading
      ? // 위에서 the loader라는 class에 div 요소를 innerHTML로 추가하긴 했지만
        // TS는 HTML 결과까지는 알지 못하고 코드 상에서만 추론하게 된다.
        // 이때, loaderEl 뒤에 as HTMLDivElement를 사용하여 타입 단언을 해줄 수도 있지만
        // 에러 방지에는 optional chaining이 더 안전
        loaderEl?.classList.remove("hide")
      : loaderEl?.classList.add("hide");
  }
}
