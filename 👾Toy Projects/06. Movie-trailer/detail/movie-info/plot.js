import { useLanguage } from "context/selectedLanguage";
import styled from "styled-components";

const Plot = ({ plot }) => {
	const { selectedLanguage } = useLanguage();
	return (
		<S.Container>
			<S.Title>{selectedLanguage === "ko-KR" ? "줄거리" : "Plot"}</S.Title>
			<S.Overview>{plot ? plot : "No Plot"}</S.Overview>
		</S.Container>
	);
};

export default Plot;

const Container = styled.div`
	grid-area: 2 / 1 / 3 /5;
	margin-top: 20px;
	height: auto;
`;

const Title = styled.div`
	font-size: 28px;
	font-style: italic;
	font-weight: 500;
	margin-bottom: 20px;
`;

const Overview = styled.div`
	font-weight: 200;
	line-height: 25px;
	overflow: hidden;
	text-overflow: ellipsis;
	// 5줄 넘어가면 ... 처리
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	white-space: normal;
`;

const S = {
	Container,
	Title,
	Overview,
};
