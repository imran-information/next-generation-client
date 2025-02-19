import React from 'react';
import { Link } from 'react-router-dom';
import * as motion from "motion/react-client";
import { Button, Box, Typography, Card, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const WishlistCard = ({ wishlist, handleDeleteWishlist }) => {
    const { _id, id, title, imageUrl, category, shortDescription } = wishlist || {};

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.3 }}
            sx={{ marginBottom: 4 }}
        >
            <Card
                sx={{
                    maxWidth: 400,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                        '& .card-actions': {
                            '&::after': {
                                width: '100%',
                            }
                        },
                    },
                }}
            >
                {/* Image */}
                <CardMedia
                    component="img"
                    sx={{ height: 200, objectFit: 'cover' }}
                    image={imageUrl || 'https://i.ibb.co/com/7vkzw6K/3d-render-astronaut-with-target-3d-illustration-design-460848-8276.jpg'}
                    alt={title}
                />

                {/* Content */}
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#55595c', marginBottom: 2 }}>
                        {shortDescription.substring(0, 200)}...
                    </Typography>
                </CardContent>

                {/* Card Actions with Bottom Border Effect */}
                <CardActions
                    sx={{
                        marginTop: 'auto',
                        position: 'relative',
                        paddingBottom: 2,
                        borderBottom: '2px solid transparent',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '0%',
                            height: '2px',
                            backgroundColor: '#8053f6',
                            transition: 'width 0.5s ease-in-out', // Animate width on hover
                        },
                    }}
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                    disableSpacing
                    className="card-actions"
                >
                    <Link to={`/blog-details/${id}`} style={{ textDecoration: 'none' }}>
                        <Button
                            variant="outlined"
                            sx={{
                                color: '#8053f6',
                                borderRadius: '50px',
                                paddingX: 3,
                                paddingY: 1,
                                fontWeight: 'bold',
                                textTransform: 'none',
                                border: '2px solid #8053f6',
                                transition: 'all 0.3s ease-in-out',
                                boxShadow: '0px 4px 10px rgba(128, 83, 246, 0.3)',
                                '&:hover': {
                                    backgroundColor: '#8053f6',
                                    color: 'white',
                                    boxShadow: '0px 6px 15px rgba(128, 83, 246, 0.5)',
                                    transform: 'translateY(-2px)',
                                },
                                '&:active': {
                                    transform: 'translateY(0px)',
                                    boxShadow: '0px 3px 8px rgba(128, 83, 246, 0.3)',
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
                            paddingX: 3,
                            paddingY: 1,
                            fontWeight: 'bold',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#2afcb9',
                            },
                        }}
                        onClick={() => handleDeleteWishlist(_id)}
                    >
                        Remove  Wishlist
                    </Button>
                </CardActions>
            </Card>
        </motion.div>
    );
};

export default WishlistCard;
