"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const user_1 = require("../models/user");
const helpers_1 = require("../helpers/helpers");
const USERS = [];
exports.createUser = (req, res) => {
    const body = req.body;
    const { login, password, age, isDeleted, } = body;
    const userId = uuid_1.v4();
    const newUser = new user_1.User(userId, login, password, age, isDeleted);
    const isLoginAvailable = helpers_1.checkIfLoginAvailable(USERS, login);
    const result = user_1.userSchema.validate(body);
    const { error } = result;
    if (error != null) {
        res.status(400).json({
            status: 'error',
            error: error,
        });
    }
    else {
        if (isLoginAvailable) {
            USERS.push(newUser);
            res.status(200).json({
                message: 'User was created!',
                createdUser: newUser,
            });
        }
        else {
            res.status(400).json({
                status: 'error',
                message: `User ${login} already exists!`,
            });
        }
    }
};
exports.getUsers = (req, res) => {
    const { loginSubstring, limit } = req.query;
    const suggestedUsers = (loginSubstring && limit)
        ? helpers_1.getAutoSuggestUsers(USERS, loginSubstring, limit)
        : USERS;
    res.json({ users: suggestedUsers });
};
exports.updateUser = (req, res) => {
    console.log("PARAMS", req.params);
    const userId = req.params.id;
    const newData = req.body;
    const userIndex = USERS.findIndex(user => user.id === userId);
    const isLoginAvailable = helpers_1.checkIfLoginAvailable(USERS, req.params.login);
    const result = user_1.userSchema.validate(newData);
    const { error } = result;
    if (error != null) {
        res.status(400).json({
            status: 'error',
            error: error,
        });
    }
    else {
        if (isLoginAvailable) {
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
        else {
            res.status(400).json({
                status: 'error',
                message: `User ${req.params.login} already exists!`,
            });
        }
    }
};
exports.deleteUser = (req, res) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBa0M7QUFFbEMseUNBQWtEO0FBQ2xELGdEQUFnRjtBQUdoRixNQUFNLEtBQUssR0FBd0IsRUFBRSxDQUFDO0FBRXpCLFFBQUEsVUFBVSxHQUFtQixDQUFDLEdBQStCLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDL0UsTUFBTSxJQUFJLEdBQXNCLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDekMsTUFBTSxFQUNGLEtBQUssRUFDTCxRQUFRLEVBQ1IsR0FBRyxFQUNILFNBQVMsR0FDWixHQUFHLElBQUksQ0FBQztJQUVULE1BQU0sTUFBTSxHQUFXLFNBQUksRUFBRSxDQUFDO0lBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBSSxDQUNwQixNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsRUFDUixHQUFHLEVBQ0gsU0FBUyxDQUNaLENBQUM7SUFDRixNQUFNLGdCQUFnQixHQUFHLCtCQUFxQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RCxNQUFNLE1BQU0sR0FBRyxpQkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBRXpCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNmLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxPQUFPO1lBQ2YsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUM7S0FDTjtTQUFNO1FBQ0gsSUFBSSxnQkFBZ0IsRUFBRTtZQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dC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