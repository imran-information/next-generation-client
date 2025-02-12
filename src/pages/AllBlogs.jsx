import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';
import BlogCard from '../components/BlogCard';
import useAxiosSecure from '../hooks/useAxiosCecure';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import 'react-loading-skeleton/dist/skeleton.css';
import SectionTitle from '../components/shared/SectionTitle';
import { Button } from '@mui/material';

const AllBlogs = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const [pageSize] = useState(8); // Number of blogs per page
    const instance = useAxiosSecure();

    const { data: blogs = [], isPending } = useQuery({
        queryKey: ['all-blogs', searchQuery, categoryFilter, sortOption, currentPage],
        queryFn: async () => {
            const { data } = await instance.get(`/all-blogs?category=${categoryFilter}&search=${searchQuery}&page=${currentPage}&limit=${pageSize}&sort=${sortOption}`);
            return data;
        },
    });



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

    // Handle pagination
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="p-8 py-32 min-h-screen bg-[#f5f6ff]">
            <Helmet>
                <title>Next Gen | All Blog</title>
            </Helmet>
            <SectionTitle heading="All Blogs" subHeading="Explore all the blogs here" />
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
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>

            {/* Blog Cards */}
            {
                blogs && blogs.length > 0 ? (
                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                        {blogs.map((blog) => (
                            <BlogCard handleWishlist={handleWishlist} blog={blog} key={blog._id} />
                        ))}
                    </div>
                ) : (
                    <h1 className="text-primary container mx-auto">Sorry, No Blogs Found..!</h1>
                )
            }

            {/* Pagination */}
            < div className="flex justify-center mt-8">
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
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                >
                    Previous
                </Button>
                <span className="mx-4 text-xl">{currentPage}</span>
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
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={blogs.length < pageSize}
                >
                    Next
                </Button>

            </div>
        </div >
    );
};

export default AllBlogs;
