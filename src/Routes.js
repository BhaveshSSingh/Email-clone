import { createBrowserRouter } from "react-router-dom";
import ErrorMsg from "./components/ErrorMsg";
import App from "./App";
import Filters from "./components/Filters";
import SentPage from "./page/SentPage";
import StarredPage from "./page/StarredPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorMsg />,
    children: [
      {
        path: "/inbox",
        element: <Filters />,
      },
      { path: "/sent", element: <SentPage /> },
      { path: "/starred", element: <StarredPage /> },
    ],
  },
]);
