import { GroupModel } from '../models/group';

class DataGroupAccess {
    model: any;
    constructor(model) {
        this.model = model;
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

}

export const dataGroupAccess = new DataGroupAccess(GroupModel);