import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from './../Pages/Register/Register';
import PrivateRoute from "./PrivateRoute";
import Bands from "../Pages/Home/Bands";
import Error from './../Pages/Error/Error';
import BrandDetails from "../Pages/Home/BrandDetails";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {   
          path: '/',
          element: <Home></Home>,
          loader: () => fetch(`https://brand-shop-server-ifjze3vgp-hridoys-projects.vercel.app/brand`)
      },
      {   
          path: '/details/:id',
          element: <PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`https://brand-shop-server-ifjze3vgp-hridoys-projects.vercel.app/brand/${params.id}`)
      },
      {   
          path: '/Products',
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {   
          path: '/carts',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {   
          path: '/login',
          element: <Login></Login>,
      },
      {   
          path: '/register',
          element: <Register></Register>,
      },
      {   
          path: '/brands',
          element: <Bands></Bands>,
      },
      {   
          path: '/update/:id',
          element: <UpdateProduct></UpdateProduct>,
          loader: ({ params }) => fetch(`https://brand-shop-server-ifjze3vgp-hridoys-projects.vercel.app/product/${params.id}`)
      },
      {   
          path: '/detailsData/:id',
          element: <ProductDetails></ProductDetails>,
          loader: ({ params }) => fetch(`https://brand-shop-server-ifjze3vgp-hridoys-projects.vercel.app/product/${params.id}`)
      },
    ]
  },
]);

export default router;



