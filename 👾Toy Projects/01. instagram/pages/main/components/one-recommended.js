import { useState } from "react";
import styled from "styled-components";
const RecommendedUser = (props) => {
  const { account } = props;
  const [isFollow, setIsFollow] = useState(false);
  const IMAGEURL = account.profileImage;
  console.log(IMAGEURL);

  const handleFollowing = () => {
    setIsFollow((prev) => !prev);
  };

  return (
    <div>
      <S.Account>
        <S.BasicProfile alt="" src={IMAGEURL} />
        <S.AccountInfo>
          <S.UserName>{account.Name}</S.UserName>
          <S.AccountText>{account.Follower}님이 팔로우합니다</S.AccountText>
        </S.AccountInfo>
        {isFollow ? (
          <S.UnfollowButton onClick={handleFollowing}>
            언팔로우
          </S.UnfollowButton>
        ) : (
          <S.FollowButton onClick={handleFollowing}>팔로우</S.FollowButton>
        )}
      </S.Account>
    </div>
  );
};

export default RecommendedUser;

const Account = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

const AccountInfo = styled.div`
  width: 200px;
`;

const AccountText = styled.div`
  color: gray;
  font-weight: lighter;
  font-size: 10px;
`;

const UserName = styled.h5`
  margin: 0px;
`;

const BasicProfile = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const FollowButton = styled.button`
  border: none;
  background-color: white;
  color: skyblue;
`;

const UnfollowButton = styled.button`
  border: none;
  background-color: white;
  color: darkgray;
`;

const S = {
  Account,
  AccountInfo,
  AccountText,
  BasicProfile,
  FollowButton,
  UnfollowButton,
  UserName,
};
