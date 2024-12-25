import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';

import BlogCard from '../components/BlogCard';
import useAxiosSecure from '../hooks/useAxiosCecure';

const AllBlogs = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [searchQuery, setSearchQuery] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('');
    const instance = useAxiosSecure()

    useEffect(() => {
        const blogsData = async () => {
            const { data } = await instance.get(`/all-blogs?category=${categoryFilter}&search=${searchQuery}`)
            setBlogs(data)
        }
        blogsData()
    }, [searchQuery, categoryFilter])

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
        <div className="p-8 py-32 min-h-screen bg-[#f5f6ff]">
            <h2 className="text-4xl  font-bold mb-4 text-center">All Blogs</h2>
            <div className="md:flex justify-around items-center w-10/12 mx-auto">
                <div className="flex-1">
                    <div className="md:flex items-center gap-2">
                        {/* Category */}
                        <div className="">
                            <p className="md:text-lg font-semibold">Filter By Category: </p>
                        </div>
                        <div className='flex-1'>
                            <select
                                id="category"
                                name="category"
                                value={categoryFilter}
                                onChange={e => setCategoryFilter(e.target.value)}
                                className="w-full  px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            >
                                <option value="" disabled>
                                    Select a category
                                </option>
                                <option value='Technology'>Technology</option>
                                <option value='Health'>Health</option>
                                <option value='Travel'>Travel</option>
                                <option value='Education'>Education</option>
                                <option value='Lifestyle'>Lifestyle</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex-1 my-2">
                    {/* <h2 className="text-4xl  font-bold mb-4 text-center">All Blogs</h2> */}
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <div className="">
                            <button className="bg-[#00e29a] text-white px-3 py-2 rounded">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    blogs.map((blog) => <BlogCard key={blog._id} handleWishlist={handleWishlist} blog={blog}></BlogCard>)}
            </div>
        </div>


    );



};

export default AllBlogs;