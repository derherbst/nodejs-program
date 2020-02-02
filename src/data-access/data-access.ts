import { UserModel } from '../models/user';
import { Op } from 'sequelize';

class DataAccess {
    model: any;
    constructor(model) {
        this.model = model;
    }

    getUserById = async (id: string) => {
        const result = await this.model.findByPk(id);

        return result;
    };

    getUserByParams = (param, value) => {
        return this.model.findOne({
            where: {
                [param]: value,
            },
        });
    };

    getAllUsers = async (limit: number) => {
        const order = ['login', 'ASC'];
        const result = await this.model.findAll(
            limit,
            order,
        )

        return result;
    };

    getAutoSuggestUsers = async ({limit, loginSubstring}) => {
        const order = ['login', 'ASC'];
        const result = await this.model.findAll({
            limit,
            where: {
                login: {
                    [Op.like]: `%${loginSubstring}%`,
                },
            },
            order,
        });

        return result;
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
        const result = await this.model.create(data);
        return result;
    };
}

export const dataAccess = new DataAccess(UserModel);