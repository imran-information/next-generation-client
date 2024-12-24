import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Newsletter = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form submitted:", formData);
        toast.success("Thank you for subscribing to our newsletter.");
        // Clear form fields
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="p-8 py-20 bg-[#f5f6ff]">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">Newsletter</h2>
            <p className="md:px-96 mb-6 text-center">
                Effortlessly monitor your financial progress with a feature designed to help you track <br /> your earnings in real time as they grow.
            </p>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows="4"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-green-400 text-white px-6 py-2 rounded-md hover:bg-green-500 transition"
                >
                    Submit Message
                </button>
            </form>
        </div>
    );
};

export default Newsletter;