import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';
import BlogCard from '../components/BlogCard';
import useAxiosSecure from '../hooks/useAxiosCecure';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AllBlogs = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const [pageSize] = useState(10); // Number of blogs per page
    const instance = useAxiosSecure();

    const { data: blogs, isPending } = useQuery({
        queryKey: ['all-blogs', searchQuery, categoryFilter, sortOption, currentPage],
        queryFn: async () => {
            const { data } = await instance.get(`/all-blogs?category=${categoryFilter}&search=${searchQuery}&page=${currentPage}&limit=${pageSize}&sort=${sortOption}`);
            return data;
        },
    });

    if (isPending) return <Skeleton highlightColor="#444" baseColor="#7ac8af" count={10} />;

    // Add blog to wishlist
    const handleWishlist = async (id, title, imageUrl, category, shortDescription, longDescription) => {
        if (!user?.email) {
            return navigate('/signIn');
        }
        const wishlistData = {
            id,
            title,
            imageUrl,
            category,
            shortDescription,
            longDescription,
            email: user?.email,
        };

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/add-wishlist`, wishlistData);
            toast.success('Wishlist added successfully!');
            navigate('/wishlist');
        } catch (err) {
            toast.error(err.response.data);
        }
    };

    // Sorting logic based on time (createdAt field)
    const sortBlogs = (blogs) => {
        if (sortOption === 'asc') {
            return blogs.sort((a, b) => new Date(a.date) - new Date(b.date)); // Ascending time (oldest first)
        }
        if (sortOption === 'desc') {
            return blogs.sort((a, b) => new Date(b.date) - new Date(a.date)); // Descending time (newest first)
        }
        return blogs;
    };

    // Handle pagination
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="p-8 py-32 min-h-screen bg-[#f5f6ff]">
            <Helmet>
                <title>Next Gen | All Blog</title>
            </Helmet>
            <h2 className="text-4xl font-bold mb-4 text-center">All Blogs</h2>
            <div className="lg:flex justify-between items-center w-10/12 mx-auto mb-8">
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        {/* Category Filter */}
                        <p className="md:text-lg font-semibold">Filter By Category:</p>
                        <select
                            id="category"
                            name="category"
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Select a category</option>
                            <option value="Technology">Technology</option>
                            <option value="Health">Health</option>
                            <option value="Travel">Travel</option>
                            <option value="Education">Education</option>
                            <option value="Lifestyle">Lifestyle</option>
                        </select>
                    </div>
                </div>

                {/* Sort By Dropdown */}
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <label htmlFor="sortOption" className="font-semibold">Sort By Date:</label>
                        <select
                            id="sortOption"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Select</option>
                            <option value="asc"> Old to New</option>
                            <option value="desc"> New to Old</option>
                        </select>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex-1">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>

            {/* Blog Cards */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                {sortBlogs(blogs).map((blog) => (
                    <BlogCard handleWishlist={handleWishlist} blog={blog} key={blog._id} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className="px-4 py-2 border rounded-lg bg-primary text-white"
                >
                    Previous
                </button>
                <span className="mx-4 text-xl">{currentPage}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={blogs.length < pageSize}
                    className="px-4 py-2 border rounded-lg bg-primary text-white"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllBlogs;
