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
import SectionTitle from './shared/SectionTitle';


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
        <>
            <div className="py-20 bg-bg px-8 md:px-0">
                <SectionTitle heading='Recent Blog Posts' subHeading={'Effortlessly monitor your financial progress with a feature designed to help you track your earnings in real time as they grow.'} />
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {
                        blogs.map((blog) => <BlogCard key={blog._id} handleWishlist={handleWishlist} blog={blog}></BlogCard>)}
                </div>
            </div>

        </>


    );
};

export default RecentBlogPosts;