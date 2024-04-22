import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
    return (
        <Box
            component='footer'
            sx={{
                p: 2,
                bgcolor: "#333",
                color: "white",
                mt: "auto",
                textAlign: "center",
            }}
        >
            <Container maxWidth='lg'>
                <Typography variant='body2'>
                    &copy; {new Date().getFullYear()} OSRS Marketplace. All
                    rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
