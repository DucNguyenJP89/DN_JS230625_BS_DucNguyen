import { Request, Response } from 'express'
import TaskService from '../services/task.service'

const taskService = new TaskService()

export default class TaskController {
  async getAll(req: Request, res: Response) {
    const data = await taskService.getAll()
    res.json(data)
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params
    const data = await taskService.getOne(Number(id))
    res.json(data)
  }

  async createTask(req: Request, res: Response) {
    const data = await taskService.createTask(req.body)
    res.json({
      message: 'Task created successfully',
      result: data
    })
  }

  async updateTask(req: Request, res: Response) {
    const { id } = req.params
    const data = await taskService.updateTask(req.body, Number(id))
    res.json({
      message: 'Task updated successfully',
      data
    })
  }

  async deleteTask(req: Request, res: Response) {
    const { id } = req.params
    const data = await taskService.deleteTask(Number(id))
    res.json({
      message: 'Task deleted successfully',
      data
    })
  }
}