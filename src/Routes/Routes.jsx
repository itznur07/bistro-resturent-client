import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Signup from "../Pages/Signup/Signup";
import Sercret from "../Shared/Secret/Sercret";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/menu", element: <Menu></Menu> },
      { path: "/shop/:category", element: <Shop></Shop> },
      { path: "secret", element: <Sercret></Sercret> },
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
