import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllBlogs from "../pages/AllBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs";
import Wishlist from "../pages/Wishlist";
import NotFound from "../components/NotFound";
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";
import AddBlog from "../pages/AddBlog";
import UpdateBlog from "../pages/UpdateBlog";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/dashboard/Profile";
import DashboardHome from "../pages/dashboard/DashboardHome";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: 'signIn',
                element: <SignIn></SignIn>,

            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'add-blog',
                element: <PrivateRoute>
                    <AddBlog></AddBlog>
                </PrivateRoute>
            },
            {
                path: 'all-blogs',
                element: <AllBlogs></AllBlogs>
            },
            {
                path: 'featured-blogs',
                element: <FeaturedBlogs></FeaturedBlogs>
            },
            {
                path: 'wishlist',
                element: <PrivateRoute>
                    <Wishlist></Wishlist>
                </PrivateRoute>
            },
            {
                path: 'blog-details/:id',
                element: <BlogDetails></BlogDetails>
            },
            {
                path: 'update-blog/:id',
                element: <PrivateRoute>
                    <UpdateBlog></UpdateBlog>
                </PrivateRoute>
            }

        ],

    },
    //  Dashboard layout
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [

            {
                path: 'home',
                element: <DashboardHome />
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            },
        ]
    }
])

export default router;