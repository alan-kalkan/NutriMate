import express from "express";
import { getUsers } from "../../controllers/users/usersController";

const router = express.Router();

router.get("/", getUsers);

export default router;
