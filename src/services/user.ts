import { UserModel } from '../models/user';
import { dataAccess } from '../data-access/data-access';

class User {
    model: any;
    constructor(model) {
        this.model = model;
    }

    getUsers = async ({limit, loginSubstring}) => {
        return loginSubstring
            ?  dataAccess.getAutoSuggestUsers({limit, loginSubstring})
            : dataAccess.getAllUsers(limit)
    };

    validateUserData = async (inputData) => {
        
    };

    createUser = async (inputData) => {
        const user = await dataAccess.getUserByParams('login', inputData.login);
        
        if (user) return null;

        return dataAccess.createUser(inputData);
    };

    updateUser = async ({id, updateBody}) => {
        const user = await dataAccess.getUserById(id);

        if (!user) return null;

        const result = await dataAccess.updateUser({id, updateBody});

        return result;
    };

    deleteUser = async (id) => {
        const user = await dataAccess.getUserById(id);
        const updateBody = { isDeleted: true };

        if (!user) return null;

        const result = await dataAccess.updateUser({id, updateBody});

        return result;
    }
}

export const userService = new User(UserModel);