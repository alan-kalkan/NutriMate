import express from 'express';
import { addUser, deleteUser, getUsers, updateUser } from '../../controllers/users/usersController';

const router = express.Router();

router.post('/addUser', addUser);

router.get('/getUsers', getUsers);

router.put('/updateUser', updateUser)

router.delete('/deleteUser', deleteUser)

export default router;
