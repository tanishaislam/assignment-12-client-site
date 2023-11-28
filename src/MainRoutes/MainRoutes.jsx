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
import AdminAnous from "../Pages/Dashboard/Admin/AdminAnous/AdminAnous";
import MemberAnous from "../Pages/Dashboard/Member/MemberAnous/MemberAnous";
import MemberProfile from "../Pages/Dashboard/Member/MemberProfile/MemberProfile";
import MakePayment from "../Pages/Dashboard/Member/MakePayment/MakePayment";
import PaymentNow from "../Pages/Dashboard/Member/MakePayment/PaymentNow";
import PaymentHistory from "../Pages/Dashboard/Member/MakePayment/PaymentHistory";

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
            element:<Apartment></Apartment>,
            loader: ()=> fetch('https://asignment-12-server-one.vercel.app/roomsCount')
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
          element:<PrivateRoutes><UsersProfile></UsersProfile></PrivateRoutes>
        },
        {
          path: 'announcements',
          element:<PrivateRoutes><MemberAnous></MemberAnous></PrivateRoutes>
        },
        //member
        {
          path: 'memberAnous',
          element:<PrivateRoutes><MemberAnous></MemberAnous></PrivateRoutes>
        },
        {
          path:'memberProfile',
          element:<PrivateRoutes><MemberProfile></MemberProfile></PrivateRoutes>
        },
        {
          path: 'makePayment',
          element:<PrivateRoutes><MakePayment></MakePayment></PrivateRoutes>
        },
        {
          path: 'paymentNow',
          element:<PrivateRoutes><PaymentNow></PaymentNow></PrivateRoutes>
        },
        {
          path: 'paymentHistory',
          element:<PrivateRoutes><PaymentHistory></PaymentHistory></PrivateRoutes>
        },

        //admin
        {
          path: 'agreementRequests',
          element:<PrivateRoutes><AgrimentRequest></AgrimentRequest></PrivateRoutes>
        },
        {
          path: 'manageMembers',
          element: <PrivateRoutes><ManageMember></ManageMember></PrivateRoutes>
        },
        {
          path: 'makeAnnouncements',
          element: <PrivateRoutes><AdminAnous></AdminAnous></PrivateRoutes>
        }
      ]
    }
  ]);

export default MyCreateRoute;