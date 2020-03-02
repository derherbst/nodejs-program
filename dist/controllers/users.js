"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../services/user");
const user_2 = require("../models/user");
const logger_1 = require("../logger/logger");
const helpers_1 = require("../helpers/helpers");
exports.createUser = (req, res) => {
    const body = req.body;
    const { login, password, age, isDeleted } = body;
    logger_1.logger.info(`Calling createUser method with parameters: ${body}`);
    user_1.userService.createUser({
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
        res.status(500).send('Internal error');
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
        res.status(500).send('Internal error');
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
        res.status(500).send('Internal error');
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
        res.status(500).send('Internal error');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwyQ0FBK0M7QUFDL0MseUNBQTRDO0FBQzVDLDZDQUFvRDtBQUNwRCxnREFBMEQ7QUFFN0MsUUFBQSxVQUFVLEdBQW1CLENBQUMsR0FBK0IsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMvRSxNQUFNLElBQUksR0FBc0IsR0FBRyxDQUFDLElBQUksQ0FBQztJQUN6QyxNQUFNLEVBQ0YsS0FBSyxFQUNMLFFBQVEsRUFDUixHQUFHLEVBQ0gsU0FBUyxFQUNaLEdBQUcsSUFBSSxDQUFDO0lBRVQsZUFBTSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUVsRSxrQkFBVyxDQUFDLFVBQVUsQ0FBQztRQUNuQixLQUFLO1FBQ0wsUUFBUTtRQUNSLEdBQUc7UUFDSCxTQUFTO0tBQ1osQ0FBQztTQUNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNULElBQUksSUFBSSxFQUFFO1lBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRSxtQkFBbUI7Z0JBQzVCLFdBQVcsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNaO2FBQU07WUFDSCxpQkFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLGtCQUFrQixDQUFDLENBQUM7WUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE9BQU8sRUFBRSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxrQkFBa0I7YUFDcEQsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFD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