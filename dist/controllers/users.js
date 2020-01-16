"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const user_1 = require("../models/user");
const helpers_1 = require("../helpers/helpers");
const users_1 = require("../data/users");
const user_2 = require("./../models/user");
exports.createUser = (req, res) => {
    const body = req.body;
    const { login, password, age, isDeleted, } = body;
    const userId = uuid_1.v4();
    const newUser = new user_1.User(userId, login, password, age, isDeleted);
    users_1.USERS.push(newUser);
    res.status(200).json({
        message: 'User was created!',
        createdUser: newUser,
    }).end();
};
exports.getUsers = (req, res) => {
    const { loginSubstring, limit } = req.query;
    const suggestedUsers = (loginSubstring && limit)
        ? helpers_1.getAutoSuggestUsers(users_1.USERS, loginSubstring, limit)
        : users_1.USERS;
    res.json({ users: suggestedUsers });
};
exports.updateUser = (req, res) => {
    res.status(200).json({
        message: 'Updated!',
        updatedUser: req.body,
    }).end();
};
exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    const userIndex = users_1.USERS.findIndex(user => user.id === userId);
    if (userIndex < 0) {
        res.status(404).json({
            status: 'failed',
            message: 'Could not find user!'
        });
    }
    else {
        users_1.USERS[userIndex] = Object.assign(Object.assign({}, users_1.USERS[userIndex]), { isDeleted: true });
        res.status(200).json({
            message: 'User deleted!',
            updatedUser: users_1.USERS[userIndex],
        });
    }
};
exports.validateUserData = (req, res, next) => {
    const isLoginAvailable = helpers_1.checkIfLoginAvailable(users_1.USERS, req.body.login);
    const result = user_2.userSchema.validate(req.body);
    const { error } = result;
    if (error != null) {
        res.status(400).json({
            status: 'error',
            error: error,
        }).end();
    }
    else {
        if (isLoginAvailable) {
            next();
        }
        else {
            res.status(400).json({
                status: 'error',
                message: `User ${req.body.login} already exists!`,
            }).end();
        }
    }
};
exports.prepareDataForUpdateValidation = (req, res, next) => {
    const userIndex = users_1.USERS.findIndex(user => user.id === req.params.id);
    const newData = Object.assign(Object.assign({}, users_1.USERS[userIndex]), req.body);
    if (userIndex < 0) {
        res.status(404).json({
            status: 'failed',
            message: 'Could not find user!'
        }).end();
    }
    else {
        req.body = newData;
        next();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBa0M7QUFHbEMseUNBQXNDO0FBQ3RDLGdEQUFnRjtBQUNoRix5Q0FBc0M7QUFDdEMsMkNBQThDO0FBRWpDLFFBQUEsVUFBVSxHQUFtQixDQUFDLEdBQStCLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDL0UsTUFBTSxJQUFJLEdBQXNCLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDekMsTUFBTSxFQUNGLEtBQUssRUFDTCxRQUFRLEVBQ1IsR0FBRyxFQUNILFNBQVMsR0FDWixHQUFHLElBQUksQ0FBQztJQUNULE1BQU0sTUFBTSxHQUFXLFNBQUksRUFBRSxDQUFDO0lBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBSSxDQUNwQixNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsRUFDUixHQUFHLEVBQ0gsU0FBUyxDQUNaLENBQUM7SUFFRixhQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pCLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsV0FBVyxFQUFFLE9BQU87S0FDdkIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRVcsUUFBQSxRQUFRLEdBQW1CLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2pELE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUM1QyxNQUFNLGNBQWMsR0FBRyxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUM7UUFDNUMsQ0FBQyxDQUFDLDZCQUFtQixDQUFDLGFBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxhQUFLLENBQUM7SUFF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