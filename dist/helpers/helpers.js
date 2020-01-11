"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const users_1 = require("../data/users");
exports.getAutoSuggestUsers = (data, loginSubstring, limit) => {
    const sortedByLoginData = data.sort((a, b) => a.login.toLowerCase().localeCompare(b.login.toLowerCase()));
    const filteredByLoginSubstring = sortedByLoginData.filter((user) => user.login.includes(loginSubstring));
    const limetedUsersCollection = filteredByLoginSubstring.slice(0, limit);
    return limetedUsersCollection;
};
exports.checkIfLoginAvailable = (data, login) => {
    if (data && data.length === 0) {
        return true;
    }
    const result = data.some(user => user.login === login);
    return !result;
};
exports.validateUserData = (req, res, next) => {
    const isLoginAvailable = exports.checkIfLoginAvailable(users_1.USERS, req.body.login);
    const result = user_1.userSchema.validate(req.body);
    const { error } = result;
    if (error != null) {
        res.status(400).json({
            status: 'error',
            error: error,
        }).end();
        ;
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
            ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBNEM7QUFDNUMseUNBQXNDO0FBRXpCLFFBQUEsbUJBQW1CLEdBQUcsQ0FBQyxJQUEwQixFQUFFLGNBQXNCLEVBQUUsS0FBYSxFQUFFLEVBQUU7SUFDckcsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUcsTUFBTSx3QkFBd0IsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDekcsTUFBTSxzQkFBc0IsR0FBRyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXhFLE9BQU8sc0JBQXNCLENBQUM7QUFDbEMsQ0FBQyxDQUFBO0FBRVksUUFBQSxxQkFBcUIsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQVcsRUFBRTtJQUMxRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUMzQixPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7SUFFdkQsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUNuQixDQUFDLENBQUE7QUFFWSxRQUFBLGdCQUFnQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQVEsRUFBRTtJQUNyRCxNQUFNLGdCQUFnQixHQUFHLDZCQUFxQixDQUFDLGFBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RFLE1BQU0sTUFBTSxHQUFHLGlCQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBRXpCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNmLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxPQUFPO1lBQ2YsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFBQSxDQUFDO0tBQ2I7U0FBTTtRQUNILElBQUksZ0JBQWdCLEVBQUU7WUFDbEIsSUFBSSxFQUFFLENBQUM7U0FDVjthQUFNO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE9BQU8sRUFBRSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxrQkFBa0I7YUFDcEQsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQUEsQ0FBQztTQUNiO0tBQ0o7QUFDTCxDQUFDLENBQUM7QUFFVyxRQUFBLDhCQUE4QixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUM3RCxNQUFNLFNBQVMsR0FBRyxhQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sT0FBTyxtQ0FBUSxhQUFLLENBQUMsU0FBUyxDQUFDLEdBQUssR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDO0lBRXJELElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtRQUNmLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLE9BQU8sRUFBRSxzQkFBc0I7U0FDbEMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ1o7U0FBTTtRQUNILEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ25CLElBQUksRUFBRSxDQUFDO0tBQ1Y7QUFDTCxDQUFDLENBQUEifQ==