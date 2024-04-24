// File: Auth.jsx
// Description: This file contains the Auth component which is used to handle user authentication in the application.

// React Imports
import React from "react";
// Amplify Imports
import { Amplify } from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import AmplifyConfig from "../amplifyconfiguration";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(AmplifyConfig);

export const Auth = ({ children }) => {
    return <AmplifyAuthenticator>{children}</AmplifyAuthenticator>;
};
