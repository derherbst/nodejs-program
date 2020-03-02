import { RequestHandler } from 'express';
import { ValidatedRequest } from 'express-joi-validation';
import { GroupType } from '../types/types';
import { groupService } from '../services/groups';
import { failedSearchResponse } from '../helpers/helpers';

export const createGroup: RequestHandler = (req: ValidatedRequest<GroupType>, res) => {
    const body: GroupType['query'] = req.body;
    const {
        name,
        permissions
    } = body;

    groupService.createGroup({
        name,
        permissions,
    })
    .then(group => {
        if (group) {
            res.status(200).json({
                message: 'Group was created!',
                createdGroup: group,
            }).end();
        } else {
            res.status(400).json({
                status: 'error',
                message: `Group ${name} already exists!`,
            }).end();
        }
    })
    .catch(() => {
        res.status(500).send('Internal error')
    });
};

export const getGroupById: RequestHandler = (req, res) => {
    groupService.getGroupById(req.params.id)
        .then(group => {
            if(group) {
                res.status(200).json({
                    message: `Found a group with id ${req.params.id}`,
                    group,
                }).end();
            } else {
                res.status(404).json(failedSearchResponse('group')).end();
            }
        })
        .catch(() => {
            res.status(500).send('Internal error')
        });
};

export const getGroups: RequestHandler = (req, res) => {
    groupService.getAllGroups()
        .then(groups => {
            res.json({ groups });
        })
        .catch(() => {
            res.status(500).send('Internal error')
        });
};

export const updateGroup: RequestHandler = (req, res) => {
    const { params: { id }, body: updateBody } = req;

    groupService.updateGroup({id, updateBody})
        .then(group => {
            if(group) {
                res.status(200).json({
                    message: 'Updated!',
                    updatedGroup: group,
                }).end();
            } else {
                res.status(404).json(failedSearchResponse('group')).end();
            }
        })
        .catch(() => {
            res.status(500).send('Internal error')
        });
};

export const deleteGroup: RequestHandler = (req, res) => {
    const groupId = req.params.id;

    groupService.deleteGroup(groupId)
        .then(group => {
            if (group) {
                res.status(200).json({
                    message: 'Group deleted!',
                    updatedUser: group,
                });
            } else {
                res.status(404).json(failedSearchResponse('group'));
            }
        })
        .catch(() => {
            res.status(500).send('Internal error')
        });
};

export const addUsersToGroup: RequestHandler = (req, res) => {
    const groupId = req.query.groupId;
    const userIds = req.query.userIds;

    groupService.addUsersToGroup(groupId, userIds)
        .then(userGroups => {
            if (userGroups) {
                res.status(200).json({
                    message: 'User was added to group!',
                    userGroups: userGroups,
                });
            } else {
                res.status(404).json(failedSearchResponse('group'));
            }
        })
        .catch(err => console.log(err));
};