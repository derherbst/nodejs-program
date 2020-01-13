import { UserType } from '../types/types';
import { userSchema } from '../models/user';
import { USERS } from '../data/users';

export const getAutoSuggestUsers = (data: UserType['fields'][], loginSubstring: string, limit: number) => {
    const sortedByLoginData = data.sort((a, b) => a.login.toLowerCase().localeCompare(b.login.toLowerCase()));
    const filteredByLoginSubstring = sortedByLoginData.filter((user) => user.login.includes(loginSubstring));
    const limetedUsersCollection = filteredByLoginSubstring.slice(0, limit);

    return limetedUsersCollection;
};

export const checkIfLoginAvailable = (data, login): boolean => {
    if (data && data.length === 0) {
        return true;
    }
    
    const result = data.some(user => user.login === login);

    return !result;
};