import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./Components/App";
import About from "./Components/About";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Register from "./Components/Register";

const projectRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default projectRouter;
