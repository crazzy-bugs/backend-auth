import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'
import routes from './routes'
import morganMiddleware from './middlewares/logger';
import errorHandler from './middlewares/errorHandler';

dotenv.config()



const app = express()

// morgan for logging requests
app.use(morganMiddleware);

app.use(express.json())

connectDB()

app.use('/api', routes)

app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
