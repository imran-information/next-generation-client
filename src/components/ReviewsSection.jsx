import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Card, Typography } from '@mui/material';
import SectionTitle from './shared/SectionTitle';
import { motion } from 'framer-motion';
import { Navigation, Autoplay } from 'swiper/modules';

export default function ReviewsSection() {
    const reviews = [
        { user: 'John Doe', comment: 'Great article! I learned a lot and found the tips very helpful. Highly recommend it!', rating: 5 },
        { user: 'Jane Smith', comment: 'Good read, but it could have included more practical examples. Still, very informative.', rating: 4 },
        { user: 'Alex Johnson', comment: 'Excellent content! The explanations were clear and the examples easy to follow.', rating: 5 },
        { user: 'Emily Clark', comment: 'It was a decent read, but I was hoping for more advanced topics. Overall, not bad.', rating: 3 },
        { user: 'Michael Lee', comment: 'This article is a must-read for anyone starting out in this field. Amazing insights!', rating: 5 }
    ];

    // Function to generate star rating
    const generateStars = (rating) => {
        return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    return (
        <div className="bg-bg dark:bg-neutral-900 px-10 lg:px-0">
            <div className='container mx-auto py-20'>
                <SectionTitle heading="Reviews" subHeading="Read what our customers have to say about our products and services." />

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1} // Default: 1 card
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    speed={600}
                    breakpoints={{
                        640: { slidesPerView: 1 }, // Mobile
                        768: { slidesPerView: 2 }, // Tablets
                        1024: { slidesPerView: 3 }, // Medium screens
                        1280: { slidesPerView: 4 }  // Large screens (4 cards max)
                    }}
                    className="review-swiper"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                whileHover={{ scale: 1.05, opacity: 0.9 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="cursor-pointer"
                            >
                                <Card data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000" className="dark:bg-neutral-800" sx={{
                                        padding: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'all 0.3s ease-in-out',
                                        '&:hover': { boxShadow: '0px 6px 15px rgba(0,0,0,0.2)' }
                                    }}>
                                    <Typography className="dark:text-gray-300 text-center" variant="body2" sx={{ fontWeight: 'bold' }}>
                                        {review.user}
                                    </Typography>
                                    <Typography className="dark:text-gray-400 text-center" variant="body2" color="text.secondary">
                                        {review.comment}
                                    </Typography>
                                    <Typography variant="caption" sx={{ marginTop: 1, color: 'gray', textAlign: 'center' }}>
                                        <span className="dark:text-yellow-400">{generateStars(review.rating)}</span>
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
