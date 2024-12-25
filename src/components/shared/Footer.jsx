import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../../assets/footer/fb.png'
import ins from '../../assets/footer/ins.png'
import lin from '../../assets/footer/lin.png'
import twi from '../../assets/footer/twi.png'
import * as motion from "motion/react-client";

const Footer = () => {
    return (
        <footer className=" bg-black text-white text-center">
            <div className="flex flex-col md:flex-row justify-center items-center py-8 list-none gap-10 border-b">
                <li className=''><Link to='/'>Home</Link></li>
                <li className=''><Link to='add-blog'>Add Blog</Link></li>
                <li className=''><Link to='/all-blogs'>All blogs</Link></li>
                <Link className="md:text-2xl lg:text-4xl font-bold">NextGen</Link>
                <li className=''><Link to='featured-blogs'>Featured Blogs</Link></li>
                <li className=''><Link to='wishlist'>Wishlist</Link></li>
                <li className=''><Link>About us</Link></li>
            </div>
            <div className="flex justify-center gap-2 mt-7">
                <motion.img whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }} className='w-10 border rounded-full p-2 hover:border-none hover:cursor-pointer  hover:bg-purple-700' src='' alt="" srcSet={fb} />
                <motion.img whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }} className='w-10 border rounded-full p-2 hover:border-none hover:cursor-pointer  hover:bg-purple-700' src='' alt="" srcSet={twi} />
                <motion.img whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }} className='w-10 border rounded-full p-2 hover:border-none hover:cursor-pointer  hover:bg-purple-700' src='' alt="" srcSet={lin} />
                <motion.img whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }} className='w-10 border rounded-full p-2 hover:border-none hover:cursor-pointer  hover:bg-purple-700' src='' alt="" srcSet={ins} />
            </div>
            <aside>
                <p className='p-5'>Copyright © {new Date().getFullYear()} <Link className='text-purple-500' to='http://localhost:5174/'> DESING</Link> - All right reserved by NextGen</p>
            </aside>
        </footer>
    );
};

export default Footer;