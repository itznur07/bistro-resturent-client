import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Sidebar from "../Layout/Sidebar";
import MyCart from "../Pages/Deshboard/MyCart/MyCart";
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
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "signup",
    element: <Signup></Signup>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Sidebar></Sidebar>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/mycart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
