import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "../../components/2.state/product";
import productList from "../../__mock__/products.json";

function State3() {
  console.log(productList.products);
  const productsArr = productList.products;

  const navigate = useNavigate();

  const onNavigateDetailPage = (idx) => {
    navigate(`/state/detail/${productsArr[idx - 1].productNumber}`);
  };

  return (
    <>
      <h1>문제3</h1>
      <h2>상품 목록</h2>
      <ul>
        {productsArr.map((product, i) => (
          <ProductCard
            key={i}
            id={i + 1}
            product={product}
            onNavigate={onNavigateDetailPage}
          />
        ))}
      </ul>
    </>
  );
}
export default State3;

const Item = styled.li`
  border: 1px solid #000;
  cursor: pointer;
  width: 300px;
  margin: 16px auto;
`;
