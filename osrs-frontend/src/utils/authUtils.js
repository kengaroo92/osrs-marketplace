// File: utils/authUtils.js

// Amplify Imports
import Auth from "aws-amplify";

export const checkAuthStatus = async () => {
    try {
        const user = await Auth.currentAuthenticatedUser();
        return true;
    } catch (error) {
        return null;
    }
};
