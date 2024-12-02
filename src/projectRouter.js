import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./Components/App";
import About from "./Components/About";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
import Admin from "./Components/Admin";
import Header from "./Components/admin/Header";
import AdminDash from "./Components/admin/AdminDash";
import StaffList from "./Components/admin/Staffmanagment";

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
      {
        path: "/dashboard", // Relative path under /admin
        element: <AdminDash />,
      },
      {
        path: "/staff", // Relative path under /admin
        element: <StaffList />,
      },
    ],
  },
]);

export default projectRouter;
