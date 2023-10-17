import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from './../Pages/Register/Register';
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {   
            path:'/',
            element:<Home></Home>,
        },
        {   
            path:'/Products',
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
        },
        {   
            path:'/carts',
            element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        },
        {   
            path:'/login',
            element:<Login></Login>,
        },
        {   
            path:'/register',
            element:<Register></Register>,
        },
       
      ]
    },
  ]);

export default router;