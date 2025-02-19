import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../../assets/footer/fb.png';
import ins from '../../assets/footer/ins.png';
import lin from '../../assets/footer/lin.png';
import twi from '../../assets/footer/twi.png';
import { Box, Typography, IconButton } from '@mui/material';

const Footer = () => {
    return (
        <footer className="bg-neutral-800 text-white text-center">
            <Box className="flex flex-col md:flex-row justify-center items-center py-8 gap-10 border-b">
                <Box data-aos="zoom-in" data-aos-duration="1500" component="ul" className="list-none flex flex-col md:flex-row gap-6">
                    <li>
                        <Link to="/" className="relative hover:text-primary transition duration-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="add-blog" className="relative hover:text-primary transition duration-300">
                            Add Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/all-blogs" className="relative hover:text-primary transition duration-300">
                            All Blogs
                        </Link>
                    </li>
                    <Typography variant="h5" className="md:text-2xl lg:text-4xl font-bold hover:text-primary">
                        <Link to="/">NextGen</Link>
                    </Typography>
                    <li>
                        <Link to="featured-blogs" className="relative hover:text-primary transition duration-300">
                            Featured Blogs
                        </Link>
                    </li>
                    <li>
                        <Link to="wishlist" className="relative hover:text-primary transition duration-300">
                            Wishlist
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="relative hover:text-primary transition duration-300">
                            About Us
                        </Link>
                    </li>
                </Box>
            </Box>

            <Box className="flex justify-center gap-3 mt-7">
                {[{ src: fb, alt: "Facebook" }, { src: twi, alt: "Twitter" }, { src: lin, alt: "LinkedIn" }, { src: ins, alt: "Instagram" }].map((icon, index) => (
                    <div
                        key={index}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <IconButton
                            sx={{
                                width: 40,
                                borderRadius: '50%',
                                border: '2px solid #00e29a',
                                padding: 1,
                                transition: 'all 0.3s',
                                '&:hover': {
                                    background: '#00e29a',
                                    boxShadow: '0 4px 15px rgba(0, 226, 154, 0.3)',
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            <img src={icon.src} alt={icon.alt} style={{ width: '100%' }} />
                        </IconButton>
                    </div>
                ))}
            </Box>

            <Box >
                <Typography variant="body2" className="p-5">
                    Copyright © {new Date().getFullYear()}
                    <Link to="https://remarkable-cascaron-70f493.netlify.app" className="text-purple-500">
                        DESING
                    </Link> - All right reserved by NextGen
                </Typography>
            </Box>
        </footer>
    );
};

export default Footer;
