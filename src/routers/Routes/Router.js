import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import About from "../../Pages/About/About";
import CheckOutPage from "../../Pages/CheckOutPage/CheckOutPage";
import Contact from "../../Pages/Contact/Contact";
import Courses from "../../Pages/Courses/Courses";
import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails";
import ForgetPassword from "../../Pages/forgetPassword/ForgetPassword";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Blogs from "../../Pages/Blogs/Blogs"
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Faq from "../../Pages/FAQ/Faq";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                loader: ()=>fetch('https://educational-website-server-kappa.vercel.app/courses'),
                element:<Home/>,
            },
            {
                path:'/home',
                loader: ()=>fetch('https://educational-website-server-kappa.vercel.app/courses'),
                element:<Home/>,
            },
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/register',
                element:<Register/>,
            },
            {
                path:'/forget-password',
                element:<ForgetPassword/>
            },
            {
                path:'/courses',
                loader: ()=>fetch('https://educational-website-server-kappa.vercel.app/courses'),
                element:<Courses/>,
            },
            {
                path:'/courses-details/:id',
                loader: ({params})=>fetch(`https://educational-website-server-kappa.vercel.app/courses-details/${params.id}`),
                element:<CoursesDetails/>
            },
            {
                path:'/blogs',
                element:<Blogs/>
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            },
            {
                path:'/checkoutpage/:id',
                loader:({params})=>fetch(`https://educational-website-server-kappa.vercel.app/courses-details/${params.id}`),
                element:<PrivateRoute><CheckOutPage/></PrivateRoute>,
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile/></PrivateRoute>,
            },
            {
                path:'/faq',
                element:<Faq/>,
            }
        ]
    }
])