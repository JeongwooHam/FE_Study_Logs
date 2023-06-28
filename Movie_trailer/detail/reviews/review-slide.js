import Slider from "react-slick";
import OneReview from "./one-review";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const NextArrow = ({ style, onClick }) => {
	return (
		<FontAwesomeIcon
			style={{
				...style,
				display: "block",
				position: "absolute",
				zIndex: "1",
				marginTop: "-125px",
				marginLeft: "1050px",
			}}
			onClick={onClick}
			icon={faChevronRight}
		/>
	);
};

const PrevArrow = ({ style, onClick }) => {
	return (
		<FontAwesomeIcon
			style={{
				...style,
				display: "block",
				position: "absolute",
				zIndex: "1",
				marginTop: "120px",
				marginLeft: "-30px",
			}}
			onClick={onClick}
			icon={faChevronLeft}
		/>
	);
};

const MultipleItems = ({ reviewList }) => {
	// console.log("reviewList", reviewList);

	const settings = {
		dots: true,
		arrow: true,
		infinite: true,
		speed: 700,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	return (
		<S.ReviewSliderBox>
			{reviewList.length >= 3 ? (
				<Slider {...settings}>
					{reviewList.map((review, i) => (
						<OneReview key={i} review={review} />
					))}
				</Slider>
			) : (
				<S.ReviewContainer>
					{reviewList.map((review, i) => (
						<OneReview key={i} review={review} />
					))}
				</S.ReviewContainer>
			)}
		</S.ReviewSliderBox>
	);
};

export default MultipleItems;

const ReviewSliderBox = styled.div`
	margin-left: 60px;
`;

const ReviewContainer = styled.div`
	display: flex;
	margin-left: -40px;
`;

const S = { ReviewSliderBox, ReviewContainer };
