import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { connectToDatabase } from "./config/initialize_db";

const app = express();
const port = 3000;

app.listen(port, async () => {
    await connectToDatabase();
    console.log(`Server is running on port ${port}`);
});
