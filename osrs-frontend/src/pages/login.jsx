// File: pages/Login.js

// React Imports
import React, { useState, useEffect } from "react";
// Next Imports
import { useRouter } from "next/router";
// Amplify Imports
import { signIn } from "aws-amplify/auth";
import { signOut } from "aws-amplify/auth";
import { currentAuthenticatedUser } from "../utils/AuthUtils";
import { fetchAuthSession } from "aws-amplify/auth";
// Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { setUser, clearUser } from "../store/slices/userSlice";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        const checkUser = async () => {
            try {
                const userData = await currentAuthenticatedUser();
                console.log("Current Authenticated User: ", userData);
                dispatch(setUser(userData));
            } catch (error) {
                console.error("Error checking user: ", error);
            }
        };
        checkUser();
    }, [dispatch]);

    async function handleSignIn(e) {
        e.preventDefault();
        try {
            const user = await signIn({
                username: email,
                password,
            });
            console.log("User signed in successfully: ", user);
            dispatch(setUser(user));
            router.push("/");
        } catch (error) {
            console.error("Error signing in user: ", error);
            setError(error.message);
        }
    }

    const handleSignOut = async () => {
        try {
            await signOut();
            dispatch(clearUser());
            console.log("User signed out successfully.");
        } catch (error) {
            console.error("Error signing out user: ", error);
        }
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSignIn}>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    value={password}
                    autoComplete='on'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Login</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
            <button onClick={handleSignOut}>Logout</button>
        </>
    );
};

export default Login;
