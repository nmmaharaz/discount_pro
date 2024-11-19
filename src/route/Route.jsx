import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home";
import Brands from "../page/Brands";
import MyProfile from "../page/MyProfile";
import Login from "../page/Login";
import Resigtration from "../page/Resigtration";
import BrandDatails from "../page/BrandDatails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/brands",
            element:<Brands></Brands>,
            loader: ()=>fetch('/discount.json'),

        },
        {
            path:"/login",
            element:<div>Hellow Login</div>
        },
        {
          path:"/my-profile",
          element:<MyProfile></MyProfile>
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
          element:<BrandDatails></BrandDatails>
        }
      ]
    },
  ]);

export default router