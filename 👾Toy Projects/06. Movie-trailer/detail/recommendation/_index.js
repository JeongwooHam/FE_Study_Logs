import styled from "styled-components";
import { useEffect, useState } from "react";
import { axiosInstance } from "apis/@core";
import MovieList from "components/movie-list";

const SimilarMovies = ({ id }) => {
	/*
		movie/{movie_id}/similar
        - 각 영화 클릭하면 해당 페이지로 이동할 수 있도록 하기
        - results로 접근 후 사용
        - 포스터: .poster_path
        - 제목: .title
        - 평점: .vote_average
	*/

	const [similarMovies, setSimilarMovies] = useState([]);

	const getRecommendation = async movie_id => {
		const res = await axiosInstance.get(`/movie/${movie_id}/similar`, {
			params: { api_key: process.env.REACT_APP_TOKEN },
		});
		// console.log("similar", res.data);
		setSimilarMovies(res.data.results);
	};

	useEffect(() => {
		getRecommendation(id);
	}, []);

	return (
		similarMovies && (
			<div>
				<S.Title style={{ margin: "20px" }}>More Like This</S.Title>
				<MovieList movies={similarMovies} />
			</div>
		)
	);
};

export default SimilarMovies;

const Title = styled.div`
	font-size: 28px;
	font-style: italic;
	font-weight: 500;
	margin-bottom: 20px;
`;

const S = { Title };
