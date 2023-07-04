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
import { Provider } from "react-redux";
import store from "./app/store";
import Counter from "./features/counter/counter";
import { PostList } from "./features/posts/PostList";
import { AddPostForm } from "./features/posts/AddPostFrom";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import { worker } from "./api/server";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: actionRoot,

    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "contacts/:contactsId",
        element: <Contact />,
        loader: contactsLoader,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "post",
        element: <PostList />
      },
      {
        path: "post/edit",
        element: <AddPostForm />,
      }
      ,
      {
        path: "post/:postId",
        element: <SinglePostPage />,
      },
      {
        path: "post/edit/:postId",
        element: <EditPostForm />,
      }
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
    path: "contacts/:contactsId/destroy",
    action: DestroyAction
  }
]);

async function render () {
  await worker.start()
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  );
}
render()