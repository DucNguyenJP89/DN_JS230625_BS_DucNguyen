import dotenv from 'dotenv';
dotenv.config()

export default {
  HOST: process.env.DB_HOST || 'localhost',
  USER: process.env.DB_USER || 'root',
  PASSWORD: process.env.DB_PASSWORD || 'test',
  DB: process.env.DB_NAME || 'test',
  DB_PORT: process.env.DB_PORT || 3306
}