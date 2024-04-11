import { Express } from 'express';

import userRouter from '../routes/user';

export function initializeRoutes(app: Express) {
    app.use('/api/users', userRouter);
}

