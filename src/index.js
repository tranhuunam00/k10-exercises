import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Provider from "./store/Provider";
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
import CheckCardUser from "./modules/users/checkCard/CardUser";
import UserLanguage from "./modules/users/checkLanguage/userLanguage";
import "../src/components/multiLanguage/i18next/i18next";
import Uploader from "./modules/users/uploader/Uploader";
import AvatarUser from "./modules/users/avatar/AvatarUser";
import VideoPlayer from "./modules/MaterialUI/MateriaUI";

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
  {
    path: `/user/Card`,
    element: <CheckCardUser />,
  },
  {
    path: `/user/Language`,
    element: <UserLanguage />,
  },
  {
    path: `/user/Upload`,
    element: <Uploader />,
  },
  {
    path: `/user/AvatarUser`,
    element: <AvatarUser />,
  },
  {
    path: `/`,
    element: <VideoPlayer />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
