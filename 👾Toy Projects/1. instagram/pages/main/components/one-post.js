import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faEllipsis,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import userInfo from "../../../data/user-info.json";
import OneReview from "./one-review";
import { useOpenModal } from "../context/open-modal";

const OnePost = (props) => {
  const { post } = props;

  // 이미지 슬라이드
  const [imageIndex, setImageIndex] = useState(0);
  const IMAGEURL = post.postImage[imageIndex];

  const handlePrevMove = () => {
    if (!post.postImage[imageIndex - 1]) return;
    setImageIndex(imageIndex - 1);
  };
  const handleNextMove = () => {
    if (!post.postImage[imageIndex + 1]) return;
    setImageIndex(imageIndex + 1);
  };

  // 게시글 내용 더보기
  const [isEveryContents, setIsEveryContents] = useState(false);
  const handleShowMoreContents = () => {
    console.log("clicked");
    setIsEveryContents((prev) => !prev);
  };

  // 모달창
  const { handleModal } = useOpenModal();

  // 좋아요 개수 변화
  const [likes, setLikes] = useState(post.likesTotal);
  const [isClicked, setIsClicked] = useState(false);

  const handleLikes = () => {
    setIsClicked((prev) => !prev);
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
  };

  // 댓글 더보기
  const [isEveryComments, setIsEveryComments] = useState(false);
  const handleShowMoreComments = () => {
    setIsEveryComments((prev) => !prev);
  };

  // 댓글 추가
  const [reviewList, setReviewList] = useState(post.reviews);
  const [reviewCount, setReviewCount] = useState(reviewList.length);

  const handleReviewList = (event) => {
    event.preventDefault();
    const newReviewContent = event.target.reply.value;
    const newReview = {
      reviewer: `${userInfo.Users[0].Username}`,
      reviewContent: newReviewContent,
      state: false,
    };

    const newReviewList = [...reviewList];
    newReviewList.push(newReview);
    setReviewCount(reviewCount + 1);

    setReviewList(newReviewList);
  };

  return (
    <div>
      <S.PostTop>
        <S.BasicProfile src={post.profileImage} />
        <div>
          <S.PostUser>{post.user}</S.PostUser> <span>{post.postDate} </span>{" "}
          <span>{post.postLocation}</span>
        </div>
        <S.DetailBox>
          <FontAwesomeIcon icon={faEllipsis} onClick={() => handleModal()} />
        </S.DetailBox>
      </S.PostTop>
      <S.ImageContainer>
        <S.PrevButton onClick={handlePrevMove}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </S.PrevButton>
        <S.PostImage src={IMAGEURL} />
        <S.NextButton onClick={handleNextMove}>
          <FontAwesomeIcon icon={faArrowRight} />
        </S.NextButton>
      </S.ImageContainer>
      <div></div>
      <div>
        <S.PostButton>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={handleLikes}
            style={{ color: isClicked ? "red" : "black" }}
          />
        </S.PostButton>
        <S.PostButton>
          <FontAwesomeIcon icon={faComment} />
        </S.PostButton>
        <S.PostButton>
          <FontAwesomeIcon icon={faPaperPlane} />
        </S.PostButton>
        <S.BookmarkButton>
          <FontAwesomeIcon icon={faBookmark} />
        </S.BookmarkButton>
      </div>
      <h4>좋아요{likes}개 </h4>
      <div>
        <S.PostUser>{post.user}</S.PostUser>
        <S.PostContent
          style={{
            overflow: isEveryContents ? "visible" : "hidden",
            whiteSpace: isEveryContents ? "normal" : "nowrap",
          }}
        >
          {post.postContent}
        </S.PostContent>
        <div>
          <S.ShowMoreButton onClick={handleShowMoreContents}>
            {isEveryContents ? "줄이기" : "더보기"}
          </S.ShowMoreButton>
        </div>
      </div>
      <div>
        <S.ShowMoreButton
          style={{ marginTop: "10px" }}
          onClick={handleShowMoreComments}
        >
          {isEveryComments ? "줄이기" : `댓글${reviewCount}개 모두 보기`}
        </S.ShowMoreButton>
      </div>
      <form onSubmit={handleReviewList}>
        <S.Comments style={{ height: isEveryComments ? "auto" : "22px" }}>
          {reviewList.map((review, i) => (
            <OneReview key={i} review={review} />
          ))}
        </S.Comments>
        <div>
          <S.ReplyBox placeholder="댓글 달기..." name="reply" />
        </div>
      </form>

      <hr />
    </div>
  );
};

export default OnePost;

const PostTop = styled.div`
  display: flex;
  width: 400px;
  align-items: center;
`;

const PostUser = styled.h5`
  margin: 0px;
`;

const BasicProfile = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const DetailBox = styled.span`
  margin-left: 175px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const PrevButton = styled.button`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: lightgray;
  opacity: 50%;
`;

const NextButton = styled.button`
  z-index: 1;
  position: absolute;
  top: 50%;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: lightgray;
  opacity: 50%;
`;

const PostImage = styled.img`
  z-index: 0;
  width: 400px;
  height: 400px;
`;

const PostButton = styled.span`
  margin-right: 20px;
`;

const BookmarkButton = styled.span`
  margin-left: 280px;
`;

const PostContent = styled.div`
  width: 400px;
  padding: 0px;
  text-overflow: ellipsis;
`;

const ShowMoreButton = styled.button`
  border: none;
  background-color: white;
  color: lightgray;
  padding-left: 0px;
`;

const Comments = styled.ul`
  list-style: none;
  padding-left: 0px;
  overflow: hidden;
`;

const ReplyBox = styled.input`
  border: none;
  outline: none;
`;

const S = {
  PostTop,
  PostUser,
  BasicProfile,
  DetailBox,
  ImageContainer,
  PrevButton,
  NextButton,
  PostImage,
  PostButton,
  BookmarkButton,
  PostContent,
  ShowMoreButton,
  Comments,
  ReplyBox,
};
