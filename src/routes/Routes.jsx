import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import EstateDetail from "../pages/EstateDetail/EstateDetail";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/Profile/UpdateProfile";
import Property from "../pages/Property/Property";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                // loader: () => fetch('./realEstate.json')
            },
            {
                path: '/property',
                element: <Property></Property>,
                // loader: () => fetch('realEstate.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/estateDetails/:eId',
                element: <PrivateRoute>
                    <EstateDetail></EstateDetail>
                </PrivateRoute>,
                loader: () => fetch('/realEstate.json'),
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            {
                path: '/updateProfile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
            }
        ]

    }
])