import { UserModel } from '../models/user';
import { dataAccess } from '../data-access/data-access';

class User {
    model: any;
    constructor(model) {
        this.model = model;
    }

    getUsers = async ({limit, loginSubstring}) => {
        return loginSubstring
            ?  await dataAccess.getAutoSuggestUsers({limit, loginSubstring})
            : await dataAccess.getAllUsers(limit)
    };

    createUser = async (inputData) => {
        const user = await dataAccess.getUserByParams('login', inputData.login);
        
        if (user) return;

        return dataAccess.createUser(inputData);
    };

    updateUser = async ({id, updateBody}) => {
        const user = await dataAccess.getUserById(id);

        if (!user) return;

        return await dataAccess.updateUser({id, updateBody});
    };

    deleteUser = async (id) => {
        const user = await dataAccess.getUserById(id);
        const updateBody = { isDeleted: true };

        if (!user) return;

        return await dataAccess.updateUser({id, updateBody});
    }
}

export const userService = new User(UserModel);