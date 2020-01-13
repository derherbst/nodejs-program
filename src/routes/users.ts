import { Router } from 'express';
import { createUser, getUsers, updateUser, deleteUser, validateUserData, prepareDataForUpdateValidation } from '../controllers/users';

const router = Router();

router.post('/', validateUserData, createUser);
router.get('/', getUsers);
router.patch(
    '/:id',
    prepareDataForUpdateValidation,
    validateUserData,
    updateUser
);
router.delete('/:id', deleteUser);

export default router;
