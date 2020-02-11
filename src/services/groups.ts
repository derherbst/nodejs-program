import { GroupModel } from '../models/group';
import { dataGroupAccess } from '../data-access/data-group-access';

class Group {
    model: any;
    constructor(model) {
        this.model = model;
    }

    getGroupById = async (id: string) => {
        const result = await dataGroupAccess.getGroupById(id);
        
        return result;
    };

    getAllGroups = async () => {
        const result = await dataGroupAccess.getAllGroups();

        return result;
    };

    createGroup = async (inputData) => {
        const group = await dataGroupAccess.getGroupByParams('name', inputData.name);

        if (group) return null;

        return dataGroupAccess.createGroup(inputData);
    };

    updateGroup = async ({id, updateBody}) => {
        const group = await dataGroupAccess.getGroupById(id);

        if (!group) return null;

        const result = await dataGroupAccess.updateGroup({id, updateBody});

        return result;
    };

    deleteGroup = async (id) => {
        const group = await dataGroupAccess.getGroupById(id);

        if (!group) return null;

        const result = await dataGroupAccess.deleteGroup(id);

        return result;
    };

    addUsersToGroup = async (groupId, userIds) => {
        const result = await dataGroupAccess.addUsersToGroup(groupId, userIds);

        return result;
    };
}

export const groupService = new Group(GroupModel);