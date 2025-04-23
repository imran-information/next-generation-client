import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import registerLottie from '../assets/lottie/register.json';
import Lottie from 'lottie-react';
import { Box, Button, TextField, Typography, Divider, IconButton } from '@mui/material';

const SignUp = () => {
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const location = useLocation();
    const [toggle, setToggle] = useState(false);
    const { handleGoogleSignIn, handleCreateUserWithEmail, handleUpdateUserProfile, setUser } = useAuth();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // Password validation
        if (password.length < 6) {
            return setError({ ...error, password: "Password must be at least 6 characters long." });
        }
        if (!/[A-Z]/.test(password)) {
            return setError({ ...error, password: "Password must contain at least one uppercase letter." });
        }
        if (!/[0-9]/.test(password)) {
            return setError({ ...error, password: "Password must contain at least one numeric character." });
        }
        if (!/[@$!%*?&#]/.test(password)) {
            return setError({ ...error, password: "Password must contain at least one special character." });
        }

        try {
            // User created
            const result = await handleCreateUserWithEmail(email, password);
            toast.success('Signup Successfully!');
            navigate(location?.state ? location.state : '/');
            await handleUpdateUserProfile(name, photo);
            setUser({ ...result.user, photoURL: photo, displayName: name });
        } catch (err) {
            console.log(err);
            toast.error(err?.message);
        }
    };

    const handleGoogleSignInUser = async () => {
        try {
            await handleGoogleSignIn();
            toast.success('Sign Up Successfully!');
            navigate(location?.state ? location.state : '/');
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="hero min-h-screen py-20 bg-bg dark:bg-neutral-900">
            <Helmet>
                <title>Next Generation | Sign Up</title>
            </Helmet>
            <div data-aos="zoom-in" data-aos-duration="1500" className="hero-content flex-col lg:flex-row-reverse items-center gap-10 justify-between">

                {/* Sign Up Form */}
                <div className="card bg-base-100 dark:bg-neutral-800 dark:text-white w-full max-w-md shadow-2xl p-6 flex flex-col h-full">
                    <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                        {/* Google Sign Up Button */}
                        <Button
                            variant="outlined"
                            fullWidth
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
                                '&:active': {
                                    transform: 'translateY(0px)',
                                    boxShadow: '0px 3px 8px rgba(0, 226, 154, 0.3)',
                                },
                            }}
                            onClick={handleGoogleSignInUser}
                        >
                            <FaGoogle style={{ marginRight: '8px' }} />
                            Sign Up with Google
                        </Button>
                    </Box>

                    <Divider sx={{ marginY: 2 }}>OR sign up with email</Divider>

                    <form onSubmit={handleSignUp}>
                        <Box >
                            <TextField
                                label="Name"
                                name="name"
                                type="text"
                                variant="outlined"
                                fullWidth
                                required
                                sx={{
                                    borderRadius: '10px',
                                    paddingY: '12px',
                                    input: { color: 'white' },
                                    '& .MuiInputLabel-root': { color: '#ccc' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#555' },
                                        '&:hover fieldset': { borderColor: '#00e29a' },
                                        '&.Mui-focused fieldset': { borderColor: '#00e29a' },
                                    },
                                }}
                            />
                        </Box>

                        <Box >
                            <TextField
                                label="Photo URL"
                                name="photo"
                                type="url"
                                variant="outlined"
                                fullWidth
                                required
                                sx={{
                                    borderRadius: '10px',
                                    paddingY: '12px',
                                    input: { color: 'white' },
                                    '& .MuiInputLabel-root': { color: '#ccc' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#555' },
                                        '&:hover fieldset': { borderColor: '#00e29a' },
                                        '&.Mui-focused fieldset': { borderColor: '#00e29a' },
                                    },
                                }}
                            />
                        </Box>

                        <Box >
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                required
                                autoComplete="email"
                                sx={{
                                    borderRadius: '10px',
                                    paddingY: '12px',
                                    input: { color: 'white' },
                                    '& .MuiInputLabel-root': { color: '#ccc' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#555' },
                                        '&:hover fieldset': { borderColor: '#00e29a' },
                                        '&.Mui-focused fieldset': { borderColor: '#00e29a' },
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ position: 'relative', marginBottom: 2 }}>
                            <TextField
                                label="Password"
                                name="password"
                                type={toggle ? 'text' : 'password'}
                                variant="outlined"
                                fullWidth
                                required
                                autoComplete="current-password"
                                sx={{
                                    borderRadius: '10px',
                                    input: { color: 'white' },
                                    '& .MuiInputLabel-root': { color: '#ccc' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#555' },
                                        '&:hover fieldset': { borderColor: '#00e29a' },
                                        '&.Mui-focused fieldset': { borderColor: '#00e29a' },
                                    },
                                }}
                            />
                            <IconButton className="dark:text-white"
                                onClick={() => setToggle(!toggle)}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '10px',
                                    transform: 'translateY(-50%)',
                                    color: '#55595c',
                                }}
                            >
                                {toggle ? <FaEyeSlash /> : <FaEye />}
                            </IconButton>
                        </Box>

                        {error?.password && (
                            <Typography variant="body2" color="error" sx={{ textAlign: 'center' }}>
                                {error?.password}
                            </Typography>
                        )}

                        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                            {/* Submit Button with Custom Style */}
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    width: '100%',
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
                                }}
                            >
                                Create Account
                            </Button>
                        </Box>
                    </form>

                    <Typography variant="body2" sx={{ textAlign: 'center' }}>
                        Already have an account?{' '}
                        <Link to="/signIn" style={{ color: '#00e29a' }}>
                            Sign In
                        </Link>
                    </Typography>
                </div>
                {/* Lottie Animation */}
                <div className="text-center lg:text-left w-full mb-8 lg:mb-0">
                    <Lottie
                        animationData={registerLottie}
                        className="w-full h-full max-w-[500px] max-h-[500px] mx-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
