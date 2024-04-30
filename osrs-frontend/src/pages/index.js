// File: pages/index.js

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
// Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { setUser, clearUser } from "@/store/slices/userSlice";

export default function Home() {
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
                    About Us Retards
                </Typography>
                <Typography variant='body1' paragraph>
                    OSRS Marketplace is your trusted source for buying and
                    selling OSRS gold. We provide secure transactions and
                    competitive prices.
                </Typography>
                <>
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
                </>

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
