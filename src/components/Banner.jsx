import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE5fHxidXNpbmVzc3xlbnwwfDB8fHwxNjA0NjcwNzkw&ixlib=rb-1.2.1&q=80&w=1080",
        "https://images.unsplash.com/photo-1718218039082-e4f73c3ca123?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

    const textContent = [
        {
            title: "Embrace the Future of Technology",
            description: "Explore the latest trends and advancements in tech that are reshaping the world. Join the movement today."
        },
        {
            title: "Innovating for Tomorrow's Solutions",
            description: "Discover cutting-edge solutions that promise to bring powerful changes in industries across the globe."
        },
        {
            title: "Transform Your Business with AI",
            description: "Leverage the power of artificial intelligence to enhance efficiency and drive growth in your business."
        }
    ];

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Auto play logic
    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNextImage();
        }, 5000); // Change image every 5 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'background-image 1s ease-in-out',
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div data-aos="zoom-in" data-aos-duration="1500" className="max-w-2xl mx-auto">
                        <h1 className="mb-5 text-4xl md:text-6xl font-bold text-white">{textContent[currentImageIndex].title}</h1>
                        <p className="mb-5 text-lg md:text-xl text-white opacity-80">
                            {textContent[currentImageIndex].description}
                        </p>
                        <div className="flex justify-center items-center gap-6">

                            <Link to="/featured-blogs">
                                <Button
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
                                    Learn more
                                </Button>
                            </Link>
                            <HashLink smooth to="/#started">
                                <Button variant="Outlined"
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
                                >
                                    Try for free
                                </Button>
                            </HashLink>

                        </div>
                    </div>
                </div>
            </div>

            {/* Slider Navigation */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-0 lg:px-4">
                <IconButton
                    onClick={handlePrevImage}
                    sx={{
                        backgroundColor: '#00e29a',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#00c288',
                        },
                        padding: 2,
                        borderRadius: '50%',
                        transition: 'all 0.3s ease',
                    }}
                    aria-label="Previous Image"
                >
                    <ArrowBack />
                </IconButton>

                <IconButton
                    onClick={handleNextImage}
                    sx={{
                        backgroundColor: '#00e29a',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#00c288',
                        },
                        padding: 2,
                        borderRadius: '50%',
                        transition: 'all 0.3s ease',
                    }}
                    aria-label="Next Image"
                >
                    <ArrowForward />
                </IconButton>
            </div>
        </div >
    );
};

export default Banner;
