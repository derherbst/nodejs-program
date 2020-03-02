"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const groups_1 = require("../services/groups");
const logger_1 = require("../logger/logger");
const helpers_1 = require("../helpers/helpers");
exports.createGroup = (req, res) => {
    const body = req.body;
    const { name, permissions } = body;
    logger_1.logger.info(`Calling createGroup method with parameters: ${{
        name,
        permissions,
    }}`);
    groups_1.groupService.createGroup({
        name,
        permissions,
    })
        .then(group => {
        if (group) {
            res.status(200).json({
                message: 'Group was created!',
                createdGroup: group,
            }).end();
        }
        else {
            logger_1.logError(req.method, body, `Group ${name} already exists!`);
            res.status(400).json({
                status: 'error',
                message: `Group ${name} already exists!`,
            }).end();
        }
    })
        .catch(() => {
        res.status(500).send('Internal error');
    });
};
exports.getGroupById = (req, res) => {
    logger_1.logger.info(`Calling getGroupById method with parameter ID: ${req.params.id}`);
    groups_1.groupService.getGroupById(req.params.id)
        .then(group => {
        if (group) {
            res.status(200).json({
                message: `Found a group with id ${req.params.id}`,
                group,
            }).end();
        }
        else {
            logger_1.logError(req.method, req.params.id, 'Could not find group!');
            res.status(404).json(helpers_1.failedSearchResponse('group')).end();
        }
    })
        .catch(() => {
        res.status(500).send('Internal error');
    });
};
exports.getGroups = (req, res) => {
    logger_1.logger.info('Calling getAllGroups method');
    groups_1.groupService.getAllGroups()
        .then(groups => {
        res.json({ groups });
    })
        .catch(() => {
        res.status(500).send('Internal error');
    });
};
exports.updateGroup = (req, res) => {
    const { params: { id }, body: updateBody } = req;
    logger_1.logger.info(`Calling updateGroup method with parameters: ${{ id, updateBody }}`);
    groups_1.groupService.updateGroup({ id, updateBody })
        .then(group => {
        if (group) {
            res.status(200).json({
                message: 'Updated!',
                updatedGroup: group,
            }).end();
        }
        else {
            logger_1.logError(req.method, { id, updateBody }, 'Could not find group!');
            res.status(404).json(helpers_1.failedSearchResponse('group')).end();
        }
    })
        .catch(() => {
        res.status(500).send('Internal error');
    });
};
exports.deleteGroup = (req, res) => {
    const groupId = req.params.id;
    logger_1.logger.info(`Calling deleteGroup method with parameter ID: ${groupId}`);
    groups_1.groupService.deleteGroup(groupId)
        .then(group => {
        if (group) {
            res.status(200).json({
                message: 'Group deleted!',
                updatedUser: group,
            });
        }
        else {
            logger_1.logError(req.method, groupId, 'Could not find group!');
            res.status(404).json(helpers_1.failedSearchResponse('group'));
        }
    })
        .catch(() => {
        res.status(500).send('Internal error');
    });
};
exports.addUsersToGroup = (req, res) => {
    const groupId = req.query.groupId;
    const userIds = req.query.userIds;
    logger_1.logger.info(`Calling addUsersToGroup method with parameters: ${{ groupId, userIds }}`);
    groups_1.groupService.addUsersToGroup(groupId, userIds)
        .then(userGroups => {
        if (userGroups) {
            res.status(200).json({
                message: 'User was added to group!',
                userGroups: userGroups,
            });
        }
        else {
            logger_1.logError(req.method, { groupId, userIds }, 'Failed to add user to group!');
            res.status(404).json(helpers_1.failedSearchResponse('group'));
        }
    })
        .catch(err => console.log(err));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2dyb3Vwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLCtDQUFrRDtBQUNsRCw2Q0FBb0Q7QUFDcEQsZ0RBQTBEO0FBRTdDLFFBQUEsV0FBVyxHQUFtQixDQUFDLEdBQWdDLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDakYsTUFBTSxJQUFJLEdBQXVCLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDMUMsTUFBTSxFQUNGLElBQUksRUFDSixXQUFXLEVBQ2QsR0FBRyxJQUFJLENBQUM7SUFFVCxlQUFNLENBQUMsSUFBSSxDQUFDLCtDQUErQztRQUN2RCxJQUFJO1FBQ0osV0FBVztLQUNkLEVBQUUsQ0FBQyxDQUFDO0lBRUwscUJBQVksQ0FBQyxXQUFXLENBQUM7UUFDckIsSUFBSTtRQUNKLFdBQVc7S0FDZCxDQUFDO1NBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ1YsSUFBSSxLQUFLLEVBQUU7WUFDUCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakIsT0FBTyxFQUFFLG9CQUFvQjtnQkFDN0IsWUFBWSxFQUFFLEtBQUs7YUFDdEIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1o7YUFBTTtZQUNILGlCQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxJQUFJLGtCQUFrQixDQUFDLENBQUM7WUFDNUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE9BQU8sRUFBRSxTQUFTLElBQUksa0JBQWtCO2FBQzNDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNaO0lBQ0wsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNSLEdBQUcsQ0FBQyxNQUFNLENBQUMs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