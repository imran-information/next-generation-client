import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    useReactTable,
    createColumnHelper,
    getCoreRowModel,
} from "@tanstack/react-table";
import { format } from "date-fns";
import moment from 'moment';
import useAxiosSecure from '../hooks/useAxiosCecure';
import { Helmet } from 'react-helmet';



const FeaturedBlogs = () => {
    const [topPosts, setTopPosts] = useState([]);
    const columnHelper = createColumnHelper();
    const instance = useAxiosSecure()

    // console.log(topPosts);

    useEffect(() => {
        const getTopPosts = async () => {
            try {
                const { data } = await instance.get("/top-posts");
                setTopPosts(data);
            } catch (error) {
                console.error("Error fetching top posts:", error);
            }
        };
        getTopPosts();
    }, []);
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
        columnHelper.accessor("wordCount", {
            header: "Word Count",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("date", {
            header: "Date",
            // cell: (info) => format(new Date(info.getValue()),"P")
            // cell: (info) => moment(new Date(info.getValue()).format("YYYY-MM-DD")),

            cell: (info) => {
                const date = new Date(info.getValue());
                return date.toLocaleDateString();
            },
        }),
    ];


    const table = useReactTable({
        data: topPosts,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });



    return (
        // <div className="py-20 min-h-screen bg-[#f5f6ff]">
        //     <div className="max-w-4xl mx-auto bg-white shadow rounded p-5">
        //         <h1 className="text-2xl font-bold mb-5 text-center">Top 10 Posts</h1>
        //         <table className="min-w-full table-auto border-collapse border border-gray-300">
        //             <thead>
        //                 <tr>
        //                     <th className="border border-gray-300 px-4 py-2">Title</th>
        //                     <th className="border border-gray-300 px-4 py-2">Author</th>
        //                     <th className="border border-gray-300 px-4 py-2">Category</th>
        //                     <th className="border border-gray-300 px-4 py-2">Word Count</th>
        //                     <th className="border border-gray-300 px-4 py-2">Date</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {topPosts.map((post, index) => (
        //                     <tr key={index} className="text-center">
        //                         <td className="border border-gray-300 px-4 py-2">{post.title}</td>
        //                         <td className="border border-gray-300 px-4 py-2">{post.author}</td>
        //                         <td className="border border-gray-300 px-4 py-2">{post.category}</td>
        //                         <td className="border border-gray-300 px-4 py-2">{post.wordCount}</td>
        //                         <td className="border border-gray-300 px-4 py-2">
        //                             {new Date(post.date).toLocaleDateString()}
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     </div>
        // </div>

        <div className="py-32 min-h-screen bg-[#f5f6ff]">
            <Helmet>
                <title>Next Gen | Top 10 Posts</title>
            </Helmet>
            <div className="max-w-4xl mx-auto bg-white shadow rounded p-5">
                <h1 className="text-2xl font-bold mb-5 text-center">Top 10 Posts</h1>
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="border border-gray-300 px-4 py-2"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : header.column.columnDef.header}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="text-center">
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className="border border-gray-300 px-4 py-2"
                                    >
                                        {cell.renderValue()}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeaturedBlogs;