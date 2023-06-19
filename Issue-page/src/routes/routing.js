import { createBrowserRouter } from "react-router-dom";
import IssueDetailPage from "../pages/issue-detail";
import IssueMainPage from "../pages/main";
import Layout from "../layouts";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <IssueMainPage />,
      },
      {
        path: "/detail/:id",
        element: <IssueDetailPage />,
      },
    ],
  },
]);

export default router;
