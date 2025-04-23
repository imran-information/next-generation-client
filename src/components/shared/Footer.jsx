import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Grid,
    Typography,
    IconButton,
    Link as MUILink
} from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box component="footer" sx={{
            bgcolor: '#262626',
            color: '#fff',
            pt: 6,
            pb: 3,
            px: { xs: 2, sm: 6, md: 10 }  // Responsive horizontal padding
        }}>
            <div className="container mx-auto">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" gutterBottom>Next Generation</Typography>
                        <Typography variant="body2">
                            Your smart companion for daily productivity and mental wellness.
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6" gutterBottom>Resources</Typography>
                        <Box>
                            {['Docs', 'API', 'Blog'].map((item, i) => (
                                <MUILink key={i} href="#" color="inherit" underline="hover" display="block">
                                    {item}
                                </MUILink>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6" gutterBottom>Company</Typography>
                        <Box>
                            {['About', 'Careers', 'Contact'].map((item, i) => (
                                <MUILink key={i} href="#" color="inherit" underline="hover" display="block">
                                    {item}
                                </MUILink>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box display="flex" gap={2}>
                            <IconButton
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener"
                                aria-label="Facebook"
                                sx={{
                                    color: '#4267B2',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        backgroundColor: '#e7f0ff',
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener"
                                aria-label="Twitter"
                                sx={{
                                    color: '#1DA1F2',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        backgroundColor: '#e5f6fd',
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            >
                                <Twitter />
                            </IconButton>
                            <IconButton
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener"
                                aria-label="Instagram"
                                sx={{
                                    color: '#E1306C',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        backgroundColor: '#fde4ec',
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            >
                                <Instagram />
                            </IconButton>
                            <IconButton
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener"
                                aria-label="LinkedIn"
                                sx={{
                                    color: '#0077B5',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        backgroundColor: '#e3f2fd',
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            >
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>

                </Grid>
            </div>

            <Box mt={3} textAlign="center">
                <Typography variant="body2" color="text-white">
                    Copyright &copy; {new Date().getFullYear()}{' '}
                    <RouterLink to="https://imran-portfolio-iota.vercel.app" style={{ color: '#00e29a' }}>
                        DESIGN
                    </RouterLink>{' '}
                    - All rights reserved by NextGen
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;