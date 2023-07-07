import OrderProduct from "../atoms/product/orderProduct";
import ProductList from "../atoms/product/productList";
import DeleteAccount from "../atoms/user/deleteAccount";
import EditAccount from "../atoms/user/editAccount";

export const TOGGLELIST = [
  {
    title: "Account",
    children: [
      { key: "edit", content: "Edit Account" },
      { key: "delete", content: "Delete Account" },
    ],
  },
  {
    title: "Product",
    children: [
      { key: "list", content: "Product List" },
      { key: "order", content: "Order Product" },
    ],
  },
];

export const ToggleContents = {
  Account: {
    edit: <EditAccount />,
    delete: <DeleteAccount />,
  },
  Product: {
    list: <ProductList />,
    order: <OrderProduct />,
  },
};
