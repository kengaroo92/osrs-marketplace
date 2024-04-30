// File: pages/Signup.js

// React Imports
import React, { useState, useEffect } from "react";
// Next Imports
import { useRouter } from "next/router";
// Amplify Imports
import { signUp } from "aws-amplify/auth";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSignUp(e) {
        e.preventDefault();
        try {
            const user = await signUp({
                username: email,
                password,
                attributes: {
                    email,
                },
                autoSignIn: true,
            });

            console.log("User signed up successfully: ", user);
        } catch (error) {
            console.log("Error signing up a new user: ", error);
        }
    }

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Sign Up</button>
            </form>
        </>
    );
};

export default Signup;
