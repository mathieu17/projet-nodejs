import { Router } from 'express';
import listRouter from './lists';
import setHeaders from './middleware/setHeaders';

const router = Router();

router.use(setHeaders);

router.use(listRouter);

export default router;
