import styled from "styled-components";
import { Link } from "react-router-dom";

const WholeSale = () => {
  return (
    <>
      <S.Container>
        <div>
          <S.Image src="img/pc0.jpg" />
        </div>
        <S.Content>
          <div>
            클라이언트, 파트너 및 임직원을 위한 선물을 논픽션과 함께 준비해
            보세요.
            <br />
            정성이 가득 담긴 논픽션의 다양한 기프트 세트는
            <br />
            웨딩을 비롯한 각종 가족 행사의 답례품으로도 손색 없는 선택입니다.
            <br />
            공간에 각인되는 논픽션의 시그니처 향과 완성도 높은 퀄리티의 제품은
            <br />
            받는 이의 곁에서 특별한 감사의 기억을 더욱 오래도록 전해드릴
            것입니다.
          </div>
        </S.Content>
        <div>
          <S.Button>
            <Link
              to="/write"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              기업 구매 상담
            </Link>
          </S.Button>
        </div>
        <S.Note>
          <h3>기업 구매 유의사항</h3>
          <p>용도 확인 정책</p>
          <div>
            재판매 등 의도하지 않은 부작용을 막기 위해 대량 구매 진행시 용도에
            관한 명확한 확인 절차와 증빙자료를 요청드리고 있습니다. <br /> 대량
            구매 제품을 선물 이외의 용도로 사용하시는 것은 엄격하게 제한됩니다.
          </div>

          <p>배송 및 소요시간</p>
          <div>
            협의된 배송일에 지정된 한 곳의 주소지로 택배 발송됩니다. <br />{" "}
            배송까지의 소요시간은 주문 수량 및 포장/물류 센터의 상황에 따라
            달라질 수 있습니다. <br /> 대량 주문은 최소 1주일 전 발주를 권해
            드리며, <br /> 견적 요청시 희망 배송일을 함께 확인해 정상 배송 가능
            여부를 알려드리고 있습니다
          </div>

          <p>교환정책</p>

          <div>
            하자가 있거나 배송 중 파손된 제품에 대해서는 배송 받으신 송장과
            훼손된 부분을 사진으로 확인한 뒤 교환해 드리고 있습니다. <br /> 단순
            변심 등 기타 개인적 사유에 의한 반품 및 교환은 불가한 점 양지해
            주시기 바랍니다.
          </div>
        </S.Note>
      </S.Container>
    </>
  );
};

export default WholeSale;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 2;
`;

const Image = styled.img`
  margin-top: 30px;
  width: 950px;
  height: 675px;
`;

const Content = styled.div`
  height: 200px;
  margin: 20px 0;
  padding-top: 30px;
`;

const Button = styled.button`
  background-color: #ffffff;
  border: solid 1px #000000;
  width: 300px;
  height: 42px;
  margin-bottom: 50px;
`;

const Note = styled.div`
  width: 100%;
  background-color: #fafafa;
  padding: 40px 20px;
  p {
    text-decoration: underline;
  }
`;

const S = {
  Container,
  Image,
  Content,
  Button,
  Note,
};
