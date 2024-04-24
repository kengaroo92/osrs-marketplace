// File: pages/index.js

// React Imports
import React, { useState, useEffect } from "react";
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
// Amplify Imports
import { AmplifySignOut } from "@aws-amplify/ui-react";
// Util Imports
import { checkAuthStatus } from "../utils/authUtils";

export default function Home() {
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

                {isAuthenticated ? (
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
