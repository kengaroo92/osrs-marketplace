import express from 'express';
import { connectToDatabase } from "./config/initialize_db.js";
import { initializeRoutes } from './routes/index.js';

const app = express();
const port = 3000;

initializeRoutes(app);

app.listen(port, async () => {
    await connectToDatabase();
    console.log(`Server is running on port ${port}`);
});
