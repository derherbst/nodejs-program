import { Router } from 'express';
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/users';
import { validateUserData } from '../helpers/helpers';

const router = Router();
console.log(64564654645645);

router.post('/', validateUserData, createUser);
router.get('/', getUsers);
router.patch('/:id', validateUserData, updateUser);
router.delete('/:id', deleteUser);

export default router;
