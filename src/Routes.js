import { createBrowserRouter } from "react-router-dom";
import ErrorMsg from "./components/ErrorMsg";
import App from "./App";
import Filters from "./components/Filters";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorMsg />,
    // loader: add a loader
    children: [
      {
        path: "/inbox",
        element: <Filters />,
      },
      //   { path: "/watch/:id", element: <WatchPage /> },
      //   { path: "/profile", element: <ProfilePage /> },
    ],
  },
]);
