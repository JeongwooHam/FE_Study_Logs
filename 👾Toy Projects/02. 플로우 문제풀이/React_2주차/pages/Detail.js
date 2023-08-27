import { useNavigate, useParams } from "react-router-dom";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import { useEffect, useState } from "react";
import styled from "styled-components";
import productList from "../__mock__/products.json";

function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.productNumber);
  const [reviewer, setReviewer] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewContent, setReviewContent] = useState("");
  const [targetProduct, setTargetProduct] = useState(
    productList.products.find(
      (product) => product.productNumber === params.productNumber
    )
  );

  console.log(params);
  // useEffect(() => {
  //   navigate("/state");
  // });

  console.log(targetProduct);

  const imageArr = {
    302012: img1,
    103852: img2,
    289632: img3,
    13579: img4,
    24680: img5,
    24242: img6,
  };

  const image = imageArr[params.productNumber];

  const handleReviewer = (e) => {
    setReviewer(e.target.value);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const handleReview = (e) => {
    setReviewContent(e.target.value);
  };

  const onAddReview = () => {
    const review = {
      reviewer: `${reviewer}`,
      review: `${reviewContent}`,
      rating: `${rating}`,
    };

    const newProduct = { ...targetProduct };
    newProduct.Review.push(review);

    setTargetProduct(newProduct);
  };

  if (targetProduct) {
    return (
      <div>
        <p>
          <img alt="hi" src={image} width="300" height="300" />
        </p>
        <div>
          <p>상품 번호: {targetProduct.productNumber}</p>
          <p>상세 정보: {targetProduct.productDetail.productDetailInfo}</p>
        </div>
        <hr />
        <div>
          <h2>REVIEW</h2>
          <ul>
            {targetProduct.Review.map((review, i) => (
              <li key={i}>
                <h5>{review.reviewer}</h5>
                <p>
                  {review.review}({review.rating})
                </p>
              </li>
            ))}
          </ul>
        </div>
        <Container>
          <Reply>
            <Title>Reply</Title>
            <Reviewer placeholder="reviewer" onChange={handleReviewer} />
            <Rating
              type="number"
              placeholder="rating"
              onChange={handleRating}
            />{" "}
            <br />
            <Review placeholder="review" onChange={handleReview}></Review>
            <br />
            <Button onClick={onAddReview}>댓글 작성</Button>
          </Reply>
        </Container>
      </div>
    );
  } else {
    navigate("/state");
  }
}
export default DetailPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Reply = styled.div`
  width: 800px;
  height: 230px;
  margin: 0 25%;
  border: 1px solid lightgray;
`;

const Title = styled.p`
  margin-top: 0;
  width: 100%;
  height: 30px;
  background-color: lightgray;
`;

const Reviewer = styled.input`
  width: 39%;
  height: 30px;
  margin-right: 10px;
  border: 1px solid lightgray;
`;

const Rating = styled.input`
  width: 29%;
  height: 30px;
  border: 1px solid lightgray;
`;

const Review = styled.textarea`
  width: 70%;
  height: 80px;
  margin: 1% 0;
  border: 1px solid lightgray;
`;

const Button = styled.button`
  width: 10%;
  height: 30px;
  border: none;
  background-color: darkgray;
  color: white;
`;
