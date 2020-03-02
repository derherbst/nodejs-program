import {GroupModel} from '../models/group';
import {dataGroupAccess} from '../data-access/data-group-access';

class Group {
    model: any;
    constructor(model) {
        this.model = model;
    }

    getGroupById = async (id: string) => {
        return await dataGroupAccess.getGroupById(id);
    };

    getAllGroups = async () => {
        return await dataGroupAccess.getAllGroups();
    };

    createGroup = async (inputData) => {
        const group = await dataGroupAccess.getGroupByParams('name', inputData.name);

        if (group) return;

        return dataGroupAccess.createGroup(inputData);
    };

    updateGroup = async ({id, updateBody}) => {
        const group = await dataGroupAccess.getGroupById(id);

        if (!group) return;

        return await dataGroupAccess.updateGroup({id, updateBody});
    };

    deleteGroup = async (id) => {
        const group = await dataGroupAccess.getGroupById(id);

        if (!group) return;

        return await dataGroupAccess.deleteGroup(id);
    };

    addUsersToGroup = async (groupId, userIds) => {
        return await dataGroupAccess.addUsersToGroup(groupId, userIds);
    };
}

export const groupService = new Group(GroupModel);