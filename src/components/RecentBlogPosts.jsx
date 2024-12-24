import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import useAuth from '../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const RecentBlogPosts = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [blogs, setBlogs] = useState([]);

    const blogsData = async () => {
        const { data } = await axios.get('http://localhost:5000/blogs')
        setBlogs(data)
    }
    // console.log(blogs);

    useEffect(() => {
        blogsData()
    }, [])


    // add wishlist in DB
    const handleWishlist = async (id, title, imageUrl, category, shortDescription, longDescription) => {
        if (!user?.email) {
            return navigate('/signIn')
        }

        const wishlistData = {
            id,
            title,
            imageUrl,
            category,
            shortDescription,
            longDescription,
            email: user?.email,
        }

        try {
            await axios.post('http://localhost:5000/add-wishlist', wishlistData)
            toast.success('wishlist added successfully.!')
            navigate('/wishlist')
        } catch (err) {
            toast.error(err.response.data);
        }
    }

    return (

        <div className="p-8 my-20 py-20 bg-gradient-to-r from-gray-800 via-indigo-900 to-purple-800 text-white">
            <h2 className="text-4xl  font-bold mb-4 text-center">Recent Blogs</h2>
            <p className="md:px-96 text-center">
                Effortlessly monitor your financial progress with a feature designed to help you track <br /> your earnings in real time as they grow.
            </p>
            <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    blogs.map((blog) => <BlogCard key={blog._id} handleWishlist={handleWishlist} blog={blog}></BlogCard>)}
            </div>
        </div>


    );
};

export default RecentBlogPosts;