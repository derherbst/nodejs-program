"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const groups_1 = require("../controllers/groups");
const groupRouter = express_1.Router();
groupRouter.post('/', groups_1.createGroup);
groupRouter.post('/addUsersToGroup', groups_1.addUsersToGroup);
groupRouter.get('/', groups_1.getGroups);
groupRouter.get('/:id', groups_1.getGroupById);
groupRouter.patch('/:id', groups_1.updateGroup);
groupRouter.delete('/:id', groups_1.deleteGroup);
exports.default = groupRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9ncm91cHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBaUM7QUFDakMsa0RBQXdIO0FBRXhILE1BQU0sV0FBVyxHQUFHLGdCQUFNLEVBQUUsQ0FBQztBQUU3QixXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxvQkFBVyxDQUFDLENBQUM7QUFDbkMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSx3QkFBZSxDQUFDLENBQUM7QUFDdEQsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsa0JBQVMsQ0FBQyxDQUFDO0FBQ2hDLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHFCQUFZLENBQUMsQ0FBQztBQUN0QyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxvQkFBVyxDQUFDLENBQUM7QUFDdkMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsb0JBQVcsQ0FBQyxDQUFDO0FBRXhDLGtCQUFlLFdBQVcsQ0FBQyJ9