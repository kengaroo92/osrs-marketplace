import userRouter from './user.js';

export function initializeRoutes(app) {
    app.use('/users', userRouter);
}