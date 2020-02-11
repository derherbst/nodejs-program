"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../services/user");
const user_2 = require("../models/user");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwyQ0FBK0M7QUFDL0MseUNBQTRDO0FBRS9CLFFBQUEsVUFBVSxHQUFtQixDQUFDLEdBQStCLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDL0UsTUFBTSxJQUFJLEdBQXNCLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDekMsTUFBTSxFQUNGLEtBQUssRUFDTCxRQUFRLEVBQ1IsR0FBRyxFQUNILFNBQVMsRUFDWixHQUFHLElBQUksQ0FBQztJQUVULGtCQUFXLENBQUMsVUFBVSxDQUFDO1FBQ25CLEtBQUs7UUFDTCxRQUFRO1FBQ1IsR0FBRztRQUNILFNBQVM7S0FDWixDQUFDO1NBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ1QsSUFBSSxJQUFJLEVBQUU7WUFDTixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakIsT0FBTyxFQUFFLG1CQUFtQjtnQkFDNUIsV0FBVyxFQUFFLElBQUk7YUFDcEIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1o7YUFBTTtZQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNLEVBQUUsT0FBTztnQkFDZixPQUFPLEVBQUUsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssa0JBQWtCO2FBQ3BELENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNaO0lBQ0wsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNSLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDMUMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFVyxRQUFBLFFBQVEsR0FBbUIsQ0FB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