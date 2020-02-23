"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const groups_1 = require("../services/groups");
const logger_1 = require("../logger/logger");
exports.createGroup = (req, res) => {
    const body = req.body;
    const { name, permissions } = body;
    logger_1.logger.info('Calling createGroup method with parameters:', {
        name,
        permissions,
    });
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
    logger_1.logger.info('Calling getGroupById method with parameter ID:', req.params.id);
    groups_1.groupService.getGroupById(req.params.id)
        .then(group => {
        if (group) {
            res.status(200).json({
                message: 'Updated!',
                group,
            }).end();
        }
        else {
            logger_1.logError(req.method, req.params.id, 'Could not find group!');
            res.status(404).json({
                status: 'failed',
                message: 'Could not find group!',
            }).end();
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
    logger_1.logger.info('Calling updateGroup method with parameters:', { id, updateBody });
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
            res.status(404).json({
                status: 'failed',
                message: 'Could not find group!'
            }).end();
        }
    })
        .catch(() => {
        res.status(500).send('Internal error');
    });
};
exports.deleteGroup = (req, res) => {
    const groupId = req.params.id;
    logger_1.logger.info('Calling deleteGroup method with parameter ID:', groupId);
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
            res.status(404).json({
                status: 'failed',
                message: 'Could not find group!'
            });
        }
    })
        .catch(() => {
        res.status(500).send('Internal error');
    });
};
exports.addUsersToGroup = (req, res) => {
    const groupId = req.query.groupId;
    const userIds = req.query.userIds;
    logger_1.logger.info('Calling addUsersToGroup method with parameters:', { groupId, userIds });
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
            res.status(404).json({
                status: 'failed',
                message: 'Failed to add user to group!',
            });
        }
    })
        .catch(err => console.log(err));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2dyb3Vwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLCtDQUFrRDtBQUNsRCw2Q0FBb0Q7QUFFdkMsUUFBQSxXQUFXLEdBQW1CLENBQUMsR0FBZ0MsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNqRixNQUFNLElBQUksR0FBdUIsR0FBRyxDQUFDLElBQUksQ0FBQztJQUMxQyxNQUFNLEVBQ0YsSUFBSSxFQUNKLFdBQVcsRUFDZCxHQUFHLElBQUksQ0FBQztJQUVULGVBQU0sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLEVBQUU7UUFDdkQsSUFBSTtRQUNKLFdBQVc7S0FDZCxDQUFDLENBQUM7SUFFSCxxQkFBWSxDQUFDLFdBQVcsQ0FBQztRQUNyQixJQUFJO1FBQ0osV0FBVztLQUNkLENBQUM7U0FDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDVixJQUFJLEtBQUssRUFBRTtZQUNQLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqQixPQUFPLEVBQUUsb0JBQW9CO2dCQUM3QixZQUFZLEVBQUUsS0FBSzthQUN0QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDWjthQUFNO1lBQ0gsaUJBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLElBQUksa0JBQWtCLENBQUMsQ0FBQztZQUM1RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsT0FBTyxFQUFFLFNBQVMsSUFBSSxrQkFBa0I7YUFDM0MsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1o7SUFDTCxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ1IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FB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