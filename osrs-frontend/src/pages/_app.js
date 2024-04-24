// File: pages/_app.js

// React Imports
import React from "react";
// Component Imports
import { Auth } from "../components/Auth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Amplify Imports
import { Amplify } from "aws-amplify";
import AmplifyConfig from "../aws-exports";
// MUI Imports
import { Container, Box } from "@mui/material";
// Styles
import "../styles/globals.css";

Amplify.configure(AmplifyConfig);

function App({ Component, pageProps }) {
    const topMargin = "64px";

    return (
        <Auth>
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
        </Auth>
    );
}

export default App;
