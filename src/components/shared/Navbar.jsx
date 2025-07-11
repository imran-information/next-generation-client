import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Menu, MenuItem, Avatar, IconButton, Typography, Box, Button, Drawer, List, ListItem, ListItemText, Switch, FormControlLabel } from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import logo from '/logo.png';

const Navbar = () => {
    const { user, handleSignOutUser } = useAuth();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [darkMode, setDarkMode] = useState(true); // Set default to true for dark mode

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

    useEffect(() => {
        // Initially set dark mode based on localStorage or default to dark mode
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setDarkMode(storedTheme === 'dark');
        } else {
            setDarkMode(true); // Set dark mode as default
        }

        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const handleToggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');

        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
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
                        <NavLink
                            to="/dashboard/home"
                            className={({ isActive }) =>
                                `hover:text-secondary transition-colors duration-300 ${isActive ? 'text-secondary font-bold' : ''}`
                            }
                        >
                            Dashboard
                        </NavLink>
                    </>
                )
            }
        </>
    );

    return (
        <AppBar position="fixed" sx={{ zIndex: 1100 }}>
            <div className='md:px-20 bg-primary dark:bg-neutral-900'>
                <Toolbar className=''>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { md: 'none' } }} onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>

                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
                        <img className="hidden md:block w-20" src={logo} alt="logo" />
                        <Typography variant="h4">NextGen<span className="text-secondary">.</span></Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' }, gap: 2, ml: 3 }}>{links}</Box>
                    {/* <FormControlLabel
                        control={
                            <Switch
                                checked={darkMode}
                                onChange={handleToggleDarkMode}
                                name="darkMode"
                                color="secondary" // You can change this to any color like primary, secondary, etc.
                                sx={{
                                    '& .MuiSwitch-thumb': {
                                        backgroundColor: darkMode ? '#fff' : '#000', // Custom color for the thumb
                                    },
                                    '& .MuiSwitch-track': {
                                        backgroundColor: darkMode ? '#8053f6' : '#000', // Custom color for the track
                                    },
                                }}
                            />
                        }
                        label={`${darkMode ? "Dark Mode" : 'Light Mode'}`} // Optional label
                    /> */}
                    <Switch className="mr-2"
                        checked={darkMode}
                        onChange={handleToggleDarkMode}
                        name="darkMode"
                        color="default"
                        checkedIcon={<Brightness7 />} // Icon when checked (light mode)
                        icon={<Brightness4 />} // Icon when unchecked (dark mode)
                    />
                    {user ? (
                        <div
                            style={{
                                display: 'block',
                                marginLeft: 'auto',
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
                                <Link to='/dashboard/profile'>
                                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                                </Link>
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
                                <ListItem button component={NavLink} to="/dashboard" onClick={handleDrawerToggle}>
                                    <ListItemText primary="Dashboard" />
                                </ListItem>
                            </>
                        )}
                    </List>
                </Drawer>
            </div>
        </AppBar >
    );
};

export default Navbar;
