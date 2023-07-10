import styled from "styled-components";
import userInfo from "../../../data/user-info.json";
import RecommendedUser from "./one-recommended";

const RecommendUsers = () => {
  const myAccount = userInfo.Users[0];
  const recommendedAccounts = userInfo.OtherUsers;
  console.log(recommendedAccounts);

  return (
    <S.Container>
      <S.Account>
        <S.ProfileImage src="img/profileImage.jpg" />
        <S.AccountInfo>
          <S.UserName>{myAccount.Username}</S.UserName>
          <S.AccountText>{myAccount.Name}</S.AccountText>
        </S.AccountInfo>
      </S.Account>
      <div style={{ fontWeight: "bold", color: "darkgray" }}>
        회원님을 위한 추천
      </div>
      <ul style={{ margin: "0px", padding: "0px" }}>
        {recommendedAccounts.map((account, i) => (
          <RecommendedUser key={i} account={account} />
        ))}
      </ul>
      <S.Footer>
        <div>소개, 도움말, 홍보 센터, API, 채용 정보</div>
        <div>개인정보처리방침, 약관, 위치, 언어, Meta Verified</div>
        <div style={{ marginTop: "50px" }}>@2023 INSTAGRAM FROM META</div>
      </S.Footer>
    </S.Container>
  );
};

export default RecommendUsers;

const Container = styled.div`
  margin-top: 50px;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

const Account = styled.div`
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

const Footer = styled.footer`
  margin-top: 50px;
  color: lightgray;
  font-size: 12px;
  height: 100px;
`;

const S = {
  Container,
  ProfileImage,
  Account,
  AccountInfo,
  AccountText,
  UserName,
  Footer,
};
