import { Router } from 'express';
import { createValidator } from 'express-joi-validation';
import { userSchema } from './../models/user';
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/users';

const router = Router();
const validator = createValidator({
    passError: true,
});

router.post('/', createUser);
router.get('/', getUsers);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;