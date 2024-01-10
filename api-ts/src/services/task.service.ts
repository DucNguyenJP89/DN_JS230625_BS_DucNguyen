import { Request, Response } from 'express'
import connection from '../db/index'
import ITask from '../interfaces/task.interface'
import mysql from 'mysql2'

export default class TaskService {
  async getAll():Promise<ITask[]> {
    const query: string = 'SELECT * from tasks'
    const data:any = await new Promise((resolve, reject) => {
      connection.query(query, (err, res) => {
        if (err) reject(err)
        resolve(res)
      })
    })
    return data
  }

  async getOne(id:number):Promise<ITask> {
    let query:string = 'SELECT * FROM tasks WHERE id=?'
    query = mysql.format(query, id)
    const data:any = await new Promise((resolve, reject) => {
      connection.query(query, (err, res) => {
        if (err) reject(err)
        resolve(res)
      })
    })
    return data
  }

  async createTask(data: ITask) {
    let query:string = 'INSERT INTO tasks SET ?'
    query = mysql.format(query, data)
    return new Promise((resolve, reject) => {
      connection.query(query, (err, res) => {
        if (err) reject(err)
        resolve(res)
      })
    })
  }

  async updateTask(data:ITask, id:number) {
    let query:string = 'UPDATE tasks SET ? WHERE id=?'
    query = mysql.format(query, [data, id])
    return new Promise((resolve, reject) => {
      connection.query(query, (err, res) => {
        if (err) reject(err)
        resolve(res)
      })
    })
  }

  async deleteTask(id:number) {
    let query:string = 'DELETE FROM tasks WHERE id=?'
    query = mysql.format(query, id)
    return new Promise((resolve, reject) => {
      connection.query(query, (err, res) => {
        if (err) reject(err)
        resolve(res)
      })
    })
  }
}