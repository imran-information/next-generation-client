import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    useReactTable,
    createColumnHelper,
    getCoreRowModel,
    getPaginationRowModel,
} from "@tanstack/react-table";
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import LoadingSpinner from '../components/LoadingSpinner';
import { Button } from '@mui/material';

const FeaturedBlogs = () => {
    const [topPosts, setTopPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageIndex, setPageIndex] = useState(0);
    const pageSize = 10;
    const [totalPosts, setTotalPosts] = useState(0);

    const columnHelper = createColumnHelper();

    // ✅ Fetch top posts from API
    const getTopPosts = async (pageIndex = 0) => {
        try {
            setLoading(true);
            console.log("Fetching posts for page:", pageIndex + 1);

            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/top-posts?page=${pageIndex + 1}&pageSize=${pageSize}`);

            console.log("API Response:", data);

            setTopPosts(data.data);
            setTotalPosts(data.totalPosts || 1);
        } catch (error) {
            console.error("Error fetching top posts:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getTopPosts(pageIndex);
    }, [pageIndex]);

    const columns = [
        columnHelper.accessor("title", {
            header: "Title",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("author", {
            header: "Author",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("category", {
            header: "Category",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("shortDescription", {
            header: "Short Description",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("date", {
            header: "Date",
            cell: (info) => new Date(info.getValue()).toLocaleDateString(),
        }),
    ];

    const handlePageChange = (newPageIndex) => {
        if (newPageIndex >= 0 && newPageIndex < Math.ceil(totalPosts / pageSize)) {
            setPageIndex(newPageIndex);
        }
    };

    const table = useReactTable({
        data: topPosts,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            pagination: {
                pageIndex: pageIndex,
                pageSize: pageSize,
            },
        },
    });

    return (
        <div className="py-20 min-h-screen bg-bg dark:bg-neutral-900 mt-20">
            <Helmet>
                <title>Next Gen | Top Posts</title>
            </Helmet>
            <div data-aos="zoom-in" data-aos-duration="1500" className="container mx-auto bg-slate-50 dark:bg-neutral-800 shadow-lg rounded-2xl p-6">
                <h1 className="text-3xl font-bold mb-6 text-center text-primary dark:text-secondary">Top Posts</h1>

                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <div className="overflow-x-auto md:overflow-x-auto">
                        <table data-aos="zoom-in" data-aos-duration="1500" className="min-w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                            <thead>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id} className="bg-primary dark:bg-secondary text-white text-lg">
                                        {headerGroup.headers.map((header) => (
                                            <th key={header.id} className="border border-gray-300 px-4 py-3 text-left">
                                                {header.isPlaceholder ? null : header.column.columnDef.header}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody >
                                {topPosts.length > 0 ? (
                                    topPosts.map((post, index) => (
                                        <tr key={post._id} className={`text-center transition duration-300 ${index % 2 === 0 ? "bg-gray-50 dark:bg-neutral-800" : "bg-white dark:bg-neutral-900"} hover:bg-[#f0f4ff]`}>
                                            <td className="border border-gray-200 dark:border-neutral-700 px-4 py-3 w-[200px] text-[#333] dark:text-gray-300 font-medium truncate overflow-hidden text-ellipsis">
                                                {post.title.substring(0, 40)}...
                                            </td>
                                            <td className="border border-gray-200 dark:border-neutral-700 px-4 py-3 w-[150px] text-[#555] dark:text-gray-300 truncate overflow-hidden text-ellipsis">
                                                {post.author}
                                            </td>
                                            <td className="border border-gray-200 dark:border-neutral-700 px-4 py-3 w-[150px] text-[#555] dark:text-gray-300 truncate overflow-hidden text-ellipsis">
                                                {post.category}
                                            </td>
                                            <td className="border border-gray-200 dark:border-neutral-700 px-4 py-3 w-[200px] text-[#555] dark:text-gray-300 truncate overflow-hidden text-ellipsis">
                                                {post.shortDescription.substring(0, 50)}...
                                            </td>
                                            <td className="border border-gray-200 dark:border-neutral-700 px-4 py-3 w-[120px] text-[#555] dark:text-gray-300 whitespace-nowrap">
                                                {new Date(post.date).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center py-6 text-gray-500 text-lg">No posts available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                )}

                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-6">
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
                        onClick={() => handlePageChange(pageIndex - 1)}
                        disabled={pageIndex === 0}
                    >
                        <span className="flex items-center">
                            <FaArrowLeft className="mr-2" />
                            Previous
                        </span>
                    </Button>
                    <div className="text-lg text-[#333] dark:text-gray-300">
                        Page {pageIndex + 1} of {Math.ceil(totalPosts / pageSize)}
                    </div>
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
                        onClick={() => handlePageChange(pageIndex + 1)}
                        disabled={pageIndex >= Math.ceil(totalPosts / pageSize) - 1}
                    > 
                        <span className="flex items-center">
                            Next
                            <FaArrowRight className="ml-2" />
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlogs;
