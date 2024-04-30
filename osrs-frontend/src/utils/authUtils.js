import { getCurrentUser } from "aws-amplify/auth";

async function currentAuthenticatedUser() {
    try {
        const user = await getCurrentUser();
        console.log("Current Authenticated User: ", user);
        return user;
    } catch (error) {
        console.error("Error getting current authenticated user: ", error);
        return null;
    }
}

export { currentAuthenticatedUser };
