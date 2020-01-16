"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const router = express_1.Router();
router.post('/', users_1.validateUserData, users_1.createUser);
router.get('/', users_1.getUsers);
router.patch('/:id', users_1.prepareDataForUpdateValidation, users_1.validateUserData, users_1.updateUser);
router.delete('/:id', users_1.deleteUser);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBQ2pDLGdEQUFzSTtBQUV0SSxNQUFNLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsd0JBQWdCLEVBQUUsa0JBQVUsQ0FBQyxDQUFDO0FBQy9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGdCQUFRLENBQUMsQ0FBQztBQUMxQixNQUFNLENBQUMsS0FBSyxDQUNSLE1BQU0sRUFDTixzQ0FBOEIsRUFDOUIsd0JBQWdCLEVBQ2hCLGtCQUFVLENBQ2IsQ0FBQztBQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGtCQUFVLENBQUMsQ0FBQztBQUVsQyxrQkFBZSxNQUFNLENBQUMifQ==