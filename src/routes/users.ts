import { Router } from 'express';
import {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
    validateUserData,
    login,
    checkToken,
} from '../controllers/users';

const userRouter = Router();

userRouter.post('/', validateUserData, checkToken, createUser);
userRouter.post('/login', login);
userRouter.get('/', checkToken, getUsers);
userRouter.patch('/:id', validateUserData, checkToken, updateUser);
userRouter.delete('/:id', checkToken, deleteUser);

export default userRouter;
