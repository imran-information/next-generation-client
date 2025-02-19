import React, { useState } from 'react';
import { TextField, MenuItem, Button, FormControl, InputLabel, Select, Box, ThemeProvider, createTheme } from '@mui/material';
import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosCecure';
import { Helmet } from 'react-helmet-async';

// Create a Material-UI theme with your primary color
const theme = createTheme({
    palette: {
        primary: {
            main: '#8053f6', // Primary color
        },
        secondary: {
            main: '#00e29a', // Secondary color
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#8053f6', // Focus border color
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: '#8053f6', // Focus label color
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#8053f6', // Button background color
                    '&:hover': {
                        backgroundColor: '#6a3cd2', // Slightly darker shade on hover
                    },
                },
            },
        },
    },
});

const AddBlog = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const instance = useAxiosSecure();
    const [formData, setFormData] = useState({
        title: '',
        imageUrl: '',
        category: '',
        shortDescription: '',
        longDescription: '',
        author: user?.displayName,
        date: new Date(),
        author_email: user?.email,
        author_photoUrl: user?.photoURL,
    });

    const categories = ['Technology', 'Health', 'Travel', 'Education', 'Lifestyle'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await instance.post('/add-blog', formData);
            toast.success('Blog information submitted successfully!');
            navigate('/all-blogs');
            setFormData({
                title: '',
                imageUrl: '',
                category: '',
                shortDescription: '',
                longDescription: '',
            });
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="py-40 px-5 md:px-0 min-h-screen bg-bg dark:bg-neutral-900" >
                <Helmet>
                    <title>Next Gen | Add Blog</title>
                </Helmet>
                <div data-aos="zoom-in" data-aos-duration="1500" className="max-w-lg bg-white dark:bg-neutral-800 rounded mx-auto p-5 shadow-lg">
                    <h1 className="text-2xl font-bold mb-4 text-center text-primary dark:text-secondary"  >
                        Add Blog
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Title */}
                        <TextField
                            fullWidth
                            label="Title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />

                        {/* Image URL */}
                        <TextField
                            fullWidth
                            label="Image URL"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />

                        {/* Category */}
                        <FormControl fullWidth required sx={{ mb: 2 }}>
                            <InputLabel>Category</InputLabel>
                            <Select
                                label="Category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                {categories.map((cat, index) => (
                                    <MenuItem key={index} value={cat}>
                                        {cat}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* Short Description */}
                        <TextField
                            fullWidth
                            label="Short Description"
                            name="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleChange}
                            required
                            multiline
                            rows={3}
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />

                        {/* Long Description */}
                        <TextField
                            fullWidth
                            label="Long Description"
                            name="longDescription"
                            value={formData.longDescription}
                            onChange={handleChange}
                            required
                            multiline
                            rows={5}
                            variant="outlined"
                            sx={{
                                mb: 2,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                },
                                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#8053f6', // Focus border color
                                },
                            }}
                        />

                        {/* Submit Button */}
                        <Button className='dark:bg-secondary bg-primary' fullWidth type="submit" variant="contained" sx={{ mb: 2 }}>
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default AddBlog;
