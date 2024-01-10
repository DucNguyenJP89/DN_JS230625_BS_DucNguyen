import express, { Express } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import taskRouter from './routes/task.route'

dotenv.config()

const app = express();
const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())
app.use('/api/v1/tasks', taskRouter)

app.get('/', (req, res) => {
  res.send('Final exam: Typescript')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})