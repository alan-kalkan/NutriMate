import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import getConnection from './config/db';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1', routes);

app.use(errorHandler);


const checkDatabaseConnection = async () => {
  console.log('Database Credentials:');
  console.log(`Host: ${process.env.DB_HOST}`);
  console.log(`User: ${process.env.DB_USER}`);
  console.log(`Password: ${process.env.DB_PASSWORD}`);
  console.log(`Database Name: ${process.env.DB_NAME}`);
  console.log(`Database URL: ${process.env.DATABASE_URL}`);
  console.log(`Port: ${process.env.DB_PORT}`);
  try {
    await getConnection();
    console.log('Connected to MySQL database');
  } catch (error: unknown) {
    console.error(`Error connecting to MySQL database: ${error}`);
    process.exit(1);
  }
};

const startServer = async () => {
  await checkDatabaseConnection();

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}

startServer();
