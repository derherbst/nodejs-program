"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const groups_1 = require("../services/groups");
exports.createGroup = (req, res) => {
    const body = req.body;
    const { name, permissions } = body;
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
    groups_1.groupService.getGroupById(req.params.id)
        .then(group => {
        if (group) {
            res.status(200).json({
                message: 'Updated!',
                group,
            }).end();
        }
        else {
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
exports.getGroups = (req, res) => {
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
    groups_1.groupService.updateGroup({ id, updateBody })
        .then(group => {
        if (group) {
            res.status(200).json({
                message: 'Updated!',
                updatedGroup: group,
            }).end();
        }
        else {
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
    groups_1.groupService.deleteGroup(groupId)
        .then(group => {
        if (group) {
            res.status(200).json({
                message: 'Group deleted!',
                updatedUser: group,
            });
        }
        else {
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
    groups_1.groupService.addUsersToGroup(groupId, userIds)
        .then(userGroups => {
        if (userGroups) {
            res.status(200).json({
                message: 'User was added to group!',
                userGroups: userGroups,
            });
        }
        else {
            res.status(404).json({
                status: 'failed',
                message: 'Failed to add user to group!'
            });
        }
    })
        .catch(err => console.log(err));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2dyb3Vwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLCtDQUFrRDtBQUdyQyxRQUFBLFdBQVcsR0FBbUIsQ0FBQyxHQUFnQyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2pGLE1BQU0sSUFBSSxHQUF1QixHQUFHLENBQUMsSUFBSSxDQUFDO0lBQzFDLE1BQU0sRUFDRixJQUFJLEVBQ0osV0FBVyxFQUNkLEdBQUcsSUFBSSxDQUFDO0lBRVQscUJBQVksQ0FBQyxXQUFXLENBQUM7UUFDckIsSUFBSTtRQUNKLFdBQVc7S0FDZCxDQUFDO1NBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ1YsSUFBSSxLQUFLLEVBQUU7WUFDUCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakIsT0FBTyxFQUFFLG9CQUFvQjtnQkFDN0IsWUFBWSxFQUFFLEtBQUs7YUFDdEIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1o7YUFBTTtZQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNLEVBQUUsT0FBTztnQkFDZixPQUFPLEVBQUUsU0FBUyxJQUFJLGtCQUFrQjthQUMzQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDWjtJQUNMLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDUixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRVcsUUFBQSxZQUFZLEdBQW1CLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3JELHFCQUFZLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENB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