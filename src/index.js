import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import LoginPage, {
  action as LogInPageAction,
} from "./modules/auth/login/LoginPage";
import ErrorPage from "./modules/errorPage/ErrorPage";
import SignUpPage, {
  action as SignUpPageAction,
} from "./modules/auth/signup/SignUpPage";

const router = createBrowserRouter([
  {
    path: "auth/SignUpPage",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
    // loader : SignUpPageLoader,
    action: SignUpPageAction,
  },
  {
    path: `/auth/LoginPage`,
    element: <LoginPage />,
    // loader: LoginLoader,
    action: LogInPageAction,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
