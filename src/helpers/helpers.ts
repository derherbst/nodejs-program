import { UserType } from '../types/types';
import { userSchema } from '../models/user';
import { USERS } from '../data/users';

export const getAutoSuggestUsers = (data: UserType['fields'][], loginSubstring: string, limit: number) => {
    const sortedByLoginData = data.sort((a, b) => a.login.toLowerCase().localeCompare(b.login.toLowerCase()));
    const filteredByLoginSubstring = sortedByLoginData.filter((user) => user.login.includes(loginSubstring));
    const limetedUsersCollection = filteredByLoginSubstring.slice(0, limit);

    return limetedUsersCollection;
}

export const checkIfLoginAvailable = (data, login): boolean => {
    if (data && data.length === 0) {
        return true;
    }
    
    const result = data.some(user => user.login === login);

    return !result;
}

export const validateUserData = (req, res, next): void => {
    console.log("USERS", USERS);
    console.log("PARAMS", req.params);
    const isLoginAvailable = checkIfLoginAvailable(USERS, req.body.login);
    const result = userSchema.validate(req.body);
    const { error } = result;

    if (error != null) {
        res.status(400).json({
            status: 'error',
            error: error,
        }).end();;
    } else {
        if (isLoginAvailable) {
            next();
        } else {
            res.status(400).json({
                status: 'error',
                message: `User ${req.body.login} already exists!`,
            }).end();;
        }
    }
};