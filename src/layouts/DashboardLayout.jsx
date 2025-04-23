import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    AppBar,
    Typography,
    CssBaseline,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    Divider,
    useTheme,
    useMediaQuery,
    Badge,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
    Dashboard as DashboardIcon,
    AccountCircle as AccountCircleIcon,
    Logout as LogoutIcon,
    Menu as MenuIcon,
    Close as CloseIcon,  // Close icon for when sidebar is closed
} from '@mui/icons-material';
import useAuth from '../hooks/useAuth';

const drawerWidth = 240;

const DashboardLayout = () => {
    const { user } = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Logout logic here
        console.log('User logged out');
    };

    return (
        <Box sx={{ display: 'flex' }} className="dashboard-layout">
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: 1201, boxShadow: 5 }}>
                <Toolbar className="bg-primary">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>

                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <Typography variant="h5" noWrap>
                            Next Generation
                        </Typography>
                    </NavLink>
                    <Box sx={{ flexGrow: 1 }} />

                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" onClick={handleMenuOpen}>
                        <Avatar className="border-2 border-secondary" alt="User" src={user.photoURL} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        sx={{ mt: '45px' }}
                    >
                        <MenuItem component={NavLink} to="/dashboard/profile">
                            <AccountCircleIcon sx={{ mr: 1 }} />
                            Profile
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleLogout}>
                            <LogoutIcon sx={{ mr: 1 }} />
                            Logout
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)} // Close the sidebar when clicking outside
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        transition: 'transform 1s ease', // Smooth sliding animation
                        transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)', // Slide in/out effect
                    },
                }}
            >
                <Toolbar />
                <List>
                    <NavLink to="/dashboard/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                        {({ isActive }) => (
                            <ListItem button selected={isActive}>
                                <ListItemIcon>
                                    <DashboardIcon sx={{ color: isActive ? '#8053f6' : 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Dashboard Home"
                                    primaryTypographyProps={{
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        color: isActive ? '#8053f6' : 'inherit',
                                    }}
                                />
                            </ListItem>
                        )}
                    </NavLink>

                    <NavLink to="/dashboard/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                        {({ isActive }) => (
                            <ListItem button selected={isActive}>
                                <ListItemIcon>
                                    <AccountCircleIcon sx={{ color: isActive ? '#8053f6' : 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Profile"
                                    primaryTypographyProps={{
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        color: isActive ? '#8053f6' : 'inherit',
                                    }}
                                />
                            </ListItem>
                        )}
                    </NavLink>
                </List>


            </Drawer>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    ml: { sm: sidebarOpen ? `0` : `${-drawerWidth}px` },
                    transition: 'margin 0.5s',
                }}
                className="content-area"
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box >
    );
};

export default DashboardLayout;
