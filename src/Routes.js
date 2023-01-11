import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import EmailBody from "./components/EmailBody";
import EmailList from "./components/EmailList";
import ErrorMsg from "./components/ErrorMsg";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorMsg />,
    children: [
      {
        path: "/email:id",
        element: <EmailBody />,
      },
    ],
  },
]);
