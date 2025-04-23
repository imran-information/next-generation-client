import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Button } from '@mui/material';

const BlogCard = ({ blog, handleWishlist }) => {
    const { _id, title, imageUrl, category, shortDescription } = blog || {};

    return (
        <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden h-full flex flex-col"
        >
            {/* Image with Zoom */}
            <PhotoProvider maskOpacity={0.5}>
                <PhotoView src={imageUrl}>
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-56 object-cover cursor-pointer"
                    />
                </PhotoView>
            </PhotoProvider>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <Link
                    to={`/blog-details/${_id}`}
                    className="text-xl font-semibold text-text-color dark:text-gray-200 hover:text-secondary transition-colors"
                >
                    {title}
                </Link>
                <p className="text-sm text-primary-light dark:text-gray-300 mt-2 mb-4">
                    {shortDescription?.substring(0, 100)}...
                </p>

                {/* Category Badge */}
                <span className="text-xs bg-secondary text-white font-bold px-3 py-1 rounded-full self-start">
                    {category}
                </span>

                {/* Button */}
                <div className="mt-auto flex justify-center pt-5">
                    <Link to={`/blog-details/${_id}`} style={{ textDecoration: 'none' }}>
                        <Button
                            variant="outlined"
                            sx={{
                                color: '#00e29a',
                                borderRadius: '50px',
                                px: 3,
                                py: 0.5,
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                border: '2px solid #00e29a',
                                transition: 'all 0.3s ease-in-out',
                                boxShadow: '0px 4px 10px rgba(0, 226, 154, 0.3)',
                                '&:hover': {
                                    backgroundColor: '#00c288',
                                    color: '#fff',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0px 6px 15px rgba(0, 226, 154, 0.5)',
                                },
                            }}
                        >
                            See More
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogCard;
