import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';


const UpdateBlog = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { user } = useAuth()
    const [blog, setBlog] = useState({});

    const { title, imageUrl, category, shortDescription, longDescription, date, author_email, author, author_photoUrl } = blog || {};

    const [formData, setFormData] = useState({
        title: "",
        imageUrl: "",
        category: "",
        shortDescription: "",
        longDescription: "",
    });



    const categories = ["Technology", "Health", "Travel", "Education", "Lifestyle"];

    useEffect(() => {
        const blogData = async () => {
            const { data } = await axios.get(`http://localhost:5000/blog/${id}`)
            setBlog(data)

            setFormData({
                title: data.title || "",
                imageUrl: data.imageUrl || "",
                category: data.category || "",
                shortDescription: data.shortDescription || "",
                longDescription: data.longDescription || "",
            });
        };
        blogData()
    }, [id])



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.patch(`http://localhost:5000/update-blog/${id}`, formData)
            toast.success('Blog information updated successfully.!')
            navigate('/all-blogs')
            console.log(data);
        } catch (err) {
            toast.error("Error updating blog:" + err.message);
        }



    };

    return (
        <div className="py-40 min-h-screen bg-[#f5f6ff]">
            <div className="max-w-lg bg-white rounded mx-auto p-5 ">
                <h1 className="text-2xl font-bold mb-4 text-center">Update Blog</h1>
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
                            defaultValue={title}
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
                            defaultValue={imageUrl}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter image URL"
                            required
                        />
                    </div>

                    {/* Category */}
                    {
                        category && <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="category">
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                defaultValue={category}
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
                    }

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
                            defaultValue={shortDescription}
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
                            defaultValue={longDescription}
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

export default UpdateBlog;