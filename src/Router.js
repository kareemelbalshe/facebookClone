
import Home from "./pages/home/home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import Profile from "./pages/profile/Profile"
import {
  createBrowserRouter,
} from "react-router-dom";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home/></div>,
  },
  {
    path: "/login",
    element: <div><Login/></div>,
  },
  {
    path: "/register",
    element: <div><Register/></div>,
  },
  {
    path: "//profile/:username",
    element: <div><Profile/></div>,
  },
]);

