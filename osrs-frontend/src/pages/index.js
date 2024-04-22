// pages/index.js
import React from "react";
import {
    Container,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    Link,
} from "@mui/material";

export default function Home() {
    return (
        <Box>
            <Box
                sx={{
                    bgcolor: "#005a87",
                    color: "white",
                    p: 2,
                    textAlign: "center",
                }}
            >
                <Typography variant='h4' component='h1'>
                    Welcome to the OSRS Marketplace
                </Typography>
            </Box>
            <Container maxWidth='sm' sx={{ my: 4 }}>
                <Typography variant='h5' component='h2' gutterBottom>
                    About Us
                </Typography>
                <Typography variant='body1' paragraph>
                    OSRS Marketplace is your trusted source for buying and
                    selling OSRS gold. We provide secure transactions and
                    competitive prices.
                </Typography>
                <Typography variant='h5' component='h2' gutterBottom>
                    Services
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary='Buy OSRS Gold' />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Sell OSRS Gold' />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='24/7 Customer Support' />
                    </ListItem>
                </List>
                <Typography variant='h5' component='h2' gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant='body1' paragraph>
                    Have questions? Email us at{" "}
                    <Link href='mailto:support@osrs-marketplace.com'>
                        support@osrs-marketplace.com
                    </Link>
                </Typography>
            </Container>
            <Box
                sx={{
                    bgcolor: "#333",
                    color: "white",
                    p: 2,
                    textAlign: "center",
                }}
            >
                <Typography variant='body2'>
                    &copy; 2024 OSRS Marketplace. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}
