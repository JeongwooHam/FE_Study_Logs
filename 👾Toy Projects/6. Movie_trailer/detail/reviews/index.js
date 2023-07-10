import styled from "styled-components";
import ReviewSlides from "./review-slide";
import { useLanguage } from "context/selectedLanguage";
import useFetchMoviesWithoutLanguage from "hooks/useFetchMoviesWithoutLan";
import { PARAMS } from "consts/PARAMS";

const Reviews = ({ id }) => {
	/*
	movie/{movie_id}/reviews
        - results 로 접근 후 map 돌리기 (뱌로 사용하지 않도록 주의)

	*/
	// const [reviewList, setReviewList] = useState([]);

	// const getReviews = async movie_id => {
	// 	const res = await axiosInstance.get(`/movie/${movie_id}/reviews`, {
	// 		params: { api_key: process.env.REACT_APP_TOKEN },
	// 	});
	// 	// console.log("credit", res.data);
	// 	setReviewList(res.data.results);
	// 	// console.log("reviews", res.data);
	// };

	// useEffect(() => {
	// 	getReviews(id);
	// }, []);

	// const { data } = useQuery(
	// 	[QUERYKEYS.MOVIE_REVIEWS, id],
	// 	() => MovieApi.getMovieReviews(id, { page: 1 }),
	// 	{ staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 4 },
	// );
	const { data } = useFetchMoviesWithoutLanguage(
		1,
		`${id}/${PARAMS.MOVIE_REVIEWS}`,
	);
	// console.log("reviews", data?.data?.results);

	const reviewList = data?.data?.results;

	const { selectedLanguage } = useLanguage();
	return (
		<S.ReviewBox>
			<S.ReviewsTop>
				<S.Title>{selectedLanguage === "ko-KR" ? "리뷰" : "Reviews"}</S.Title>
				<span>{reviewList?.length}</span>
			</S.ReviewsTop>
			{reviewList?.length ? (
				<ReviewSlides reviewList={reviewList} />
			) : (
				<S.NoReview>No Reviews</S.NoReview>
			)}
		</S.ReviewBox>
	);
};

export default Reviews;

const ReviewBox = styled.div`
	margin-top: 50px;
`;

const ReviewsTop = styled.div`
	display: flex;
	margin-left: 20px;
	span {
		margin-left: 10px;
		font: 25px italic;
		color: lightgray;
	}
`;

const Title = styled.div`
	font-size: 28px;
	font-style: italic;
	font-weight: 500;
	margin-bottom: 20px;
`;

const NoReview = styled.div`
	height: 100px;
	color: darkgray;
	margin-left: 20px;
`;

const S = { ReviewBox, ReviewsTop, Title, NoReview };
