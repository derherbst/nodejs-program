import { GroupModel } from '../models/group';
import { UserModel } from '../models/user';
import { UserGroup } from '../models/userGroup';
import { sequelize } from '../config/database';

class DataGroupAccess {
    model: any;
    userModel: any;
    userGroupModel: any;
    constructor(model, userModel, userGroupModel) {
        this.model = model;
        this.userModel = userModel;
        this.userGroupModel = userGroupModel;
    }

    getGroupById = async (id: string) => {
        const result = await this.model.findByPk(id);

        return result;
    };

    getAllGroups = async () => {
        const order = ['name', 'ASC'];
        const result = await this.model.findAll(order);

        return result;
    };

    getGroupByParams = (param, value) => {
        return this.model.findOne({
            where: {
                [param]: value,
            },
        });
    };

    createGroup = async (data) => {
        const result = await this.model.create(data);
        return result;
    };

    updateGroup = async ({id, updateBody}) => {
        return this.model.update({...updateBody}, {
            where: {
                id,
            },
            returning: true,
        })
    };

    deleteGroup = async (id: string) => {
        const result = await this.model.destroy({
            where: {
                id,
            },
            force: true,
        });

        return result;
    };

    addUsersToGroup = async (groupId, usersIds) => {
        const response = await sequelize.transaction(async (t) => {
            const groupPromise = this.model.findByPk(groupId, {
                raw: true,
            });
            const usersPromise = this.userModel.findAll({
                where: {
                    id: usersIds,
                },
                raw: true,
            });

            const [group, users] = await Promise.all([groupPromise, usersPromise]);
            usersIds.forEach(async (userId) => {
                
                console.log("GROUP!!!!!!!!!!!!", group);
                console.log("users!!!!!!!!!!!!", users);
                const result = await this.userGroupModel.create({groupId: group.id, userId}, { returning: true });

                return result;
            });
            
        });

        return response;
    };

}

export const dataGroupAccess = new DataGroupAccess(GroupModel, UserModel, UserGroup);