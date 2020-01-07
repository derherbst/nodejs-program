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
    const isLoginAvailable = helpers_1.checkLoginExists(USERS, login);
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
    const isLoginAvailable = helpers_1.checkLoginExists(USERS, req.params.login);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwrQkFBa0M7QUFFbEMseUNBQWtEO0FBQ2xELGdEQUEyRTtBQUczRSxNQUFNLEtBQUssR0FBd0IsRUFBRSxDQUFDO0FBRXpCLFFBQUEsVUFBVSxHQUFtQixDQUFDLEdBQStCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ3JGLE1BQU0sSUFBSSxHQUFzQixHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ3pDLE1BQU0sRUFDRixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxTQUFTLEdBQ1osR0FBRyxJQUFJLENBQUM7SUFFVCxNQUFNLE1BQU0sR0FBVyxTQUFJLEVBQUUsQ0FBQztJQUM5QixNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQUksQ0FDcEIsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IsR0FBRyxFQUNILFNBQVMsQ0FDWixDQUFDO0lBQ0YsTUFBTSxnQkFBZ0IsR0FBRywwQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsTUFBTSxNQUFNLEdBQUcsaUJBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFDaEMsTUFBTSxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQztJQUU1QixJQUFJLGdCQUFnQixFQUFFO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsS0FBSyxFQUFFLEtBQUs7YUFDZixDQUFDLENBQUE7U0FDTDthQUFNO1lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMs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