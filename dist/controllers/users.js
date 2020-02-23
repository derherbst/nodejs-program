"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../services/user");
const user_2 = require("../models/user");
const app_1 = require("../app");
exports.createUser = (req, res) => {
    const body = req.body;
    const { login, password, age, isDeleted } = body;
    app_1.logger.info('Calling createUser method with parameters');
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
            res.status(404).json({
                status: 'failed',
                message: 'Could not find user!'
            }).end();
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
        res.status(400).json({
            status: 'error',
            error: error,
        }).end();
    }
    else {
        next();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwyQ0FBK0M7QUFDL0MseUNBQTRDO0FBQzVDLGdDQUFnQztBQUVuQixRQUFBLFVBQVUsR0FBbUIsQ0FBQyxHQUErQixFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQy9FLE1BQU0sSUFBSSxHQUFzQixHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ3pDLE1BQU0sRUFDRixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxTQUFTLEVBQ1osR0FBRyxJQUFJLENBQUM7SUFFVCxZQUFNLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFFekQsa0JBQVcsQ0FBQyxVQUFVLENBQUM7UUFDbkIsS0FBSztRQUNMLFFBQVE7UUFDUixHQUFHO1FBQ0gsU0FBUztLQUNaLENBQUM7U0FDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDVCxJQUFJLElBQUksRUFBRTtZQUNOLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqQixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixXQUFXLEVBQUUsSUFBSTthQUNwQixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDWjthQUFNO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE9BQU8sRUFBRSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxrQkFBa0I7YUFDcEQsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1o7SUFDTCxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ1IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUMx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