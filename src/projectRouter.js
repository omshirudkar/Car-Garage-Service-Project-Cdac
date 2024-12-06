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

//Routing of the admin components

import AdminDash from "./Components/admin/AdminDash";
import StaffList from "./Components/admin/Staffmanagment";
import AdminForm from "./Components/AdminForm";
import AssignTask from "./Components/admin/AssignTask";
import BatteryService from "./Components/BatteryService";
import DentingAndPainting from "./Components/DentingAndPainting";
import Periodicservices from "./Components/Periodicservices";
import Accidental_Car_Repair from "./Accidental_Car_Repair";

const projectRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", //give url name you want here
        element: <Home />, //Assign that component to that path
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin-login",
        element: <AdminForm />,
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
        path: "/batteriesservices",
        element: <BatteryService />,
      },

      //Adimin Routing
      {
        path: "/admin-dashboard", // Relative path under /admin
        element: <AdminDash />,
      },
      {
        path: "/staff", // Relative path under /admin
        element: <StaffList />,
      },
      {
        path: "/assign-task", // Admin routing
        element: <AssignTask />,
      },
      {
        path: "/DentingAndPainting", // Admin routing
        element: <DentingAndPainting />,
      },

      {
        path: "/periodicservices", // Admin routing
        element: <Periodicservices />,
      },
      {
        path: "/Accidentalcarrepair", // Admin routing
        element: <Accidental_Car_Repair />,
      },
    ],
  },
]);

export default projectRouter;
