import { RequestHandler } from 'express';
import { ValidatedRequest } from 'express-joi-validation';
import { GroupType } from '../types/types';
import { groupService } from '../services/groups';
import { logger, logError } from '../logger/logger';

export const createGroup: RequestHandler = (req: ValidatedRequest<GroupType>, res) => {
    const body: GroupType['query'] = req.body;
    const {
        name,
        permissions
    } = body;

    logger.info(`Calling createGroup method with parameters: ${{
        name,
        permissions,
    }}`);

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
            logError(req.method, body, `Group ${name} already exists!`);
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
    logger.info(`Calling getGroupById method with parameter ID: ${ req.params.id }`);

    groupService.getGroupById(req.params.id)
        .then(group => {
            if(group) {
                res.status(200).json({
                    message: 'Updated!',
                    group,
                }).end();
            } else {
                logError(req.method, req.params.id, 'Could not find group!');
                res.status(404).json({
                    status: 'failed',
                    message: 'Could not find group!',
                }).end();
            }
        })
        .catch(() => {
            res.status(500).send('Internal error')
        });
};

export const getGroups: RequestHandler = (req, res) => {
    logger.info('Calling getAllGroups method');
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

    logger.info(`Calling updateGroup method with parameters: ${{id, updateBody}}`);

    groupService.updateGroup({id, updateBody})
        .then(group => {
            if(group) {
                res.status(200).json({
                    message: 'Updated!',
                    updatedGroup: group,
                }).end();
            } else {
                logError(req.method, {id, updateBody}, 'Could not find group!');
                res.status(404).json({
                    status: 'failed',
                    message: 'Could not find group!'
                }).end();
            }
        })
        .catch(() => {
            res.status(500).send('Internal error')
        });
};

export const deleteGroup: RequestHandler = (req, res) => {
    const groupId = req.params.id;

    logger.info(`Calling deleteGroup method with parameter ID: ${ groupId }`);

    groupService.deleteGroup(groupId)
        .then(group => {
            if (group) {
                res.status(200).json({
                    message: 'Group deleted!',
                    updatedUser: group,
                });
            } else {
                logError(req.method, groupId, 'Could not find group!');
                res.status(404).json({
                    status: 'failed',
                    message: 'Could not find group!'
                });
            }
        })
        .catch(() => {
            res.status(500).send('Internal error')
        });
};

export const addUsersToGroup: RequestHandler = (req, res) => {
    const groupId = req.query.groupId;
    const userIds = req.query.userIds;

    logger.info(`Calling addUsersToGroup method with parameters: ${{groupId, userIds}}`);

    groupService.addUsersToGroup(groupId, userIds)
        .then(userGroups => {
            if (userGroups) {
                res.status(200).json({
                    message: 'User was added to group!',
                    userGroups: userGroups,
                });
            } else {
                logError(req.method, {groupId, userIds}, 'Failed to add user to group!');
                res.status(404).json({
                    status: 'failed',
                    message: 'Failed to add user to group!',
                });
            }
        })
        .catch(err => console.log(err));
};