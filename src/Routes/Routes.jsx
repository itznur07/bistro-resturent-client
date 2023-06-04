import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AdminHome from "../Pages/Deshboard/AdminHome/AdminHome";
import AdminProfile from "../Pages/Deshboard/AdminProfile/AdminProfile";
import MyCart from "../Pages/Deshboard/MyCart/MyCart";
import UserHome from "../Pages/Deshboard/UserHome/Home";
import UserProfile from "../Pages/Deshboard/UserProfile/UserProfile";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Signup from "../Pages/Signup/Signup";
import Sercret from "../Shared/Secret/Sercret";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/menu", element: <Menu></Menu> },
      { path: "/shop", element: <Shop></Shop> },
      {
        path: "secret",
        element: (
          <PrivateRoutes>
            <Sercret></Sercret>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/dashboard/userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/userprofile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/dashboard/adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/dashboard/adminprofile",
        element: <AdminProfile></AdminProfile>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "signup",
    element: <Signup></Signup>,
  },
]);
