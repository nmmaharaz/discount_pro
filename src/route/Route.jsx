import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home";
import Brands from "../page/Brands";
import MyProfile from "../page/MyProfile";
import Login from "../page/Login";
import Resigtration from "../page/Resigtration";
import BrandDatails from "../page/BrandDatails";
import PrivateRoute from "../Components/PrivateRoute";
import UpdateProfile from "../Components/UpdateProfile";
import ForgetPassword from "../page/ForgetPassword";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: ()=>fetch('/discount.json'),
        },
        {
            path:"/brands",
            element:<Brands></Brands>,
            loader: ()=>fetch('/discount.json'),

        },
        {
          path:"/my-profile",
          element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/registration",
          element:<Resigtration></Resigtration>
        },
        {
          path:"/brand/:id",
          loader: ()=>fetch('/discount.json'),
          element:<PrivateRoute><BrandDatails></BrandDatails></PrivateRoute>
        },
        {
          path:"/updateprofile",
          element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path:"/forgetpassword",
          element:<ForgetPassword></ForgetPassword>
        }
      ]
    },
  ]);

export default router