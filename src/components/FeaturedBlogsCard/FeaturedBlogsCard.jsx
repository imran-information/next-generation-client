import * as React from 'react';
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
        <Card sx={{ maxWidth: 400, display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Header */}
            <CardHeader
                avatar={
                    <Avatar
                        aria-label="author"
                        src={author_photoUrl}
                    />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={author}
                subheader={formattedDate}
            />

            {/* Image */}
            <CardMedia
                component="img"
                sx={{ height: 200, objectFit: 'cover' }}  // Adjust the height as needed
                image={imageUrl || 'https://i.ibb.co.com/7vkzw6K/3d-render-astronaut-with-target-3d-illustration-design-460848-8276.jpg'}  // Use a placeholder image if imageUrl is not provided
                alt={title}
            />

            {/* Content */}
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {shortDescription}
                </Typography>
            </CardContent>

            {/* Card Actions */}
            <CardActions sx={{ marginTop: 'auto', }} disableSpacing>
                <IconButton aria-label="add to favorites" sx={{ color: '#8053f6' }}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" sx={{ color: '#8053f6' }}>
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
