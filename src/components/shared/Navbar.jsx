import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';


const Navbar = () => {
    const { user, handleSignOutUser } = useAuth();
    const navigate = useNavigate()
    const links = <>
        <li className=''><NavLink to='/'>Home</NavLink></li>
        <li className=''><NavLink to='/add-blog'>Add Blog</NavLink></li>
        <li className=''><NavLink to='/all-blogs'>All blogs</NavLink></li>
        <li className=''><NavLink to='/featured-blogs'>Featured Blogs</NavLink></li>
        <li className=''><NavLink to='/wishlist'>Wishlist</NavLink></li>
    </>

    const handleSignOut = async () => {
        try {
            await handleSignOutUser()
            toast.success('Sign Out Successfully..!')
            navigate('/')
        } catch (err) {
            toast.error(err?.message)
        }
    }


    return (
        <div className="navbar lg:px-10 bg-black text-white fixed top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link className="text-4xl font-bold">NextGen</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end text-black">

                {
                    user
                        ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li onClick={handleSignOut}><a>Logout</a></li>
                            </ul>
                        </div>
                        : <li className='bg-[#00e29a] text-white list-none py-2 px-6 rounded-full'><Link to='/signIn'>Sign in</Link></li>
                }
            </div>
        </div>
    );
};

export default Navbar;