import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Posts from "./pages/posts.jsx";
import "./index.css";
import Editpost from "./pages/editpost.jsx";
import DetailPost from "./pages/DetailPost.jsx";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login.jsx";
import { RouterProvider } from "react-router-dom";
import Registration from "./components/Registration.jsx";
import Addpost from "./components/Addpost.jsx";
import Authprovider from "./components/AuthContext.jsx";

const renderpages = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/posts",
        element: (
          <>
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
          </>
        )
      },
      {
        path: "/edit/:id",
        element: <Editpost />
      },
      {
        path: "/detail/:id",
        element: <DetailPost />
      },
      {
        path: "/addpost",
        element: <Addpost />
      },
   
    
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registration",
    element: <Registration />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={renderpages} />
    </Authprovider>
  </React.StrictMode>
);
