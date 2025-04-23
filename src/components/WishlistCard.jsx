import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Button,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
} from '@mui/material';

const WishlistCard = ({ wishlist, handleDeleteWishlist }) => {
    const { _id, id, title, imageUrl, shortDescription } = wishlist || {};

    return (
        <motion.div
            whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="bg-white dark:bg-neutral-800 rounded-xl"
        >
            <Card
                sx={{
                    maxWidth: 400,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: '16px',
                    backgroundColor: 'transparent', // Use Tailwind background
                    boxShadow: 'none', // Use Tailwind shadow if needed
                }}
            >
                <CardMedia
                    component="img"
                    sx={{ height: 200, objectFit: 'cover' }}
                    image={
                        imageUrl ||
                        'https://i.ibb.co/com/7vkzw6K/3d-render-astronaut-with-target-3d-illustration-design-460848-8276.jpg'
                    }
                    alt={title}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        className="text-text-color dark:text-gray-200"
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="body2"
                        mb={2}
                        className="text-primary-light dark:text-gray-400"
                    >
                        {shortDescription?.substring(0, 200)}...
                    </Typography>

                </CardContent>

                <CardActions
                    sx={{
                        px: 2,
                        pb: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderTop: '1px solid #e0e0e0',
                    }}
                >
                    <Link to={`/blog-details/${id}`} style={{ textDecoration: 'none' }}>
                        <Button
                            variant="outlined"
                            sx={{
                                color: '#00e29a',
                                borderRadius: '50px',
                                px: 3,
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                border: '2px solid #00e29a',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    backgroundColor: '#00c288',
                                    boxShadow: '0 6px 15px rgba(0, 226, 154, 0.5)',
                                    transform: 'translateY(-2px)',
                                    color: 'white',
                                },
                            }}
                        >
                            Details
                        </Button>
                    </Link>

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#00e29a',
                            color: 'white',
                            borderRadius: '50px',
                            px: 3,
                            py: 0.8,
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
                        onClick={() => handleDeleteWishlist(_id)}
                    >
                        Remove
                    </Button>
                </CardActions>
            </Card>
        </motion.div>
    );
};

export default WishlistCard;
