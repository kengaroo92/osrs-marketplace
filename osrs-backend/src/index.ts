import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { connectToDatabase } from "./config/initialize_db";
import { initializeRoutes } from './routes';

const app = express();
const port = 3000;

initializeRoutes(app);

app.listen(port, async () => {
    await connectToDatabase();
    console.log(`Server is running on port ${port}`);
});
