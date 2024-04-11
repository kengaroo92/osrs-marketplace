import { Router } from 'express';

const router = Router();


router.post('/users', (req, res) => {
    res.send('Test');
});

export default router;