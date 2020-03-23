"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../services/user");
const user_2 = require("../models/user");
const logger_1 = require("../logger/logger");
const helpers_1 = require("../helpers/helpers");
exports.createUser = (req, res) => {
    const body = req.body;
    const { login, password, age, isDeleted, } = body;
    logger_1.logger.info(`Calling createUser method with parameters: ${body}`);
    user_1.userService.createUser({
        login,
        password,
        age,
        isDeleted,
    })
        .then(user => {
        if (user) {
            res.status(200).json({
                message: 'User was created!',
                createdUser: user,
            }).end();
        }
        else {
            logger_1.logError(req.method, body, `User ${req.body.login} already exists!`);
            res.status(400).json({
                status: 'error',
                message: `User ${req.body.login} already exists!`,
            }).end();
        }
    })
        .catch(() => {
        helpers_1.internalError(res);
    });
};
exports.getUsers = (req, res) => {
    const { loginSubstring, limit } = req.query;
    logger_1.logger.info(`Calling getUsers method with parameters: ${{ loginSubstring, limit }}`);
    user_1.userService.getUsers({ limit, loginSubstring })
        .then(suggestedUsers => {
        res.json({ users: suggestedUsers });
    })
        .catch(() => {
        helpers_1.internalError(res);
    });
};
exports.updateUser = (req, res) => {
    const { params: { id }, body: updateBody } = req;
    logger_1.logger.info(`Calling updateUser method with parameters: ${{ id, updateBody }}`);
    user_1.userService.updateUser({ id, updateBody })
        .then(user => {
        if (user) {
            res.status(200).json({
                message: 'Updated!',
                updatedUser: user,
            }).end();
        }
        else {
            logger_1.logError(req.method, { id, updateBody }, 'Could not find user!');
            res.status(404).json(helpers_1.failedSearchResponse('user')).end();
        }
    })
        .catch(() => {
        helpers_1.internalError(res);
    });
};
exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    logger_1.logger.info(`Calling deleteUser method with parameter ID: ${userId}`);
    user_1.userService.deleteUser(userId)
        .then(user => {
        if (user) {
            res.status(200).json({
                message: 'User deleted!',
                updatedUser: user,
            });
        }
        else {
            logger_1.logError(req.method, userId, 'Could not find user!');
            res.status(404).json(helpers_1.failedSearchResponse('user'));
        }
    })
        .catch(() => {
        helpers_1.internalError(res);
    });
};
exports.validateUserData = (req, res, next) => {
    const result = user_2.userSchema.validate(req.body);
    const { error } = result;
    if (error != null) {
        logger_1.logError(req.method, req.body, error);
        res.status(400).json({
            status: 'error',
            error: error,
        }).end();
    }
    else {
        next();
    }
};
exports.login = (req, res, next) => {
    const { login, password } = req.body;
    logger_1.logger.info(`User ${login} is trying to log in`);
    user_1.userService.authenticate({ login, password })
        .then(token => {
        if (token) {
            res.status(200).json({
                message: 'User logged in!',
                token,
            });
            next();
        }
        else {
            logger_1.logError(req.method, req.body, `Bad username/password combination: ${login} and ${password}.`);
            res.status(400).json({
                status: 'error',
                message: `Bad username/password combination.`,
            }).end();
        }
    })
        .catch(() => {
        helpers_1.internalError(res);
    });
};
exports.checkToken = (req, res, next) => {
    const token = req.headers['http-authorization'];
    if (token) {
        const response = user_1.userService.checkToken(token);
        if (response) {
            res.status(403).json({
                status: 'error',
                message: 'Failed to authenticate token.',
            });
        }
        else {
            next();
        }
    }
    else {
        res.status(401).send('No token provided.');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwyQ0FBK0M7QUFDL0MseUNBQTRDO0FBQzVDLDZDQUFvRDtBQUNwRCxnREFBeUU7QUFFNUQsUUFBQSxVQUFVLEdBQW1CLENBQUMsR0FBK0IsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMvRSxNQUFNLElBQUksR0FBc0IsR0FBRyxDQUFDLElBQUksQ0FBQztJQUN6QyxNQUFNLEVBQ0YsS0FBSyxFQUNMLFFBQVEsRUFDUixHQUFHLEVBQ0gsU0FBUyxHQUNaLEdBQUcsSUFBSSxDQUFDO0lBRVQsZUFBTSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUVsRSxrQkFBVyxDQUFDLFVBQVUsQ0FBQztRQUNuQixLQUFLO1FBQ0wsUUFBUTtRQUNSLEdBQUc7UUFDSCxTQUFTO0tBQ1osQ0FBQztTQUNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNULElBQUksSUFBSSxFQUFFO1lBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRSxtQkFBbUI7Z0JBQzVCLFdBQVcsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNaO2FBQU07WUFDSCxpQkFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLGtCQUFrQixDQUFDLENBQUM7WUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE9BQU8sRUFBRSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxrQkFBa0I7YUFDcEQsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFD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