import { RequestHandler } from 'express';
import { v4 as uuid } from 'uuid';
import { UserType } from '../types/types';
import { User, userSchema } from '../models/user';
import { getAutoSuggestUsers, checkIfLoginAvailable } from '../helpers/helpers';
import { ValidatedRequest } from 'express-joi-validation'

const USERS: UserType['query'][] = [];

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
    const isLoginAvailable = checkIfLoginAvailable(USERS, login);
    const result = userSchema.validate(body);
    const { error } = result;

    if (error != null) {
        res.status(400).json({
            status: 'error',
            error: error,
        });
    } else {
        if (isLoginAvailable) {
            USERS.push(newUser);
            res.status(200).json({
                message: 'User was created!',
                createdUser: newUser,
            });
        } else {
            res.status(400).json({
                status: 'error',
                message: `User ${login} already exists!`,
            });
        }
        
    }
}

export const getUsers: RequestHandler = (req, res) => {
    const { loginSubstring, limit } = req.query;
    let suggestedUsers = USERS;
    if (loginSubstring && limit) {
        suggestedUsers = getAutoSuggestUsers(USERS, loginSubstring, limit);
    }
    res.json({ users: suggestedUsers });
}

export const updateUser: RequestHandler = (req, res) => {
    console.log("PARAMS", req.params);

    const userId = req.params.id;
    const newData = req.body;
    const userIndex = USERS.findIndex(user => user.id === userId);
    const isLoginAvailable = checkIfLoginAvailable(USERS, req.params.login);
    const result = userSchema.validate(newData);
    const { error } = result;

    if (error != null) {
        res.status(400).json({
            status: 'error',
            error: error,
        });
    } else {
        if (isLoginAvailable) {
            if (userIndex < 0) {
                res.status(404).json({
                    status: 'failed',
                    message: 'Could not find user!'
                });
            } else {
                USERS[userIndex] = { ...USERS[userIndex], ...newData };
                res.status(200).json({
                    message: 'Updated!',
                    updatedUser: USERS[userIndex],
                });
            }
        } else {
            res.status(400).json({
                status: 'error',
                message: `User ${req.params.login} already exists!`,
            });
        }
    }
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