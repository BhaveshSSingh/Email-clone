import { createBrowserRouter } from "react-router-dom";
import ErrorMsg from "./components/ErrorMsg";
import App from "./App";
import ProfilePage from "./page/ProfilePage";
import SingleEmailPage from "./page/inbox/SingleEmailPage";
import Tabs from "./page/inbox/Inbox";
import SentPage from "./page/sent/SentPage";
import SingleSentEmail from "./page/sent/SingleSentEmail";

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
      { path: "/sent/:id", element: <SingleSentEmail /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
]);
