import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../../assets/footer/fb.png'
import ins from '../../assets/footer/ins.png'
import lin from '../../assets/footer/lin.png'
import twi from '../../assets/footer/twi.png'
import * as motion from "motion/react-client";

const Footer = () => {
    return (
        <footer className=" bg-[#292b2c] text-white text-center">
            <div className="flex flex-col md:flex-row justify-center items-center py-8 gap-10 border-b">
                <li className="list-none">
                    <Link to="/" className="relative hover:text-primary transition duration-300 before:absolute before:left-0 before:bottom-[-2px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                        Home
                    </Link>
                </li>
                <li className="list-none">
                    <Link to="add-blog" className="relative hover:text-primary transition duration-300 before:absolute before:left-0 before:bottom-[-2px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                        Add Blog
                    </Link>
                </li>
                <li className="list-none">
                    <Link to="/all-blogs" className="relative hover:text-primary transition duration-300 before:absolute before:left-0 before:bottom-[-2px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                        All Blogs
                    </Link>
                </li>
                <Link to="/" className="relative md:text-2xl lg:text-4xl font-bold hover:text-primary transition duration-300 before:absolute before:left-0 before:bottom-[-2px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                    NextGen
                </Link>
                <li className="list-none">
                    <Link to="featured-blogs" className="relative hover:text-primary transition duration-300 before:absolute before:left-0 before:bottom-[-2px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                        Featured Blogs
                    </Link>
                </li>
                <li className="list-none">
                    <Link to="wishlist" className="relative hover:text-primary transition duration-300 before:absolute before:left-0 before:bottom-[-2px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                        Wishlist
                    </Link>
                </li>
                <li className="list-none">
                    <Link to="/about" className="relative hover:text-primary transition duration-300 before:absolute before:left-0 before:bottom-[-2px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full">
                        About Us
                    </Link>
                </li>
            </div>

            <div className="flex justify-center gap-3 mt-7">
    {[
        { src: fb, alt: "Facebook" },
        { src: twi, alt: "Twitter" },
        { src: lin, alt: "LinkedIn" },
        { src: ins, alt: "Instagram" },
    ].map((icon, index) => (
        <img
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 border border-gray-300 rounded-full p-2 transition-all duration-300 
                    hover:shadow-xl hover:bg-gradient-to-r from-[#8053f6] to-[#00e29a] 
                    hover:border-transparent hover:cursor-pointer"
                    src={icon.src}
                    alt={icon.alt}
                />
    ))}
</div>

            <aside>
                <p className='p-5'>Copyright © {new Date().getFullYear()} <Link className='text-purple-500' to='http://localhost:5174/'> DESING</Link> - All right reserved by NextGen</p>
            </aside>
        </footer>
    );
};

export default Footer;