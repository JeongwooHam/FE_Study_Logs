import { styled } from "styled-components";
import THIRDIMG from "../img/3.jpg";

const ProductList = () => {
  return (
    <>
      <S.Title>Product List</S.Title>
      <div>
        <img src={THIRDIMG} alt="thirdImg" />
      </div>
    </>
  );
};

export default ProductList;

const Title = styled.div`
  margin: 50px;
  font-weight: bold;
  font-size: 30px;
`;

const S = { Title };
