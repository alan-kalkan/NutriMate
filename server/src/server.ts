import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import getConnection from './config/db';

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1', routes);

const checkDatabaseConnection = async () => {
  try {
    await getConnection();
    console.log('Connected to MySQL database');
  } catch (error: any) {
    console.error(`Error connecting to MySQL database: ${error.message}`);
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
