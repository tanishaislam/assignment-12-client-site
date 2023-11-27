import {
    createBrowserRouter,
  } from "react-router-dom";
import ManiLayouts from "../Layouts/ManiLayouts";
import Home from "../Pages/Home/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUP/SignUp";
import Dashboard from "./Dashboard/Dashboard";
import UsersProfile from "../Pages/Dashboard/users/usersProfile";
import Announcements from "../Pages/Dashboard/users/Announcements";
import PrivateRoutes from "./PrivateRoutes";
import AgrimentRequest from "../Pages/Dashboard/Admin/AgrimentRequest/AgrimentRequest";
import ManageMember from "../Pages/Dashboard/Admin/ManageMember/ManageMember";

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
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
    {
      path: '/dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path: 'userProfile',
          element:<UsersProfile></UsersProfile>
        },
        {
          path: 'announcements',
          element:<Announcements></Announcements>
        },

        //admin
        {
          path: 'agreementRequests',
          element:<AgrimentRequest></AgrimentRequest>
        },
        {
          path: 'manageMembers',
          element: <ManageMember></ManageMember>
        }
      ]
    }
  ]);

export default MyCreateRoute;