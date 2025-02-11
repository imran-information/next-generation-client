import React from 'react';
import { Link } from 'react-router-dom';
import * as motion from "motion/react-client";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Button } from '@mui/material';

const BlogCard = ({ blog, handleWishlist }) => {
    const { _id, title, imageUrl, category, shortDescription, longDescription } = blog || {};

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all h-full flex flex-col"
        >
            {/* Image Preview */}
            <PhotoProvider maskOpacity={0.5}>
                <PhotoView src={imageUrl}>
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-56 object-cover cursor-pointer"
                    />
                </PhotoView>
            </PhotoProvider>

            {/* Card Content */}
            <div className="p-5 flex flex-col flex-grow">
                <Link to={`/blog-details/${_id}`} className="text-xl font-semibold text-text-color hover:text-secondary ">{title}</Link>
                <p className="text-sm text-primary-light mt-2 mb-4">{shortDescription.substring(0, 100)}...</p>

                {/* Category Badge */}
                <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full self-start">
                    {category}
                </span>

                {/* Buttons */}
                <div className="mt-auto flex justify-center pt-5">
                    <Link
                        to={`/blog-details/${_id}`}
                        style={{ textDecoration: 'none' }} // Removes default link underline
                    >
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
                                    boxShadow: '0px 6px 15px rgba(0, 226, 154, 0.5)',
                                    transform: 'translateY(-2px)',
                                    color: 'white',
                                },
                                '&:active': {
                                    transform: 'translateY(0px)',
                                    boxShadow: '0px 3px 8px rgba(0, 226, 154, 0.3)',
                                },
                            }}
                        >
                            See More
                        </Button>
                    </Link>


                    {/* <button
                        className="px-5 py-2 text-white bg-[#00e29a] hover:bg-[#2afcb9] transition rounded-lg font-semibold"
                        onClick={() => handleWishlist(_id, title, imageUrl, category, shortDescription, longDescription)}
                    >
                        Add to Wishlist
                    </button> */}
                </div>
            </div>
        </motion.div>
    );
};

export default BlogCard;
