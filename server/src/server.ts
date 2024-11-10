import dotenv from "dotenv";
import express from "express";
import db from "./config/db";
import bodyParser from "body-parser";
import usersRoutes from "./middlewares/users/usersRoutes";

dotenv.config();

const app = express();

app.use(bodyParser.json());

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

app.use("/users", usersRoutes);
console.log("test");
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
