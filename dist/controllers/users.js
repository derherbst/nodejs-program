"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const user_1 = require("../models/user");
const helpers_1 = require("../helpers/helpers");
const USERS = [];
exports.createUser = (req, res, next) => {
    const body = req.body;
    const { login, password, age, isDeleted, } = body;
    const userId = uuid_1.v4();
    const newUser = new user_1.User(userId, login, password, age, isDeleted);
    const isLoginAvailable = helpers_1.checkLogin(USERS, login);
    const result = user_1.userSchema.validate(body);
    const { value, error } = result;
    const valid = error == null;
    if (isLoginAvailable) {
        if (!valid) {
            res.status(400).json({
                status: 'error',
                error: error,
            });
        }
        else {
            USERS.push(newUser);
            res.status(200).json({
                message: 'User was created!',
                createdUser: newUser,
            });
        }
    }
    else {
        res.status(400).json({
            status: 'error',
            message: `User ${login} already exists!`,
        });
    }
};
exports.getUsers = (req, res, next) => {
    const { loginSubstring, limit } = req.query;
    let suggestedUsers = USERS;
    if (loginSubstring && limit) {
        suggestedUsers = helpers_1.getAutoSuggestUsers(USERS, loginSubstring, limit);
    }
    res.json({ users: suggestedUsers });
};
exports.updateUser = (req, res, next) => {
    const userId = req.params.id;
    const newData = req.body;
    const userIndex = USERS.findIndex(user => user.id === userId);
    const isLoginAvailable = helpers_1.checkLogin(USERS, req.params.login);
    const result = user_1.userSchema.validate(newData);
    const { value, error } = result;
    const valid = error == null;
    if (isLoginAvailable) {
        if (!valid) {
            res.status(400).json({
                status: 'error',
                error: error,
            });
        }
        else {
            if (userIndex < 0) {
                res.status(404).json({
                    status: 'failed',
                    message: 'Could not find user!'
                });
            }
            else {
                USERS[userIndex] = Object.assign(Object.assign({}, USERS[userIndex]), newData);
                res.status(200).json({
                    message: 'Updated!',
                    updatedUser: USERS[userIndex],
                });
            }
        }
    }
    else {
        res.status(400).json({
            status: 'error',
            message: `User ${req.params.login} already exists!`,
        });
    }
};
exports.deleteUser = (req, res, next) => {
    const userId = req.params.id;
    const userIndex = USERS.findIndex(user => user.id === userId);
    if (userIndex < 0) {
        res.status(404).json({
            status: 'failed',
            message: 'Could not find user!'
        });
    }
    else {
        USERS[userIndex] = Object.assign(Object.assign({}, USERS[userIndex]), { isDeleted: true });
        res.status(200).json({
            message: 'User deleted!',
            updatedUser: USERS[userIndex],
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwrQkFBa0M7QUFFbEMseUNBQWtEO0FBQ2xELGdEQUFxRTtBQUdyRSxNQUFNLEtBQUssR0FBd0IsRUFBRSxDQUFDO0FBRXpCLFFBQUEsVUFBVSxHQUFtQixDQUFDLEdBQStCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ3JGLE1BQU0sSUFBSSxHQUFzQixHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ3pDLE1BQU0sRUFDRixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxTQUFTLEdBQ1osR0FBRyxJQUFJLENBQUM7SUFFVCxNQUFNLE1BQU0sR0FBVyxTQUFJLEVBQUUsQ0FBQztJQUM5QixNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQUksQ0FDcEIsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IsR0FBRyxFQUNILFNBQVMsQ0FDWixDQUFDO0lBQ0YsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRCxNQUFNLE1BQU0sR0FBRyxpQkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxNQUFNLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDO0lBRTVCLElBQUksZ0JBQWdCLEVBQUU7UUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNLEVBQUUsT0FBTztnQkFDZixLQUFLLEVBQUUsS0FBSzthQUNmLENBQUMsQ0FBQTtTQUNMO2FBQU07WUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxD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