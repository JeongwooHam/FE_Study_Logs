import { PARAMS } from "consts/PARAMS";
import { useLanguage } from "context/selectedLanguage";
import useFetchMovies from "hooks/useMoviesQuery";
import styled from "styled-components";

const Credits = ({ id }) => {
	/*
	movie/{movie_id}/credits (프로필 이미지도 추가할 지 고민해볼 것)
        - 감독
            - key: crew
            - job: Director 중 첫 번째
        - 작가
            - key: crew
            - job: Story 중 첫 번째
        - 배우 
            - key: cast (바로 접근 안 되므로 주의)
            - known_for_department로 filter 돌리기 (Acting)
            - order 값이 0, 1인 배우 가져오기 
	*/
	// const [creditData, setCreditData] = useState(null);

	// const getCredits = async movie_id => {
	// 	const res = await axiosInstance.get(`/movie/${movie_id}/credits`);
	// 	// console.log("credit", res.data);
	// 	setCreditData(res.data);
	// };

	// useEffect(() => {
	// 	getCredits(id);
	// }, []);

	// const { data } = useQuery(
	// 	[QUERYKEYS.MOVIE_CREDITS, id],
	// 	() => MovieApi.getMovieCredits(id, { page: 1 }),
	// 	{ staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 4 },
	// );
	const { selectedLanguage } = useLanguage();
	const { data } = useFetchMovies(
		1,
		selectedLanguage,
		`${id}/${PARAMS.MOVIE_CREDITS}`,
	);
	// console.log("credit", data);

	const creditData = data;

	//배우
	let FirstCast;
	let SecondCast;
	if (creditData && creditData.cast && creditData.cast.length >= 1) {
		FirstCast = creditData.cast[0].name;
	} else {
		FirstCast = "unknown";
	}
	// 배우 없는 경우
	if (creditData && creditData.cast && creditData.cast.length >= 2) {
		SecondCast = creditData.cast[1].name;
	} else {
		SecondCast = null;
	}

	// 제작진
	let Director;
	let Writer;

	if (creditData) {
		Director = creditData.crew.find(
			person => person.known_for_department === "Directing",
		);
		Writer = creditData.crew.find(
			person => person.known_for_department === "Writing",
		);
	}
	// 이름 없는 경우
	if (Director && Director.name) {
		Director = Director.name;
	} else {
		Director = "unknown";
	}

	if (Writer && Writer.name) {
		Writer = Writer.name;
	} else {
		Writer = "unknown";
	}

	return (
		creditData && (
			<CreditContainer>
				<S.Container>
					<S.Title>
						{selectedLanguage === "ko-KR" ? "감독" : "Director"}
					</S.Title>
					{Director}
				</S.Container>
				<S.Container>
					<S.Title>{selectedLanguage === "ko-KR" ? "각본" : "Writer"}</S.Title>
					{Writer}
				</S.Container>
				<S.Container>
					<S.Title>
						{selectedLanguage === "ko-KR" ? "출연" : "Top Cast"}
					</S.Title>
					{FirstCast}, {SecondCast && SecondCast}
				</S.Container>
			</CreditContainer>
		)
	);
};

export default Credits;

const CreditContainer = styled.div`
	/* height: 250px; */
`;

const Container = styled.div`
	display: flex;
`;

const Title = styled.div`
	font-size: 15px;
	font-weight: 700;
	margin-bottom: 10px;
	margin-right: 30px;
`;

const S = { Container, Title };
