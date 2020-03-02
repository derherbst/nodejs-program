import { Router } from 'express';
import { createUser, getUsers, updateUser, deleteUser, validateUserData } from '../controllers/users';

const userRouter = Router();

userRouter.post('/', validateUserData, createUser);
userRouter.get('/', getUsers);
userRouter.patch('/:id', validateUserData, updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;
