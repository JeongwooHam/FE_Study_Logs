import { styled } from "styled-components";
import OrderProduct from "../atoms/product/orderProduct";
import ProductList from "../atoms/product/productList";
import EditAccount from "../atoms/user/editAccount";
import DeleteAccount from "../atoms/user/deleteAccount";

const useParamKey = (title, key) => {
  console.log("title, key", title, key);
  const CONTENT = {
    product: {
      order: <OrderProduct />,
      list: <ProductList />,
    },
    user: {
      edit: <EditAccount />,
      delete: <DeleteAccount />,
    },
  };

  return CONTENT[title]?.[key] ? CONTENT[title]?.[key] : <S.HOME>HOME</S.HOME>;
};

export default useParamKey;

const HOME = styled.div`
  margin: 50px;
  font-size: 50px;
  font-weight: bold;
`;

const S = { HOME };
