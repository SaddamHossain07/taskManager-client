import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Layout/LandingPage";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage></LandingPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }
])

export default Routes;