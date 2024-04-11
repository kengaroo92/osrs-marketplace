import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { connectToDatabase } from "./config/initialize_db";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

connectToDatabase();