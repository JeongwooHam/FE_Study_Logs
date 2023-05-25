import styled from "styled-components";
import { fontFamily } from "../../../style/common";

const Footer = () => {
  return (
    <>
      <S.Container>
        <div>
          <S.Title>CUSTOMER SERVICE</S.Title>
          <div>1666-7891</div>
          <div>이용약관 | 개인정보처리방침 | 사업자 정보 확인</div>
        </div>
        <div>
          <S.Title>MEMBERSHIP BENEFIT</S.Title>
          <div>공식 온라인 스토어 혜택</div>
          <div>무료 시향지 신청</div>
        </div>
        <div>
          <S.Title>INFO</S.Title>
          <div>공지사항</div>
          <div>채용</div>
          <div>자주묻는 질문</div>
          <div>배송 & 교환/반품</div>
        </div>
        <div>
          <S.Title>CONTACT US</S.Title>
          <div>주문조회</div>
          <div>문의하기</div>
          <div>기업구매 문의</div>
          <div>고객센터</div>
          <div>매장안내</div>
        </div>
        <div>
          <S.Title>SOCIAL</S.Title>
          <div>Instagram</div>
          <div>Pinterest</div>
          <div>Kakao</div>
        </div>
      </S.Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  position: absolute;
  width: 100%;
  padding: 50px 0;
  margin-top: 30px;
  font-size: 14px;
  line-height: 2;
  border-top: solid 1px;

  display: flex;
  justify-content: space-around;
`;

const Title = styled.h3`
  ${fontFamily}
`;

const S = {
  Container,
  Title,
};
