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
    const isLoginAvailable = helpers_1.checkLoginExists(USERS, login);
    const result = user_1.userSchema.validate(body);
    const { error } = result;
    if (isLoginAvailable) {
        if (error != null) {
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
exports.getUsers = (req, res) => {
    const { loginSubstring, limit } = req.query;
    let suggestedUsers = USERS;
    if (loginSubstring && limit) {
        suggestedUsers = helpers_1.getAutoSuggestUsers(USERS, loginSubstring, limit);
    }
    res.json({ users: suggestedUsers });
};
exports.updateUser = (req, res) => {
    console.log("PARAMS", req.params);
    const userId = req.params.id;
    const newData = req.body;
    const userIndex = USERS.findIndex(user => user.id === userId);
    const isLoginAvailable = helpers_1.checkLoginExists(USERS, req.params.login);
    const result = user_1.userSchema.validate(newData);
    const { error } = result;
    if (isLoginAvailable) {
        if (error != null) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBa0M7QUFFbEMseUNBQWtEO0FBQ2xELGdEQUEyRTtBQUczRSxNQUFNLEtBQUssR0FBd0IsRUFBRSxDQUFDO0FBRXpCLFFBQUEsVUFBVSxHQUFtQixDQUFDLEdBQStCLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDL0UsTUFBTSxJQUFJLEdBQXNCLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDekMsTUFBTSxFQUNGLEtBQUssRUFDTCxRQUFRLEVBQ1IsR0FBRyxFQUNILFNBQVMsR0FDWixHQUFHLElBQUksQ0FBQztJQUVULE1BQU0sTUFBTSxHQUFXLFNBQUksRUFBRSxDQUFDO0lBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBSSxDQUNwQixNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsRUFDUixHQUFHLEVBQ0gsU0FBUyxDQUNaLENBQUM7SUFDRixNQUFNLGdCQUFnQixHQUFHLDBCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RCxNQUFNLE1BQU0sR0FBRyxpQkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBRXpCLElBQUksZ0JBQWdCLEVBQUU7UUFDbEIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLEtBQUssRUFBRSxLQUFLO2FBQ2YsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7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