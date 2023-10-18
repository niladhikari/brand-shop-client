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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {   
          path: '/',
          element: <Home></Home>,
          loader: () => fetch(`http://localhost:5000/brand`)
      },
      {   
          path: '/details/:id',
          element: <PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/brand/${params.id}`)
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
          loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
    ]
  },
]);

export default router;


// import { createBrowserRouter } from "react-router-dom";
// import Root from "../Root/Root";
// import Home from "../Pages/Home/Home";
// import AddProduct from "../Pages/AddProduct/AddProduct";
// import MyCart from "../Pages/MyCart/MyCart";
// import Login from "../Pages/Login/Login";
// import Register from './../Pages/Register/Register';
// import PrivateRoute from "./PrivateRoute";
// import Bands from "../Pages/Home/Bands";
// import Error from './../Pages/Error/Error';
// import BrandDetails from "../Pages/Home/BrandDetails";
// import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     errorElement: <Error></Error>,
//     children: [
//       {
//         path: '/',
//         element: <Home></Home>,
//         loader: () => fetch(`http://localhost:5000/brand`)
//       },
//       {
//         path: '/details/:id',
//         element: <BrandDetails></BrandDetails>,
//         loader: ({ params }) => fetch(`http://localhost:5000/brand/${params.id}`)
//       },
//       {
//         path: '/Products',
//         element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
//       },
//       {
//         path: '/carts',
//         element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
//       },
//       {
//         path: '/login',
//         element: <Login></Login>,
//       },
//       {
//         path: '/register',
//         element: <Register></Register>,
//       },
//       {
//         path: '/brands',
//         element: <Bands></Bands>,
//       },
//       {
//         path: '/update/:id',
//         element: <UpdateProduct></UpdateProduct>,
//         loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
//       },
//     ]
//   },
// ]);

// export default router;
