import { RequestHandler } from 'express';
import { ValidatedRequest } from 'express-joi-validation';
import { GroupType } from '../types/types';
import { groupService } from '../services/groups';
import { groupSchema } from '../models/group';

export const createGroup: RequestHandler = (req: ValidatedRequest<GroupType>, res) => {
    const body: GroupType = req.body;
    const {
        name,
        permissions
    } = body;

    groupService.createGroup({
        name,
        permissions,
    })
};

export const getGroup: RequestHandler = (req, res) => {
    groupService.getGroupById(req.params.id)
}