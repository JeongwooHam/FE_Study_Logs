import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import WholeSale from "../pages/inquiry";
import FixedLayout from "../components/Layout";
import WritePage from "../pages/write";

const router = createBrowserRouter([
  {
    element: <FixedLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/Wholesale",
        element: <WholeSale />,
      },
      {
        path: "/write",
        element: <WritePage />,
      },
    ],
  },
]);

export default router;
