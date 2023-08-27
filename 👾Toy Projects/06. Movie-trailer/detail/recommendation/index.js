import styled from "styled-components";
import MovieList from "components/movie-list";
import { useLanguage } from "context/selectedLanguage";
import useMovieList from "hooks/useMovieList";
import { PARAMS } from "consts/PARAMS";

const SimilarMovies = ({ id }) => {
	/*
		movie/{movie_id}/similar
        - 각 영화 클릭하면 해당 페이지로 이동할 수 있도록 하기
        - results로 접근 후 사용
        - 포스터: .poster_path
        - 제목: .title
        - 평점: .vote_average
	*/

	const { selectedLanguage } = useLanguage();

	const { data, isSuccess, isLoading, isFetching, pageNum, ref } = useMovieList(
		`${id}/${PARAMS.MOVIE_SIMILAR}`,
	);

	console.log("similar", data);

	if (isLoading && pageNum === 1) {
		return <div>Loading...</div>;
	}
	if (!data && pageNum === 1) {
		return <div>Data is not available</div>;
	}
	return (
		data?.results && (
			<S.MoreLikeThis>
				<S.Title style={{ margin: "20px" }}>
					{selectedLanguage === "ko-KR" ? "유사 작품 추천" : "More Like This"}
				</S.Title>
				<MovieList movies={data?.results} />
				{(isLoading || isFetching) && <div>Loading More...</div>}
				{!isFetching && (
					<div ref={ref}>{isSuccess && pageNum < data.total_pages}</div>
				)}
			</S.MoreLikeThis>
		)
	);
};

export default SimilarMovies;

const MoreLikeThis = styled.div`
	margin-top: 50px;
`;

const Title = styled.div`
	font-size: 28px;
	font-style: italic;
	font-weight: 500;
	margin-bottom: 20px;
`;

const S = { MoreLikeThis, Title };
