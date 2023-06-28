import styled from "styled-components";
import useFetchMovies from "hooks/useMoviesQuery";
import { useLanguage } from "context/selectedLanguage";
import { PARAMS } from "consts/PARAMS";

const Video = ({ id }) => {
	const { selectedLanguage } = useLanguage();
	const { data } = useFetchMovies(
		1,
		selectedLanguage,
		`${id}/${PARAMS.MOVIE_VIDEOS}`,
	);

	let OfficialTrailer;
	if (data && data.results) {
		OfficialTrailer = data.results.find(video => {
			// console.log("video.type:", video.type);
			return video.type === "Trailer";
		});
	}

	// console.log("T", OfficialTrailer);
	// autoplay: 페이지 접속 시 동영상 자동재생
	// mute: chrome에서 자동재생 막는 현상 방지
	let VideoLink;
	if (OfficialTrailer) {
		VideoLink = `https://www.youtube.com/embed/${OfficialTrailer.key}?autoplay=1&mute=1`;
	}

	return (
		VideoLink && (
			<S.VideoContainer>
				<S.VideoPlayer src={VideoLink} allowFullScreen></S.VideoPlayer>
			</S.VideoContainer>
		)
	);
};

export default Video;

const VideoContainer = styled.div`
	padding: 43px 0px;
	display: flex;
	justify-content: center;
`;
const VideoPlayer = styled.iframe`
	width: 1120px;
	/* margin-left: em; */
	height: 560px;
`;
const S = {
	VideoContainer,
	VideoPlayer,
};
