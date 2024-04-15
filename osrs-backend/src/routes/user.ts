import { Router } from 'express';

import createUser from '../controllers/user/create/index';

const router = Router();

router.post('/', createUser);

export default router;