// File: components/Navbar.js

// React Imports
import React, { useState } from "react";
// MUI Imports
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
// Next Imports
import Link from "next/link";
// Amplify Imports
import { signOut } from "aws-amplify/auth";
// Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { setUser, clearUser } from "../store/slices/userSlice";

const Navbar = () => {
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();

    // Handle Sign Out.
    const handleSignOut = async () => {
        try {
            await signOut();
            dispatch(clearUser());
        } catch (error) {
            console.error("Error signing out user: ", error);
        }
    };

    console.log("User: ", user);

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
                    {!user ? (
                        <>
                            <Link href='/login' passHref>
                                <Button color='inherit'>Login</Button>
                            </Link>
                            <Link href='/signup' passHref>
                                <Button color='inherit'>Sign Up</Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Button color='inherit' onClick={handleSignOut}>
                                Sign Out
                            </Button>
                            <Typography>
                                Welcome, {user.signInDetails.loginId}
                            </Typography>
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
