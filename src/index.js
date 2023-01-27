import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
