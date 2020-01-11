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
    console.log("USERS", users_1.USERS);
    console.log("PARAMS", req.params);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBNEM7QUFDNUMseUNBQXNDO0FBRXpCLFFBQUEsbUJBQW1CLEdBQUcsQ0FBQyxJQUEwQixFQUFFLGNBQXNCLEVBQUUsS0FBYSxFQUFFLEVBQUU7SUFDckcsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUcsTUFBTSx3QkFBd0IsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDekcsTUFBTSxzQkFBc0IsR0FBRyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXhFLE9BQU8sc0JBQXNCLENBQUM7QUFDbEMsQ0FBQyxDQUFBO0FBRVksUUFBQSxxQkFBcUIsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQVcsRUFBRTtJQUMxRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUMzQixPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7SUFFdkQsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUNuQixDQUFDLENBQUE7QUFFWSxRQUFBLGdCQUFnQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQVEsRUFBRTtJQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxhQUFLLENBQUMsQ0FBQztJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsTUFBTSxnQkFBZ0IsR0FBRyw2QkFBcUIsQ0FBQyxhQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RSxNQUFNLE1BQU0sR0FBRyxpQkFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUV6QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDZixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqQixNQUFNLEVBQUUsT0FBTztZQUNmLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQUEsQ0FBQztLQUNiO1NBQU07UUFDSCxJQUFJLGdCQUFnQixFQUFFO1lBQ2xCLElBQUksRUFBRSxDQUFDO1NBQ1Y7YUFBTTtZQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNLEVBQUUsT0FBTztnQkFDZixPQUFPLEVBQUUsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssa0JBQWtCO2FBQ3BELENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUFBLENBQUM7U0FDYjtLQUNKO0FBQ0wsQ0FBQyxDQUFDIn0=