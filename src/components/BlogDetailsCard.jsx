import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Button, Card, CardContent, Typography, Avatar, TextField, Box } from '@mui/material';

const BlogDetailsCard = ({ blog, handleWishlist, handleCommentSubmit, comments }) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [commentText, setCommentText] = useState("");
    const { _id, title, imageUrl, category, shortDescription, longDescription, date, author_email, author, author_photoUrl } = blog || {};
    const isBlogOwner = author_email === user?.email;

    return (
        <Card className='dark:bg-neutral-800 dark:text-white' sx={{ backgroundColor: '#f5f6ff', borderRadius: 3, boxShadow: 3, overflow: 'hidden' }}>
            {/* Blog Image */}
            <img
                src={imageUrl || "https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg"}
                alt={title}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />

            <CardContent>
                {/* Title & Author */}
                <Typography className='dark:text-gray-300' variant="h4" fontWeight="bold" color="#333">{title}</Typography>
                <Box display="flex" alignItems="center" mt={1} mb={2}>
                    <Avatar src={author_photoUrl} alt={author} sx={{ width: 40, height: 40, mr: 1 }} />
                    <Typography className='dark:text-gray-300' variant="subtitle1" color="textSecondary">
                        {author} | {new Date(date).toLocaleDateString()}
                    </Typography>
                </Box>

                {/* Category Badge */}
                <Box className='dark:bg-secondary' component="span" sx={{ background: '#8053f6', color: 'white', px: 2, py: 0.5, borderRadius: 5, fontSize: 12 }}>
                    {category}
                </Box>

                {/* Blog Content */}
                <Typography className='dark:text-gray-300' variant="body1" color="textSecondary" mt={2}>{shortDescription}</Typography>
                <Typography className='dark:text-gray-300' variant="body1" color="textSecondary" mt={2}>{longDescription}</Typography>

                {/* Action Buttons */}
                <Box mt={4} display="flex" justifyContent="space-between">
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
                        }}
                        onClick={() => navigate('/all-blogs')}
                    >
                        More Blogs
                    </Button>

                    {isBlogOwner ? (
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
                            }}
                            onClick={() => navigate(`/update-blog/${blog._id}`)}
                        >
                            Update
                        </Button>
                    ) : (
                        <Button
                            variant="outlined"
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
                            onClick={() => handleWishlist(_id, title, imageUrl, category, shortDescription, longDescription)}
                        >
                            Add to Wishlist
                        </Button>
                    )}
                </Box>

                {/* Comments Section */}
                <Box mt={6}>
                    <Typography variant="h5" fontWeight="bold">Comments</Typography>
                    {!isBlogOwner && (
                        <Box mt={2}>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                variant="outlined"
                                placeholder="Write your comment..."
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#ccc' }, // Default border color
                                        '&:hover fieldset': { borderColor: '#8053f6' }, // Hover color
                                        '&.Mui-focused fieldset': { borderColor: '#8053f6', borderWidth: 2 }, // Focus color
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: '#333', // Text color
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#8053f6', // Label color when focused
                                    },
                                }}
                            />
                            <Button
                                sx={{
                                    mt: 2,
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
                                onClick={() => handleCommentSubmit(commentText, _id, author, author_photoUrl, setCommentText)}
                            >
                                Submit Comment
                            </Button>
                        </Box>
                    )}

                    {/* Comments List */}
                    <Box mt={4}>
                        {comments.length > 0 ? comments.map((comment, ind) => (
                            <Box className='dark:text-gray-300 dark:bg-neutral-900' key={ind} p={2} borderRadius={2} bgcolor="white" boxShadow={1} mb={2}>
                                <Box display="flex" alignItems="center">
                                    <Avatar src={comment.profilePicture} sx={{ width: 32, height: 32, mr: 1 }} />
                                    <Typography fontWeight="bold">{comment.username}</Typography>
                                </Box>
                                <Typography className='dark:text-gray-300' variant="caption" color="gray">{new Date(comment.createdAt).toLocaleDateString()}</Typography>
                                <Typography className='dark:text-gray-300' mt={1} color="textSecondary">{comment.commentText}</Typography>
                            </Box>
                        )) : <Typography className='dark:text-gray-300' variant="h6" color="textSecondary">No comments yet</Typography>}
                    </Box>
                </Box>
            </CardContent >
        </Card >
    );
};

export default BlogDetailsCard;
