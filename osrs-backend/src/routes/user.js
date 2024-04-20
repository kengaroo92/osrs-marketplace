import { Router } from 'express';

import create from '../controllers/user/create/index.js';
import update from '../controllers/user/update/index.js';
import read from '../controllers/user/read/index.js';

const router = Router();

router.post('/', create);
router.put('/', update);
router.get('/', read);

export default router;