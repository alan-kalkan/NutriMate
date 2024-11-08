import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db";

dotenv.config();

const app = express();

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
