// React Imports
import React from "react";
// Component Imports
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Amplify Imports
import { Amplify } from "aws-amplify";
import config from "../aws-exports";
// MUI Imports
import { Container, Box } from "@mui/material";
// Styles
import "../styles/globals.css";
import { AuthProvider } from "@/context/AuthProvider";

Amplify.configure(config);

function MyApp({ Component, pageProps }) {
    const topMargin = "64px";

    return (
        <AuthProvider>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}
            >
                <Navbar />
                <Container
                    component='main'
                    maxWidth='lg'
                    sx={{
                        flex: 1,
                        mt: topMargin,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Component {...pageProps} />
                </Container>
                <Footer />
            </Box>
        </AuthProvider>
    );
}

export default MyApp;
