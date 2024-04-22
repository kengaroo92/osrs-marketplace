// React Imports
import React from "react";
// MUI Imports
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
// Next Imports
import Link from "next/link";
// Hooks Imports
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
    const { user } = useAuth();

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
                    {!user && (
                        <>
                            <Link href='/login' passHref>
                                <Button color='inherit'>Login</Button>
                            </Link>
                            <Link href='/signup' passHref>
                                <Button color='inherit'>Sign Up</Button>
                            </Link>
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
