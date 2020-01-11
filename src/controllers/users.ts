import { RequestHandler } from 'express';
import { v4 as uuid } from 'uuid';
import { ValidatedRequest } from 'express-joi-validation';
import { UserType } from '../types/types';
import { User } from '../models/user';
import { getAutoSuggestUsers } from '../helpers/helpers';
import { USERS } from '../data/users';

export const createUser: RequestHandler = (req: ValidatedRequest<UserType>, res) => {
    const body: UserType['query'] = req.body;
    const {
        login,
        password,
        age,
        isDeleted,
    } = body;
    const userId: string = uuid();
    const newUser = new User(
        userId,
        login,
        password,
        age,
        isDeleted
    );

    USERS.push(newUser);
    res.status(200).json({
        message: 'User was created!',
        createdUser: newUser,
    }).end();
}

export const getUsers: RequestHandler = (req, res) => {
    const { loginSubstring, limit } = req.query;
    const suggestedUsers = (loginSubstring && limit)
        ? getAutoSuggestUsers(USERS, loginSubstring, limit)
        : USERS;

    res.json({ users: suggestedUsers });
}

export const updateUser: RequestHandler = (req, res) => {
    res.status(200).json({
        message: 'Updated!',
        updatedUser: req.body,
    }).end();
}

export const deleteUser: RequestHandler = (req, res) => {
    const userId = req.params.id;
    const userIndex = USERS.findIndex(user => user.id === userId);

    if (userIndex < 0) {
        res.status(404).json({
            status: 'failed',
            message: 'Could not find user!'
        });
    } else {
        USERS[userIndex] = { ...USERS[userIndex], isDeleted: true };
        res.status(200).json({
            message: 'User deleted!',
            updatedUser: USERS[userIndex],
        });
    }
}