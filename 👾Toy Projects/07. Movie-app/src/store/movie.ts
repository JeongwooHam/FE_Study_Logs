import { Store } from "../core/component";

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieDetail {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  // Rating을 따로 interface로 분리하는 것도 가능!
  // interface를 너무 세세하게 만들 필요는 없고 복잡할 때
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface SearchState {
  searchText: string;
  page: number;
  pageMax: number;
  movies: Movie[]; // 영화의 목록 정보
  movie: MovieDetail; // 영화의 상세 정보
  loading: boolean;
  message: string;
}

const store = new Store<SearchState>({
  searchText: "",
  page: 1,
  pageMax: 1,
  movies: [], // 빈 배열만 두면 빈 배열로 타입이 추론된다. (never[])
  movie: {} as MovieDetail,
  // 빈 객체 데이터는 getMovieDetails 함수가 호출되어 서버로부터 가져온 결과가 있을 때에만 객체 값이 갱신될 수 있다.
  loading: false,
  message: "Search for the movie title!",
});

export default store;

// 해당 페이지의 영화를 가지고 오는 함수
export const searchMovies = async (page: number) => {
  store.state.loading = true;
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
    store.state.message = "";
  }
  try {
    const res = await fetch("/api/movie", {
      method: "POST",
      body: JSON.stringify({
        title: store.state.searchText,
        page,
      }),
    });
    const { Response, Search, totalResults, Error } = await res.json();
    if (Response === "True") {
      store.state.movies = [...store.state.movies, ...Search];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
    }
  } catch (error) {
    console.log("searchMovies error:", error);
  } finally {
    store.state.loading = false;
  }
};

// 영화의 상세 정보를 가지고 오는 함수
export const getMovieDetails = async (id: string) => {
  try {
    const res = await fetch("/api/movie", {
      method: "POST",
      body: JSON.stringify({
        id,
      }),
    });
    store.state.movie = await res.json();
  } catch (error) {
    console.log("getMovieDetails error:", error);
  }
};
