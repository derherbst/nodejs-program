"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../services/user");
const user_2 = require("../models/user");
const logger_1 = require("../logger/logger");
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
            res.status(404).json({
                status: 'failed',
                message: 'Could not find user!',
            }).end();
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
            res.status(404).json({
                status: 'failed',
                message: 'Could not find user!'
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwyQ0FBK0M7QUFDL0MseUNBQTRDO0FBQzVDLDZDQUFvRDtBQUV2QyxRQUFBLFVBQVUsR0FBbUIsQ0FBQyxHQUErQixFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQy9FLE1BQU0sSUFBSSxHQUFzQixHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ3pDLE1BQU0sRUFDRixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxTQUFTLEVBQ1osR0FBRyxJQUFJLENBQUM7SUFFVCxlQUFNLENBQUMsSUFBSSxDQUFDLDhDQUE4QyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRWxFLGtCQUFXLENBQUMsVUFBVSxDQUFDO1FBQ25CLEtBQUs7UUFDTCxRQUFRO1FBQ1IsR0FBRztRQUNILFNBQVM7S0FDWixDQUFDO1NBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ1QsSUFBSSxJQUFJLEVBQUU7WUFDTixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakIsT0FBTyxFQUFFLG1CQUFtQjtnQkFDNUIsV0FBVyxFQUFFLElBQUk7YUFDcEIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1o7YUFBTTtZQUNILGlCQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssa0JBQWtCLENBQUMsQ0FBQztZQUNyRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsT0FBTyxFQUFFLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLGtCQUFrQjthQUNwRCxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDWjtJQUNMLENB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