import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card, Typography } from '@mui/material';
import SectionTitle from './shared/SectionTitle';
import { motion } from 'framer-motion'; // Import Framer Motion

export default function ReviewsSection() {
    const reviews = [
        {
            user: 'John Doe',
            comment: 'Great article! I learned a lot and found the tips very helpful. Highly recommend it!',
            rating: 5
        },
        {
            user: 'Jane Smith',
            comment: 'Good read, but it could have included more practical examples. Still, very informative.',
            rating: 4
        },
        {
            user: 'Alex Johnson',
            comment: 'Excellent content! The explanations were clear and the examples easy to follow.',
            rating: 5
        },
        {
            user: 'Emily Clark',
            comment: 'It was a decent read, but I was hoping for more advanced topics. Overall, not bad.',
            rating: 3
        },
        {
            user: 'Michael Lee',
            comment: 'This article is a must-read for anyone starting out in this field. Amazing insights!',
            rating: 5
        }
    ];

    // Function to generate star rating
    const generateStars = (rating) => {
        const fullStars = Array(rating).fill('⭐');
        const emptyStars = Array(5 - rating).fill('⭐'); // Define empty stars
        return [...fullStars, ...emptyStars].join(' ');
    };

    return (
        <div className="bg-bg">
            <div className='container mx-auto py-20'>
                <SectionTitle heading={'Customer Reviews'} subHeading={'Read what our customers have to say about our products and services.'} />

                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    navigation={true} // Enable Swiper's default navigation buttons
                    className="review-swiper"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            {/* Wrap the card with motion.div for animation */}
                            <motion.div
                                whileHover={{ scale: 1.05 }} // Hover effect
                                whileTap={{ scale: 0.95 }} // Tap effect
                                transition={{ duration: 0.2 }}
                            >
                                <Card sx={{ padding: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                        {review.user}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {review.comment}
                                    </Typography>
                                    <Typography variant="caption" sx={{ marginTop: 1, color: 'gray' }}>
                                        {generateStars(review.rating)}
                                    </Typography>
                                </Card>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
