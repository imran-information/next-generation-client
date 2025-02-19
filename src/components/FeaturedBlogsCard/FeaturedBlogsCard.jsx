import * as React from 'react';
import * as motion from "motion/react-client";
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function FeaturedBlogsCard({ blog }) {
    const { title, imageUrl, shortDescription, author_photoUrl, author, date } = blog;
    const isoDateStr = date;
    const dateC = new Date(isoDateStr);

    // Format the date as "September 14, 2016"
    const formattedDate = dateC.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <motion.div
            whileHover={{ scale: 1.05 }} // Card hover motion (scale)
            transition={{ duration: 0.3 }}
            sx={{ marginBottom: 4 }}
        >
            <Card className='bg-white dark:bg-neutral-900  rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all h-full flex flex-col'
                sx={{
                    maxWidth: 400,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative', // For pseudo-element positioning
                    overflow: 'hidden', // Hide overflow for smooth animation
                    '&:hover': {
                        // When hovered, add bottom border animation
                        '& .card-actions': {
                            '&::after': {
                                width: '100%', // Expand to full width on hover
                            }
                        },
                    },
                }}
            >
                {/* Header */}
                <CardHeader className='dark:text-gray-300'
                    avatar={<Avatar aria-label="author" src={author_photoUrl} />}
                    action={
                        <IconButton className='dark:text-secondary' aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={author}
                    subheader={formattedDate}
                    sx={{
                        color: 'text.primary', // Light mode text
                        '& .MuiCardHeader-subheader': { color: 'gray' }, // Default
                        '& .MuiCardHeader-subheader.dark': { color: '#d1d5db' } // Dark mode
                    }}
                />


                {/* Image */}
                <CardMedia
                    component="img"
                    sx={{ height: 200, objectFit: 'cover' }}
                    image={imageUrl || 'https://i.ibb.co/com/7vkzw6K/3d-render-astronaut-with-target-3d-illustration-design-460848-8276.jpg'}
                    alt={title}
                />

                {/* Content */}
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography className='dark:text-gray-300' variant="body2" sx={{ color: '#55595c', }}>
                        {shortDescription}
                    </Typography>
                </CardContent>

                {/* Card Actions with Bottom Border Effect */}
                <CardActions
                    sx={{
                        marginTop: 'auto',
                        position: 'relative',
                        paddingBottom: 1,
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
                    disableSpacing
                    className="card-actions after:dark:bg-secondary "
                >
                    <IconButton className='dark:text-secondary' aria-label="add to favorites" sx={{ color: '#8053f6' }}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton className='dark:text-secondary' aria-label="share" sx={{ color: '#8053f6' }}>
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </motion.div>
    );
}
