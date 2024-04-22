import React, { createContext, useContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async function checkUser() {
            try {
                const userData = await Auth.currentAuthenticatedUser();
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user:", error);
                setUser(null);
            }
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
