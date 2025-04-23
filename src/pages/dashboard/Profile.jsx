import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Avatar, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Profile = () => {
    const { user, handleUpdateUserProfile } = useAuth();

    const [userData, setUserData] = useState({
        name: '',
        photo: null,
    });

    const [preview, setPreview] = useState('');

    useEffect(() => {
        if (user) {
            setUserData({
                name: user.displayName || '',
                email: user.email || '',
                photo: null,
            });
            setPreview(user.photoURL || '');
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUserData({ ...userData, photo: file });
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userData.photo) {
            const formData = new FormData();
            formData.append('image', userData.photo);

            const apiKey = import.meta.env.VITE_IMGBB_API_KEY

            try {
                const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                    method: 'POST',
                    body: formData,
                });

                const data = await res.json();

                if (data.success) {
                    const imageUrl = data.data.url;
                    console.log('Uploaded Image URL:', imageUrl);

                    const updatedUser = {
                        name: userData.name,
                        email: user.email,
                        photoURL: imageUrl,
                    };

                    console.log('Final Updated User:', updatedUser);
                    await handleUpdateUserProfile(updatedUser.name, updatedUser.photoURL)
                    toast.success('Profile updated successfully!');
                } else {
                    console.error('Image upload failed:', data);
                    toast.error('Image upload failed!');
                }
            } catch (error) {
                console.error('Upload error:', error);
                toast.error('Something went wrong. Please try again.');
            }
        } else {
            console.log('No image selected. Proceeding with name and email only.');
            toast('No image selected. Updated name and email only.', { icon: 'ℹ️' });
        }
    };


    return (
        <Box className='bg-white shadow-lg rounded-xl p-10 '
            component="form"
            onSubmit={handleSubmit}
            sx={{
                maxWidth: 400,
                mx: 'auto',
                mt: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <Typography variant="h4">Update Your Profile</Typography>

            <Avatar
                src={preview}
                sx={{ width: 100, height: 100, mb: 1 }}
                alt="Profile Photo"
            />
            <Button
                variant="outlined"
                component="label"
                sx={{
                    color: '#00e29a',
                    borderRadius: '50px',
                    px: 3,
                    py: 0.9,
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
                }}
            >
                Select Photo
                <input type="file" hidden accept="image/*" onChange={handlePhotoChange} />
            </Button>

            <TextField
                fullWidth
                label="Name"
                name="name"
                value={userData.name}
                onChange={handleChange}
                variant="outlined"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        color: '#00e29a',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        '& fieldset': {
                            border: '2px solid #00e29a',
                        },
                        '&:hover fieldset': {
                            borderColor: '#00c288',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#00c288',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#00e29a',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#00c288',
                    },
                }}
            />

            <TextField
                fullWidth
                label="Email"
                name="email"
                value={userData.email}
                variant="outlined"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        color: '#00e29a',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        '& fieldset': {
                            border: '2px solid #00e29a',
                        },
                        '&:hover fieldset': {
                            borderColor: '#00c288',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#00c288',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#00e29a',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#00c288',
                    },
                }}
            />

            <Button
                type="submit"
                variant="contained"
                fullWidth
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
                }}
            >
                Update Profile
            </Button>
        </Box>
    );
};

export default Profile;
