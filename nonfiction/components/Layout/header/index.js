import styled from "styled-components";

const Header = () => {
  return (
    <>
      <S.Container>
        <div className="topHeader">논픽션 선물하기 서비스를 이용해보세요</div>
        <div className="middleHeader">
          [발렌타인데이 에디션] 리미티드 패키지 & 퍼퓸 파우치 증정
        </div>
        <div className="bottomHeader">
          <S.Image src="img/half_logo.png" />
        </div>
      </S.Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-size: 12px;

  .topHeader {
    height: 30px;
    background-color: #a9a9a9;
    line-height: 30px;
  }

  .middleHeader {
    height: 30px;
    background-color: #000000;
    line-height: 30px;
  }
`;

const Image = styled.img`
  width: 135px;
  height: 75px;
  padding: 20px 0px 0px;
`;

const S = {
  Container,
  Image,
};
