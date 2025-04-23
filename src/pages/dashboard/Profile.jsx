import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const Profile = () => {
    const [user, setUser] = useState({ name: '', email: '' });

    useEffect(() => {
        // এখানে API কল করে ইউজার ডেটা লোড করুন
        setUser({ name: 'John Doe', email: 'john@example.com' });
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // এখানে API কল করে ইউজার ডেটা আপডেট করুন
        console.log('Updated User:', user);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
            <TextField
                fullWidth
                margin="normal"
                label="Name"
                name="name"
                value={user.name}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Update Profile
            </Button>
        </Box>
    );
};

export default Profile;
