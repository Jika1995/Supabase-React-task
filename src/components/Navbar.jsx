import React, { useState, useEffect, useContext } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, Tooltip, MenuItem, Badge, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/AuthContextProvider";

const pages = [
    {
        type: "My templates",
        path: "/templates",
    },
    {
        type: "Add template",
        path: "/add-template",
    }
];

const settings = [
    {
        type: "Sign in",
        path: "/",
    },
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // custom
    const navigate = useNavigate();
    const { error, setError, loading, isUserLoggedIn, session, logout } = useContext(authContext);

    useEffect(() => {
        isUserLoggedIn();
    }, [])

    return (
        <AppBar position="static" color='transparent'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontWeight: 700,
                            color: "darkviolet",
                            textDecoration: "none",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate("/")}
                        id="label-name"
                    >
                        DATconnect
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.type} onClick={handleCloseNavMenu}>
                                    <Typography
                                        textalign="center"
                                        color='darkviolet'
                                        onClick={() => navigate(page.path)}
                                    >
                                        {page.type}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* <DESKTOP></DESKTOP> */}
                    <Box
                        sx={{ flexGrow: 1, display: { md: "flex", sm: 'none', xs: 'none' } }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.type}
                                sx={{ my: 2, color: "darkviolet", display: "block" }}
                                onClick={() => navigate(page.path)}
                            >
                                {page.type}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Account">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: "12px" }}
                            >
                                <Avatar alt='' src="..." />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.type} onClick={handleCloseUserMenu}>
                                    <Typography
                                        textalign="center"
                                        onClick={() => navigate(setting.path)}
                                    >
                                        {setting.type}
                                    </Typography>
                                </MenuItem>
                            ))}
                            {session ? (
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textalign="center"
                                        onClick={logout}
                                    >
                                        Logout
                                    </Typography>
                                </MenuItem>
                            ) : (
                                ""
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
