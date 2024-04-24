// File: components/Navbar.js

// React Imports
import React, { useState, useEffect } from "react";
// MUI Imports
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
// Next Imports
import Link from "next/link";
// Amplify Imports
import { AmplifySignOut } from "@aws-amplify/ui-react";
// Util Imports
import { checkAuthStatus } from "../utils/authUtils";

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Calles the checkAuthStatus function on component mount.
    useEffect(() => {
        const fetchUser = async () => {
            const user = await checkAuthStatus();
            setIsAuthenticated(!!user); // Sets isAuthenticated to true if user is not null.
        };

        fetchUser();
    }, []);

    return (
        <AppBar position='static' color='primary' elevation={0}>
            <Container maxWidth='lg'>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}
                    >
                        OSRS Marketplace
                    </Typography>
                    <Link href='/' passHref>
                        <Button color='inherit'>Home</Button>
                    </Link>
                    <Link href='/about' passHref>
                        <Button color='inherit'>About</Button>
                    </Link>
                    <Link href='/services' passHref>
                        <Button color='inherit'>Services</Button>
                    </Link>
                    <Link href='/contact' passHref>
                        <Button color='inherit'>Contact</Button>
                    </Link>
                    {!isAuthenticated ? (
                        <>
                            <Link href='/auth/login' passHref>
                                <Button color='inherit'>Login</Button>
                            </Link>
                            <Link href='/auth/signup' passHref>
                                <Button color='inherit'>Sign Up</Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <AmplifySignOut />
                            <Typography>
                                Welcome, {user.attributes.email}
                            </Typography>
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
