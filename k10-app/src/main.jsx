import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader, action as actionRoot } from "./router/Root";
import ErrorPage from "./error-page";
import Contact, { loader as contactsLoader } from "./router/contact";
import EditContact, { action as edtAction } from "./router/edit";
import { action as DestroyAction } from "./router/destroy";
import Index from "./router";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: actionRoot,

    children: [
      {
        index : true ,
        element : <Index/>
      },
      {
        path: "contacts/:contactsId",
        element: <Contact />,
        loader: contactsLoader,
      },
    ],
  },
  {
    path: "contacts/:contactsId/edit",
    element: <EditContact />,
    loader: contactsLoader,
    action: edtAction,
  },
  {
    path: "contacts/:contactsId/edit",
    element: <EditContact />,
    loader: contactsLoader,
  },
  {
    path : "contacts/:contactsId/destroy",
    action : DestroyAction
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);