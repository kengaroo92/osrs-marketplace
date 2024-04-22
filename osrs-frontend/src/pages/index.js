// pages/index.js

// React Imports
import React from "react";
// MUI Imports
import {
    Container,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    Link,
    Button,
} from "@mui/material";
// Context Imports
import { useAuth } from "../context/AuthProvider"; // Adjust the path as necessary

export default function Home() {
    const { user } = useAuth(); // Extract user from the auth context

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Container component='main' maxWidth='sm' sx={{ my: 4, flex: 1 }}>
                <Typography variant='h5' component='h2' gutterBottom>
                    About Us
                </Typography>
                <Typography variant='body1' paragraph>
                    OSRS Marketplace is your trusted source for buying and
                    selling OSRS gold. We provide secure transactions and
                    competitive prices.
                </Typography>

                {user ? (
                    <React.Fragment>
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
                    </React.Fragment>
                ) : (
                    <Typography variant='body1' paragraph>
                        Please{" "}
                        <Link href='/login' color='primary'>
                            log in
                        </Link>{" "}
                        to view our services.
                    </Typography>
                )}

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
        </Box>
    );
}
