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
import ForgotPassword, {
  action as ForgotPasswordAction,
} from "./modules/auth/forgotPassword/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "auth/SignUpPage",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
    action: SignUpPageAction,
  },
  {
    path: `/auth/LoginPage`,
    element: <LoginPage />,
    action: LogInPageAction,
  },
  {
    path: `/auth/ForgotPassword`,
    element: <ForgotPassword />,
    action: ForgotPasswordAction,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
