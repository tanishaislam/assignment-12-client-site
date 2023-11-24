import {
    createBrowserRouter,
  } from "react-router-dom";
import ManiLayouts from "../Layouts/ManiLayouts";
import Home from "../Pages/Home/Home/Home";
import Apartment from "../Pages/Home/Apartment/Apartment";

  const MyCreateRoute = createBrowserRouter([
    {
      path: "/",
      element: <ManiLayouts></ManiLayouts>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: 'apartment',
            element:<Apartment></Apartment>
        },
      ]
    },
  ]);

export default MyCreateRoute;