import React from 'react';
import { Link } from 'react-router-dom';
import * as motion from "motion/react-client";

const BlogCard = ({ blog, handleWishlist }) => {
    const { _id, title, imageUrl, category, shortDescription, longDescription } = blog || {};

    return (
        <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mb-2">{shortDescription.substring(0, 100)}...</p>
                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                    {category}
                </span>
                <div className="mt-4 flex justify-between">
                    <Link to={`/blog-details/${_id}`} className="bg-purple-500 text-white hover:bg-purple-600 transition px-4 py-2 rounded"  >
                        Details
                    </Link>
                    <button className=' px-4 py-2 text-white border  rounded  font-semibold bg-[#00e29a] hover:bg-[#2afcb9] transition' onClick={() => handleWishlist(_id, title, imageUrl, category, shortDescription, longDescription)} > Add to Wishlist

                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogCard;