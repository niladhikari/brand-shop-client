import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from './../Pages/Register/Register';
import PrivateRoute from "./PrivateRoute";
import Bands from "../Pages/Home/Bands";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {   
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch(`http://localhost:5000/brand`)
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
        {   
            path:'/brands',
            element:<Bands></Bands>,
        },
       
      ]
    },
  ]);

export default router;