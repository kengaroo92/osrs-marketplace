// /auth/login.js
// Amplify Imports
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";

const Login = () => {
    return (
        <AmplifyAuthenticator>
            <AmplifySignIn slot='sign-in' hideSignUp={true} />
        </AmplifyAuthenticator>
    );
};

export default Login;
