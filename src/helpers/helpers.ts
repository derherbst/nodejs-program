import { UserType } from '../types/types';

export const getAutoSuggestUsers = (data: UserType['fields'][], loginSubstring: string, limit: number) => {
    const sortedByLoginData = data.sort((a, b) => a.login.toLowerCase().localeCompare(b.login.toLowerCase()));
    const filteredByLoginSubstring = sortedByLoginData.filter((user) => user.login.indexOf(loginSubstring) !== -1);
    const limetedUsersCollection = filteredByLoginSubstring.slice(0, limit);

    return limetedUsersCollection;
}

export const checkLogin = (data, login) => {
    if (data.length === 0) {
        return true;
    }
    const user = data.find(user => user.login === login);

    return user.length === 0;
}