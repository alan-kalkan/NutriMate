import express from 'express';
import { addUser, deleteUser, getUserById, getUsers, loginUser, registerUser, updateUser } from '../../controllers/users/usersController';
import { authenticateToken } from '../../middlewares/JWT';

const router = express.Router();

   // Public routes
   router.post('/register', registerUser);
   router.post('/login', loginUser);

   // Protected routes
   router.post('/addUser', authenticateToken, addUser);
   router.get('/getUsers', authenticateToken, getUsers);
   router.get('/getUserById/:id', authenticateToken, getUserById);
   router.put('/updateUser', authenticateToken, updateUser);
   router.delete('/deleteUser', authenticateToken, deleteUser);


export default router;
