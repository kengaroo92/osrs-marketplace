// /auth/signup.js
// Amplify Imports
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";

const Signup = () => {
    return (
        <AmplifyAuthenticator>
            <AmplifySignUp slot='sign-up' />
        </AmplifyAuthenticator>
    );
};

export default Signup;
