import { RequestHandler } from 'express';
import { ValidatedRequest } from 'express-joi-validation';
import { UserType } from '../types/types';
import { userService } from '../services/user';
import { userSchema } from '../models/user';

export const createUser: RequestHandler = (req: ValidatedRequest<UserType>, res) => {
    const body: UserType['query'] = req.body;
    const {
        login,
        password,
        age,
        isDeleted
    } = body;

    userService.createUser({
        login,
        password,
        age,
        isDeleted
    })
    .then(user => {
        if (user) {
            res.status(200).json({
                message: 'User was created!',
                createdUser: user,
            }).end();
        } else {
            res.status(400).json({
                status: 'error',
                message: `User ${req.body.login} already exists!`,
            }).end();
        }
    })
    .catch(() => {
        res.status(500).send('Internal error')
    });
};

export const getUsers: RequestHandler = (req, res) => {
    const { loginSubstring, limit } = req.query;

    userService.getUsers({limit, loginSubstring})
        .then(suggestedUsers => {
            res.json({ users: suggestedUsers });
        })
        .catch(() => {
            res.status(500).send('Internal error')
        });
};

export const updateUser: RequestHandler = (req, res) => {
    const { params: { id }, body: updateBody } = req;

    userService.updateUser({id, updateBody})
        .then(user => {
            if(user) {
                res.status(200).json({
                    message: 'Updated!',
                    updatedUser: user,
                }).end();
            } else {
                res.status(404).json({
                    status: 'failed',
                    message: 'Could not find user!'
                }).end();
            }
        })
        .catch(() => {
            res.status(500).send('Internal error')
        });
    
};

export const deleteUser: RequestHandler = (req, res) => {
    const userId = req.params.id;

    userService.deleteUser(userId)
        .then(user => {
            if (user) {
                res.status(200).json({
                    message: 'User deleted!',
                    updatedUser: user,
                });
            } else {
                res.status(404).json({
                    status: 'failed',
                    message: 'Could not find user!'
                });
            }
        })
        .catch(() => {
            res.status(500).send('Internal error')
        });
};

export const validateUserData = (req, res, next): void => {
    const result = userSchema.validate(req.body);
    const { error } = result;

    if (error != null) {
        res.status(400).json({
            status: 'error',
            error: error,
        }).end();
    } else {
        next();
    }
};