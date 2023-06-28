import styled from "styled-components";
import { useLanguage } from "context/selectedLanguage";
import useFetchMoviesWithoutLanguage from "hooks/useFetchMoviesWithoutLan";
import { PARAMS } from "consts/PARAMS";

const Gallery = ({ id }) => {
	/*
		movie/{movie_id}/images
        - file_path
        - 가로형 1: backdrop[0]
        - 세로형 2: posters[0], posters[1]
	*/
	const BaseURL = "https://image.tmdb.org/t/p/w500";
	let Image1;
	let Image2;
	let Image3;

	// const [images, setImages] = useState(null);
	// const getImages = async movie_id => {
	// 	const res = await axiosInstance.get(`/movie/${movie_id}/images`);
	// 	// console.log("images", res.data);
	// 	setImages(res.data);
	// };

	// useEffect(() => {
	// 	getImages(id);
	// }, []);

	// const { data } = useQuery(
	// 	[QUERYKEYS.MOVIE_IMAGES, id],
	// 	() => MovieApi.getMovieImages(id, { page: 1 }),
	// 	{ staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 4 },
	// );
	const { data } = useFetchMoviesWithoutLanguage(
		1,
		`${id}/${PARAMS.MOVIE_IMAGES}`,
	);
	// console.log("images", data);

	const images = data?.data;

	// 가로로 긴 이미지 에러 핸들링
	if (images && images.backdrops.length) {
		Image1 = BaseURL + images.backdrops[0].file_path;
	} else {
		Image1 = null;
	}
	// 왼쪽 포스터 에러 핸들링
	if (images && images.logos.length) {
		Image2 = BaseURL + images.logos[0].file_path;
	} else {
		Image2 = null;
	}
	// 오른쪽 포스터 에러 핸들링
	// 포스터에서 두 장을 다 가져올 경우 두 사진이 똑같은 경우가 많아서 하나는 logo key로 받아오도록 하였습니다.
	if (images && images.posters.length) {
		if (images.posters.length > 100) {
			Image3 = BaseURL + images.posters[100].file_path;
		} else {
			Image3 = BaseURL + images.posters[0].file_path;
		}
	} else {
		Image3 = null;
	}

	const { selectedLanguage } = useLanguage();
	return (
		images && (
			<S.MovieGallery>
				<S.Title>{selectedLanguage === "ko-KR" ? "갤러리" : "Gallery"}</S.Title>
				<div>
					{Image1 ? (
						<S.TopImage src={Image1} />
					) : (
						<S.NoBackdropImage>No Image</S.NoBackdropImage>
					)}
				</div>
				<S.GalleryBottom>
					{Image2 ? (
						<S.BottomImage src={Image2} />
					) : (
						<S.NoImage>No Image</S.NoImage>
					)}
					{Image3 ? (
						<S.BottomImage src={Image3} />
					) : (
						<S.NoImage>No Image</S.NoImage>
					)}
				</S.GalleryBottom>
			</S.MovieGallery>
		)
	);
};

export default Gallery;

const Title = styled.div`
	font-size: 28px;
	font-style: italic;
	font-weight: 500;
	margin-bottom: 20px;
`;

const MovieGallery = styled.div`
	grid-area: 1/5/3/6;
	text-align: right;
	width: 300px;
	margin-left: 150px;
`;

const TopImage = styled.img`
	width: 300px;
	height: 160px;
`;

const GalleryBottom = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`;

const BottomImage = styled.img`
	width: 140px;
	height: 180px;
`;

const NoBackdropImage = styled.div`
	width: 300px;
	height: 160px;
	background-color: gray;
	text-align: center;
	padding-left: 9px;
	padding-top: 70px;
`;
const NoImage = styled.div`
	width: 140px;
	height: 180px;
	background-color: gray;
	text-align: center;
	padding-left: 10px;
	padding-top: 80px;
`;
const S = {
	Title,
	MovieGallery,
	TopImage,
	GalleryBottom,
	BottomImage,
	NoBackdropImage,
	NoImage,
};
