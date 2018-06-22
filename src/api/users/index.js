import { Router } from 'express';

import find from './middleware/find';
import findOne from './middleware/findOne';
import createOne from './middleware/createOne';
import deleteOne from './middleware/deleteOne';
import updateOne from './middleware/updateOne';

const router = Router();

// Users
router.get('/lists', find);
router.post('/lists', createOne);

// A user
router.get('/lists/:id', findOne);
router.delete('/lists/:id', deleteOne);
router.patch('/lists/:id', updateOne);

export default router;
