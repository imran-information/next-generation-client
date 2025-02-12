import React, { useState } from 'react';
import toast from 'react-hot-toast';
import SectionTitle from './shared/SectionTitle';
import { Button } from '@mui/material';

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
        <div className="p-8 py-20 bg-[#f8fafc]">
            <SectionTitle heading="Subscribe to our Newsletter" subHeading='Subscribe to our newsletter to get the latest news, updates, and special offers delivered directly to your inbox.' />

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
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
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
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
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
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                    ></textarea>
                </div> 
                <Button type='submit'
                    sx={{
                        
                        backgroundColor: '#00e29a',
                        color: 'white',
                        borderRadius: '50px',
                        px: 3,
                        py: 1,
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        transition: 'all 0.3s ease-in-out',
                        boxShadow: '0px 4px 10px rgba(0, 226, 154, 0.3)',
                        '&:hover': {
                            backgroundColor: '#00c288',
                            boxShadow: '0px 6px 15px rgba(0, 226, 154, 0.5)',
                            transform: 'translateY(-2px)',
                        },
                        '&:active': {
                            transform: 'translateY(0px)',
                            boxShadow: '0px 3px 8px rgba(0, 226, 154, 0.3)',
                        },
                    }}>
                    Subscribe Now
                </Button>
            </form>
        </div>
    );
};

export default Newsletter;