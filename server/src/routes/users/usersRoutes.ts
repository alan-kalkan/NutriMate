import express from 'express';
import { addUser, deleteUser, getUserById, getUsers, loginUser, registerUser, updateUser } from '../../controllers/users/usersController';

const router = express.Router();

router.post('/addUser', addUser);

router.post('/registerUser', registerUser);

router.get('/getUsers', getUsers);

router.post('/loginUser', loginUser);

router.get('/getUserById/:id', getUserById);

router.put('/updateUser', updateUser)

router.delete('/deleteUser', deleteUser)

export default router;
