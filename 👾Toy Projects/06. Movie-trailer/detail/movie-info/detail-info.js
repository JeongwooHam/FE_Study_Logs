const { default: styled } = require("styled-components");

const DetailInfo = ({ target }) => {
	// 등급: adult? 19 : 15
	// 제목: title
	// 개봉년도: release_date.split("-")[0]
	// 개봉국가: production_countries[0]["iso_3166_1"]
	// 장르: genres -> map 돌리기
	// 평점: vote_average (vote_count)
	// console.log("country", target.production_countries);

	let ReleasedYear;
	if (target.release_date) {
		// YYYY-MM-DD
		ReleasedYear = target.release_date.split("-")[0];
	} else {
		ReleasedYear = "unknown";
	}

	// iso_3166_1: 국가 이름 축약형
	let ReleastedCountry;
	if (
		target &&
		target.production_countries &&
		target.production_countries.length
	) {
		ReleastedCountry = target.production_countries[0]["iso_3166_1"];
	} else {
		ReleastedCountry = "unknown";
	}
	return (
		<>
			<S.MovieDetailTop>
				<S.MovieRate>{target.adult ? 19 : 15}</S.MovieRate>
				<S.MovieTitle>{target.title ? target.title : "unknown"}</S.MovieTitle>
			</S.MovieDetailTop>
			<S.MovieDetailMiddle>
				<p>
					<span>{ReleasedYear}</span> <span>|</span>
					<span>{ReleastedCountry}</span>
				</p>
				<p>
					{/* <MovieGenre>Comedy</MovieGenre>
					<MovieGenre>Drama</MovieGenre>
					<MovieGenre>Fantasy</MovieGenre> */}
					{target && target.genres
						? target.genres.map((genre, i) => (
								<S.MovieGenre key={i}>{genre.name}</S.MovieGenre>
						  ))
						: null}
				</p>
			</S.MovieDetailMiddle>
			<S.StarRating>
				<p>{"★".repeat(Math.floor((target.vote_average / 2).toFixed(1)))}</p>
				<span>
					{(target.vote_average / 2).toFixed(1)}({target.vote_count})
				</span>
			</S.StarRating>
		</>
	);
};

export default DetailInfo;

const MovieDetailTop = styled.div`
	margin-top: 10px;
	display: flex;
`;

const MovieRate = styled.span`
	background-color: #ffe5e5;
	height: 35px;
	font-size: 24px;
	color: #646464;
	font-weight: Semi bold;
	border-radius: 5px;
	text-align: center;
	vertical-align: middle;
	padding: 5px;
`;

const MovieTitle = styled.div`
	font-weight: bold;
	font-size: 25px;
	margin-left: 16px;
	margin-top: 5px;
`;

const MovieDetailMiddle = styled.div`
	display: flex;
	font-size: 15px;
	font-weight: 400;
	line-height: 21px;
	p {
		display: flex;
	}
	span {
		margin-right: 5px;
	}
`;

const MovieGenre = styled.span`
	background-color: #d9d9d9;
	border-radius: 34px;
	width: 75px;
	height: 21px;
	margin-left: 10px;
	text-align: center;
`;

const StarRating = styled.div`
	font-size: 16px;
	color: #f09191;
	margin-left: -5px;
	display: flex;
	p {
		font-size: 32px;
		font-weight: bold;
		margin-right: 10px;
	}
	span {
		font-size: 24px;
		line-height: 32px;
		font-weight: 200;
	}
`;

const S = {
	MovieDetailTop,
	MovieRate,
	MovieTitle,
	MovieDetailMiddle,
	MovieGenre,
	StarRating,
};
