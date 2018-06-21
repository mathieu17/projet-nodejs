import { Router } from 'express';

import find from './middleware/find';
import findOne from './middleware/findOne';
import createOne from './middleware/createOne';
import deleteOne from './middleware/deleteOne';
import updateOne from './middleware/updateOne';

import findTasks from './middleware/findTasks';
import createOneTask from './middleware/createOneTask';
import findOneTask from './middleware/findOneTask';
import updateOneTask from './middleware/updateOneTask';
import deleteOneTask from './middleware/deleteOneTask';

const router = Router();

// Lists
router.get('/lists', find);
router.post('/lists', createOne);

// A list
router.get('/lists/:id', findOne);
router.delete('/lists/:id', deleteOne);
router.patch('/lists/:id', updateOne);

// Tasks
router.get('/lists/:listId/tasks', findTasks);
router.post('/lists/:listId/tasks', createOneTask);

// A Task
router.get('/lists/:listId/tasks/:taskId', findOneTask);
router.patch('/lists/:listId/tasks/:taskId', updateOneTask);
router.delete('/lists/:listId/tasks/:taskId', deleteOneTask);

export default router;
