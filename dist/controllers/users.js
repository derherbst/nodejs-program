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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwrQkFBa0M7QUFFbEMseUNBQWtEO0FBQ2xELGdEQUFxRTtBQUdyRSxNQUFNLEtBQUssR0FBZSxFQUFFLENBQUM7QUFFaEIsUUFBQSxVQUFVLEdBQW1CLENBQUMsR0FBK0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDckYsTUFBTSxJQUFJLEdBQWEsR0FBRyxDQUFDLElBQUksQ0FBQztJQUNoQyxNQUFNLEVBQ0YsS0FBSyxFQUNMLFFBQVEsRUFDUixHQUFHLEVBQ0gsU0FBUyxHQUNaLEdBQUcsSUFBSSxDQUFDO0lBQ1QsTUFBTSxNQUFNLEdBQVcsU0FBSSxFQUFFLENBQUM7SUFDOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFJLENBQ3BCLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxTQUFTLENBQ1osQ0FBQztJQUNGLE1BQU0sZ0JBQWdCLEdBQUcsb0JBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsTUFBTSxNQUFNLEdBQUcsaUJBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFDaEMsTUFBTSxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQztJQUU1QixJQUFJLGdCQUFnQixFQUFFO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsS0FBSyxFQUFFLEtBQUs7YUFDZixDQUFDLENBQUE7U0FDTDthQUFNO1lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FB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