"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../services/user");
const user_2 = require("../models/user");
const helpers_1 = require("../helpers/helpers");
exports.createUser = (req, res) => {
    const body = req.body;
    const { login, password, age, isDeleted } = body;
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
    user_1.userService.updateUser({ id, updateBody })
        .then(user => {
        if (user) {
            res.status(200).json({
                message: 'Updated!',
                updatedUser: user,
            }).end();
        }
        else {
            res.status(404).json(helpers_1.failedSearchResponse('user')).end();
        }
    })
        .catch(() => {
        res.status(500).send('Internal error');
    });
};
exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    user_1.userService.deleteUser(userId)
        .then(user => {
        if (user) {
            res.status(200).json({
                message: 'User deleted!',
                updatedUser: user,
            });
        }
        else {
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
        res.status(400).json({
            status: 'error',
            error: error,
        }).end();
    }
    else {
        next();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwyQ0FBK0M7QUFDL0MseUNBQTRDO0FBQzVDLGdEQUEwRDtBQUU3QyxRQUFBLFVBQVUsR0FBbUIsQ0FBQyxHQUErQixFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQy9FLE1BQU0sSUFBSSxHQUFzQixHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ3pDLE1BQU0sRUFDRixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxTQUFTLEVBQ1osR0FBRyxJQUFJLENBQUM7SUFFVCxrQkFBVyxDQUFDLFVBQVUsQ0FBQztRQUNuQixLQUFLO1FBQ0wsUUFBUTtRQUNSLEdBQUc7UUFDSCxTQUFTO0tBQ1osQ0FBQztTQUNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNULElBQUksSUFBSSxFQUFFO1lBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRSxtQkFBbUI7Z0JBQzVCLFdBQVcsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNaO2FBQU07WUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsT0FBTyxFQUFFLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLGtCQUFrQjthQUNwRCxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDWjtJQUNMLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDUixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRVcsUUFBQSxR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