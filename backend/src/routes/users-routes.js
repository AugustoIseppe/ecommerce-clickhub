import express from 'express';
import { getUsers, getUsersWithAddress, createUser, deleteUser, updateUser, getUserByEmail } from '../controllers/users-controller.js';
import { upload } from '../multer-config-user.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users-with-address', getUsersWithAddress);
router.post('/users', upload.single("profile_picture"), createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:user_id', updateUser);
router.get('/users/:email', getUserByEmail);

export default router;