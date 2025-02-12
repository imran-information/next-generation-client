import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Menu, MenuItem, Avatar, IconButton, Typography, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, } from '@mui/icons-material';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import logo from '/logo.png';

const Navbar = () => {
    const { user, handleSignOutUser } = useAuth();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = async () => {
        try {
            await handleSignOutUser();
            toast.success('Signed Out Successfully!');
            navigate('/');
        } catch (err) {
            toast.error(err?.message);
        }
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `hover:text-secondary transition-colors duration-300 ${isActive ? 'text-secondary font-bold' : ''}`
                }
            >
                Home
            </NavLink>

            <NavLink
                to="/all-blogs"
                className={({ isActive }) =>
                    `hover:text-secondary transition-colors duration-300 ${isActive ? 'text-secondary font-bold' : ''}`
                }
            >
                All Blogs
            </NavLink>
            <NavLink
                to="/featured-blogs"
                className={({ isActive }) =>
                    `hover:text-secondary transition-colors duration-300 ${isActive ? 'text-secondary font-bold' : ''}`
                }
            >
                Featured Blogs
            </NavLink>
            {
                user && (
                    <>
                        <NavLink
                            to="/add-blog"
                            className={({ isActive }) =>
                                `hover:text-secondary transition-colors duration-300 ${isActive ? 'text-secondary font-bold' : ''}`
                            }
                        >
                            Add Blog
                        </NavLink>
                        <NavLink
                            to="/wishlist"
                            className={({ isActive }) =>
                                `hover:text-secondary transition-colors duration-300 ${isActive ? 'text-secondary font-bold' : ''}`
                            }
                        >
                            Wishlist
                        </NavLink>
                    </>
                )
            }

        </>
    );

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#8053f6', zIndex: 1100 }}>
            <div className="md:px-20">
                <Toolbar className=''>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { md: 'none' } }} onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>

                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
                        <img className="hidden md:block w-20" src={logo} alt="logo" />
                        <Typography variant="h4">NextGen<span className="text-secondary">.</span></Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' }, gap: 2, ml: 3 }}>{links}</Box>

                    {user ? (
                        <div
                            style={{
                                display: 'block',
                                marginLeft: 'auto',
                                display: 'flex', // Adjusted to ensure proper display
                                alignItems: 'center',
                            }}
                        >
                            <IconButton onClick={handleMenuOpen} color="inherit">
                                <Avatar
                                    className="border-2 border-secondary"
                                    src={user?.photoURL || '/default-avatar.png'}
                                    style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                                >
                                    {!user?.photoURL && user?.displayName?.charAt(0)}
                                </Avatar>
                            </IconButton>

                            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                                <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                            </Menu>
                        </div>
                    ) : (
                        <Button
                            component={Link}
                            to="/signIn"
                            variant="contained"
                            sx={{
                                backgroundColor: '#00e29a',
                                color: 'white',
                                borderRadius: '50px',
                                display: { xs: 'block', sm: 'none', md: 'block' },
                                ml: { xs: 'auto', sm: 0 },
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
                        >
                            Sign In
                        </Button>
                    )}

                </Toolbar>

                <Drawer
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    sx={{
                        '& .MuiDrawer-paper': {
                            backgroundColor: '#8053f6',
                            color: 'white',
                        },
                    }}
                >
                    <List>
                        <ListItem button onClick={handleDrawerToggle}>
                            {/* Optional: Close button or icon here */}
                        </ListItem>

                        {/* Common Links */}
                        <ListItem button component={NavLink} to="/" onClick={handleDrawerToggle}>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={NavLink} to="/all-blogs" onClick={handleDrawerToggle}>
                            <ListItemText primary="All Blogs" />
                        </ListItem>
                        <ListItem button component={NavLink} to="/featured-blogs" onClick={handleDrawerToggle}>
                            <ListItemText primary="Featured Blogs" />
                        </ListItem>

                        {/* Conditional Links for Logged-In Users */}
                        {user && (
                            <>
                                <ListItem button component={NavLink} to="/add-blog" onClick={handleDrawerToggle}>
                                    <ListItemText primary="Add Blog" />
                                </ListItem>
                                <ListItem button component={NavLink} to="/wishlist" onClick={handleDrawerToggle}>
                                    <ListItemText primary="Wishlist" />
                                </ListItem>
                            </>
                        )}
                    </List>
                </Drawer>



            </div>
        </AppBar>
    );
};

export default Navbar;
