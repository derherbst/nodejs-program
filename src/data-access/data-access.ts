import { UserModel } from '../models/user';
import { Op } from 'sequelize';

class DataAccess {
    model: any;
    constructor(model) {
        this.model = model;
    }

    getUserById = async (id: string) => {
        return await this.model.findByPk(id);
    };

    getUserByParams = (param, value) => {
        return this.model.findOne({
            where: {
                [param]: value,
            },
        });
    };

    getAllUsers = async (limit?: number) => {
        const order = ['login', 'ASC'];
        return await this.model.findAll(
            limit,
            order,
        );
    };

    getAutoSuggestUsers = async ({limit, loginSubstring}) => {
        const order = ['login', 'ASC'];
        return await this.model.findAll({
            limit,
            where: {
                login: {
                    [Op.like]: `%${loginSubstring}%`,
                },
            },
            order,
        });
    };

    updateUser = async ({id, updateBody}) => {
        return this.model.update({...updateBody}, {
            where: {
                id,
            },
            returning: true,
        })
    };

    createUser = async (data) => {
        return await this.model.create(data);
    };
}

export const dataAccess = new DataAccess(UserModel);