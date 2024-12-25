import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosCecure';
import { useQuery } from '@tanstack/react-query'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const RecentBlogPosts = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const instance = useAxiosSecure()
    // const [blogs, setBlogs] = useState([]);

    const { data: blogs, isPending } = useQuery({
        queryKey: ['blogs'], queryFn: async () => {
            const { data } = await instance.get('/blogs')
            return data
        }

    })

    if (isPending) return <Skeleton highlightColor="#444" baseColor='#7ac8af' count={10} />

    // console.log({ data });

    // const blogsData = async () => {
    //     const { data } = await instance.get('/blogs')
    //     setBlogs(data)
    // }
    // console.log(blogs);

    // useEffect(() => {
    //     blogsData()
    // }, [])


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

        // instance not work !!!
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/add-wishlist`, wishlistData)
            toast.success('wishlist added successfully.!')
            navigate('/wishlist')
        } catch (err) {
            toast.error(err.response.data);
        }
    }

    return (

        <div className="p-8 my-20 py-20 bg-gradient-to-r from-gray-800 via-indigo-900 to-purple-800 text-white">
            <h2 className="text-4xl  font-bold mb-4 text-center">Recent Blogs</h2>
            <p className="md:px-0 lg:px-96 text-center">
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