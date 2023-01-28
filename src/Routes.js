import { createBrowserRouter } from "react-router-dom";
import ErrorMsg from "./components/ErrorMsg";
import App from "./App";
import SentPage from "./page/SentPage";
import StarredPage from "./page/StarredPage";
import ProfilePage from "./page/ProfilePage";
import SingleEmailPage from "./page/SingleEmailPage";
import Tabs from "./components/Tabs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorMsg />,
    children: [
      {
        path: "/inbox",
        element: <Tabs />,
      },
      {
        path: "/:id",
        element: <SingleEmailPage />,
      },
      { path: "/sent", element: <SentPage /> },
      { path: "/starred", element: <StarredPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
]);
