import { Component } from "../core/component";
import type { Movie } from "../store/movie";

interface Props {
  [key: string]: unknown;
  movie: Movie;
}

export default class MovieItem extends Component {
  /* 
  public props: Props
  - 'Props' 형식은 '{ [key: string]: unknown; }' 형식에 할당할 수 없습니다.
  - 속성 'props'은(는) 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다.
  */
  public props!: Props;

  constructor(props: Props) {
    super({
      props,
      tagName: "a",
    });
  }
  render() {
    const { movie } = this.props;

    this.el.setAttribute("href", `#/movie?id=${movie.imdbID}`);
    this.el.classList.add("movie");
    this.el.style.backgroundImage = `url(${movie.Poster})`;
    this.el.innerHTML = /* html */ `
      <div class="info">
        <div class="year">
          ${movie.Year}
        </div>
        <div class="title">
          ${movie.Title}
        </div>
      </div>
    `;
  }
}
