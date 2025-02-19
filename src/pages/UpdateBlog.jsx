import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosCecure';
import { Helmet } from 'react-helmet-async';
import LoadingSpinner from '../components/LoadingSpinner';

const UpdateBlog = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useAuth();
    const [blog, setBlog] = useState({});
    const instance = useAxiosSecure();

    const categories = ["Technology", "Health", "Travel", "Education", "Lifestyle"];

    const [formData, setFormData] = useState({
        title: "",
        imageUrl: "",
        category: "",
        shortDescription: "",
        longDescription: "",
    });

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const { data } = await instance.get(`/blog/${id}`);
                setBlog(data);
                setFormData({
                    title: data.title || "",
                    imageUrl: data.imageUrl || "",
                    category: data.category || "",
                    shortDescription: data.shortDescription || "",
                    longDescription: data.longDescription || "",
                });
            } catch (error) {
                toast.error("Error fetching blog data.");
            }
        };
        fetchBlogData();
    }, [id]);

    if (!blog?._id) return <LoadingSpinner />

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await instance.patch(`/update-blog/${id}`, formData);
            toast.success('Blog updated successfully!');
            navigate(`/blog-details/${id}`);
        } catch (err) {
            toast.error("Error updating blog: " + err.message);
        }
    };

    return (
        <div className="py-40 px-5 md:px-0 min-h-screen" style={{ backgroundColor: "#f5f6ff" }}>
            <Helmet>
                <title>Next Gen | Update Blog</title>
            </Helmet>
            <div className="max-w-lg bg-white rounded-lg mx-auto p-5 shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center" style={{ color: "#8053f6" }}>
                    Update Blog
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8053f6]"
                            placeholder="Enter blog title"
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="imageUrl">Image URL</label>
                        <input
                            type="url"
                            id="imageUrl"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8053f6]"
                            placeholder="Enter image URL"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="category">Category</label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8053f6]"
                            required
                        >
                            <option value="" disabled>Select a category</option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Short Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="shortDescription">Short Description</label>
                        <textarea
                            id="shortDescription"
                            name="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8053f6]"
                            placeholder="Enter a short description"
                            rows="2"
                            required
                        ></textarea>
                    </div>

                    {/* Long Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="longDescription">Long Description</label>
                        <textarea
                            id="longDescription"
                            name="longDescription"
                            value={formData.longDescription}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8053f6]"
                            placeholder="Enter a long description"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-[#8053f6] text-white py-2 px-4 rounded-lg hover:bg-[#6a3cd2] transition"
                        >
                            Update Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;
