import { RequestHandler } from 'express';
import { ValidatedRequest } from 'express-joi-validation';
import { UserType } from '../types/types';
import { userService } from '../services/user';
import { userSchema } from '../models/user';
import { logError, logger } from '../logger/logger';

export const createUser: RequestHandler = (req: ValidatedRequest<UserType>, res) => {
    const body: UserType['query'] = req.body;
    const {
        login,
        password,
        age,
        isDeleted
    } = body;

    logger.info(`Calling createUser method with parameters: ${body}`);

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
            logError(req.method, body, `User ${req.body.login} already exists!`);
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

    logger.info(`Calling getUsers method with parameters: ${{ loginSubstring, limit }}`);

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

    logger.info(`Calling updateUser method with parameters: ${{id, updateBody}}`);

    userService.updateUser({id, updateBody})
        .then(user => {
            if(user) {
                res.status(200).json({
                    message: 'Updated!',
                    updatedUser: user,
                }).end();
            } else {
                logError(req.method, {id, updateBody}, 'Could not find user!');
                res.status(404).json({
                    status: 'failed',
                    message: 'Could not find user!',
                }).end();
            }
        })
        .catch(() => {
            res.status(500).send('Internal error')
        });
};

export const deleteUser: RequestHandler = (req, res) => {
    const userId = req.params.id;

    logger.info(`Calling deleteUser method with parameter ID: ${userId}`);

    userService.deleteUser(userId)
        .then(user => {
            if (user) {
                res.status(200).json({
                    message: 'User deleted!',
                    updatedUser: user,
                });
            } else {
                logError(req.method, userId, 'Could not find user!');
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
        logError(req.method, req.body, error);
        res.status(400).json({
            status: 'error',
            error: error,
        }).end();
    } else {
        next();
    }
};