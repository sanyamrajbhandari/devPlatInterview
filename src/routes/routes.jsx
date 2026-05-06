import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import { createBrowserRouter, Navigate } from 'react-router-dom'

const routes = createBrowserRouter([
    {path:"/",
    element: <Navigate to="/login" replace/>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path:"/dashboard",
        element:<Dashboard />
    }
])

export default routes