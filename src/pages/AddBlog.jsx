import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosCecure';
import { Helmet } from 'react-helmet-async';

const AddBlog = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const instance = useAxiosSecure()
    const [formData, setFormData] = useState({
        title: "",
        imageUrl: "",
        category: "",
        shortDescription: "",
        longDescription: "",
        author: user?.displayName,
        date: new Date(),
        author_email: user?.email,
        author_photoUrl: user?.photoURL,
    });

    const categories = ["Technology", "Health", "Travel", "Education", "Lifestyle"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await instance.post('/add-blog', formData)
            // console.log("Blog Submitted:", formData);
            toast.success('Blog information submitted successfully.!')
            navigate('/all-blogs')
            setFormData({
                title: "",
                imageUrl: "",
                category: "",
                shortDescription: "",
                longDescription: "",
            });
        } catch (err) {
            toast.error(err.message);
        }



    };


    return (
        <div className="py-40 px-5 md:px-0 min-h-screen bg-[#f5f6ff]">
            <Helmet>
                <title>Next Gen | Add Blog</title>
            </Helmet>
            <div className="max-w-lg bg-white rounded mx-auto p-5 ">
                <h1 className="text-2xl font-bold mb-4 text-center">Add Blog</h1>
                <form onSubmit={handleSubmit} className="space-y-4 ">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter blog title"
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="imageUrl">
                            Image URL
                        </label>
                        <input
                            type="url"
                            id="imageUrl"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter image URL"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="category">
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        >
                            <option value="" disabled>
                                Select a category
                            </option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Short Description */}
                    <div>
                        <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="shortDescription"
                        >
                            Short Description
                        </label>
                        <textarea
                            id="shortDescription"
                            name="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter a short description"
                            rows="2"
                            required
                        ></textarea>
                    </div>

                    {/* Long Description */}
                    <div>
                        <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="longDescription"
                        >
                            Long Description
                        </label>
                        <textarea
                            id="longDescription"
                            name="longDescription"
                            value={formData.longDescription}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter a long description"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;