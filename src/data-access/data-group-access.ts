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
        return await this.model.findByPk(id);
    };

    getAllGroups = async () => {
        const order = ['name', 'ASC'];
        return await this.model.findAll(order);
    };

    getGroupByParams = (param, value) => {
        return this.model.findOne({
            where: {
                [param]: value,
            },
        });
    };

    createGroup = async (data) => {
        return await this.model.create(data);
    };

    updateGroup = async ({id, updateBody}) => {
        return await this.model.update({...updateBody}, {
            where: {
                id,
            },
            returning: true,
        })
    };

    deleteGroup = async (id: string) => {
        return this.model.destroy({
            where: {
                id,
            },
            force: true,
        });
    };

    addUsersToGroup = async (groupId, usersIds) => {
        return sequelize.transaction(async (t) => {
            const groupPromise = this.model.findByPk(groupId, {
                raw: true,
            });
            const usersPromise = this.userModel.findAll({
                where: {
                    id: usersIds,
                },
                raw: true,
            });

            const [ group, users ] = await Promise.all([groupPromise, usersPromise]);
            const userGroupPromises = usersIds.reduce((acc, userId) => {
                const result = this.userGroupModel.create({ groupId: group.id, userId }, { returning: true });

                if (result) {
                    (acc).push(result);
                }

                return acc;
            }, []);
            const [ userGroupCollection ] = await Promise.all(userGroupPromises);

            return userGroupCollection;
        });
    };

}

export const dataGroupAccess = new DataGroupAccess(GroupModel, UserModel, UserGroup);