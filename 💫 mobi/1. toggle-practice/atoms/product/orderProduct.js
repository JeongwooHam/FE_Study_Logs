import { styled } from "styled-components";
import FOURTHIMG from "../img/4.jpg";

const OrderProduct = () => {
  return (
    <>
      <S.Title>Order Product</S.Title>
      <div>
        <img src={FOURTHIMG} alt="fourthImg" />
      </div>
    </>
  );
};

export default OrderProduct;

const Title = styled.div`
  margin: 50px;
  font-weight: bold;
  font-size: 30px;
`;

const S = { Title };
