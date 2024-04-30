// File: pages/_app.js

// React Imports
import React from "react";
// Component Imports
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Custom Page Imports
import Login from "./login";
import Signup from "./signup";
// Amplify Imports
import { Amplify } from "aws-amplify";
import AmplifyConfig from "../aws-exports";
// MUI Imports
import { Container, Box } from "@mui/material";
// Redux Imports
import { Provider } from "react-redux";
import { store } from "../store/store";
// Styles
import "../styles/globals.css";

Amplify.configure(AmplifyConfig);

console.log("Amplify Config: ", AmplifyConfig);
console.log("Amplify: ", Amplify);
console.log("Store: ", store);

function App({ Component, pageProps }) {
    const topMargin = "64px";

    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
