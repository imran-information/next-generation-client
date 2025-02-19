import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import loginLottie from '../assets/lottie/register.json';
import Lottie from 'lottie-react';
import { Box, Button, TextField, Typography, Divider, IconButton } from '@mui/material';

const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [toggle, setToggle] = useState(false);
    const { handleGoogleSignIn, handleSignInUser } = useAuth();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;

        try {
            await handleSignInUser(email, pass);
            toast.success('Sign In Successfully!');
            navigate(location?.state ? location.state : '/');
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleGoogleSignInUser = async () => {
        try {
            await handleGoogleSignIn();
            toast.success('Sign In Successfully!');
            navigate(location?.state ? location.state : '/');
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="hero min-h-screen bg-bg dark:bg-neutral-900 text-white py-20">
            <Helmet>
                <title>Next Gen | SignIn</title>
            </Helmet>

            <div data-aos="zoom-in" data-aos-duration="1500" className="hero-content flex-col lg:flex-row-reverse items-center gap-10 justify-between">
                {/* Lottie Animation */}
                <div className="text-center lg:text-left w-full mb-8 lg:mb-0">
                    <Lottie animationData={loginLottie} className="w-full h-full max-w-[500px] max-h-[500px] mx-auto" />
                </div>

                {/* Sign In Form */}
                <div className="card bg-white dark:bg-neutral-800 dark:text-white text-gray-800 w-full max-w-md shadow-2xl p-6 flex flex-col h-full rounded-xl  ">
                    <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                        {/* Google Sign In Button */}
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
                            }}
                            onClick={handleGoogleSignInUser}
                        >
                            <FaGoogle style={{ marginRight: '8px' }} />
                            Sign in with Google
                        </Button>
                    </Box>

                    <Divider sx={{ marginY: 2, borderColor: '#444' }}>OR sign in with email</Divider>

                    <form onSubmit={handleSignIn}>
                        <Box sx={{ marginBottom: 2 }}>
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
                            <IconButton
                                onClick={() => setToggle(!toggle)}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '10px',
                                    transform: 'translateY(-50%)',
                                    color: toggle ? "#ffffff" : "#aaa",
                                }}
                            >
                                {toggle ? <FaEyeSlash /> : <FaEye />}
                            </IconButton>
                        </Box>

                        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                            {/* Submit Button */}
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
                                Login
                            </Button>
                        </Box>
                    </form>

                    <Typography variant="body2" sx={{ textAlign: 'center' }}>
                        Don't have an account?{' '}
                        <Link to="/signUp" style={{ color: '#00e29a', fontWeight: 'bold' }}>
                            Sign Up
                        </Link>
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
