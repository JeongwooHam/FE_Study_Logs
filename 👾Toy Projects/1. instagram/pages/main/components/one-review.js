import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const OneReview = (props) => {
  const { review } = props;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <li style={{ position: "relative" }}>
        <span style={{ fontWeight: "bold", marginRight: "10px" }}>
          {review.reviewer}
        </span>
        {review.reviewContent}
        <FontAwesomeIcon
          icon={faHeart}
          style={{
            position: "absolute",
            right: "10",
            top: "5",
            color: isClicked ? "red" : "black",
          }}
          onClick={() => {
            setIsClicked((prev) => !prev);
          }}
        />
      </li>
    </>
  );
};

export default OneReview;
