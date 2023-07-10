import styled from "styled-components";
import Credits from "./credits";
import Plot from "./plot";
import Gallery from "./gallery";
import DetailInfo from "./detail-info";
import { useEffect, useState } from "react";

const MovieInfo = ({ id, target }) => {
	const [posterURL, setPosterURL] = useState(null);
	const BaseURL = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		setPosterURL(`${BaseURL}${target.poster_path}`);
	}, []);

	return (
		<S.MovieInfoContainer>
			<S.MovieDetail>
				{target.poster_path ? (
					<div>
						<S.MoviePoster src={posterURL} />
					</div>
				) : (
					<S.NoPoster>No Poster</S.NoPoster>
				)}
				<S.MovieDetailContent>
					<DetailInfo target={target} />
					<Credits id={id} />
				</S.MovieDetailContent>
			</S.MovieDetail>
			<Plot plot={target.overview} />
			<Gallery id={id} />
		</S.MovieInfoContainer>
	);
};

export default MovieInfo;

const MovieInfoContainer = styled.div`
	width: 1080px;
	padding-top: 20px;
	padding-left: 20px;
	display: grid;
	height: 500px;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
`;

const MoviePoster = styled.img`
	width: 165px;
	height: 269px;
`;

const MovieDetail = styled.div`
	grid-area: 1 / 1 / 2 / 5;
	display: flex;
`;

const MovieDetailContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 20px;
`;

const NoPoster = styled.div`
	width: 165px;
	height: 269px;
	background-color: gray;
	text-align: center;
	padding-left: 9px;
	padding-top: 120px;
`;

const S = {
	MovieInfoContainer,
	MoviePoster,
	MovieDetail,
	MovieDetailContent,
	NoPoster,
};
