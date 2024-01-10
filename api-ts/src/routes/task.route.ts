import { Router } from 'express'
import TaskController from '../controllers/task.controller'

const router = Router()
const taskController = new TaskController()

router.get('/', taskController.getAll)
router.get('/:id', taskController.getOne)
router.post('/', taskController.createTask)
router.put('/:id', taskController.updateTask)
router.delete('/:id', taskController.deleteTask)

export default router