import { Router } from 'express';

import createUser from '../controllers/user/create/index.js';

const router = Router();

router.post('/', createUser);

export default router;