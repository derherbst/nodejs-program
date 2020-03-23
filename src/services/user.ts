import { UserModel } from '../models/user';
import { dataAccess } from '../data-access/data-access';
import jwt from 'jsonwebtoken';
import { response } from 'express';

class User {
    model: any;
    constructor(model) {
        this.model = model;
    }

    authenticate = async ({login, password}) => {
        const user = await dataAccess.getUserByParams('login', login);

        if (!user || user.password !== password) return;

        const payload = {'sub': user.id};
        const token = jwt.sign(payload, 'secret', {expiresIn: 3000});

        return token;
    };

    checkToken = (token) => {
        let result;

        jwt.verify(token, 'secret', (error) => {
            if (error) {
                result = error;
            }   
        });

        return result;
    };

    getUsers = ({limit, loginSubstring}) => {
        return loginSubstring
            ?  dataAccess.getAutoSuggestUsers({limit, loginSubstring})
            : dataAccess.getAllUsers(limit)
    };

    createUser = async (inputData) => {
        const user = await dataAccess.getUserByParams('login', inputData.login);
        
        if (user) return;

        return dataAccess.createUser(inputData);
    };

    updateUser = async ({id, updateBody}) => {
        const user = await dataAccess.getUserById(id);

        if (!user) return;

        return dataAccess.updateUser({id, updateBody});
    };

    deleteUser = async (id) => {
        const user = await dataAccess.getUserById(id);
        const updateBody = { isDeleted: true };

        if (!user) return;

        return dataAccess.updateUser({id, updateBody});
    }
}

export const userService = new User(UserModel);