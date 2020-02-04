import { Router } from 'express';
import { createUser, getUsers, updateUser, deleteUser, validateUserData } from '../controllers/users';

const router = Router();

router.post('/', validateUserData, createUser);
router.get('/', getUsers);
router.patch('/:id', validateUserData, updateUser);
router.delete('/:id', deleteUser);

export default router;
