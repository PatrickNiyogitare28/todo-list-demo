import express from 'express';
import { deleteTaskById, getAllTasks, getById, saveTask, updateTask } from '../controllers/task.controller';

const router = express.Router();

router.post('/', saveTask);
router.get('/', getAllTasks);
router.get('/:id', getById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTaskById);

export default router;