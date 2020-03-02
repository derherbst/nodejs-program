"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const userRouter = express_1.Router();
userRouter.post('/', users_1.validateUserData, users_1.createUser);
userRouter.get('/', users_1.getUsers);
userRouter.patch('/:id', users_1.validateUserData, users_1.updateUser);
userRouter.delete('/:id', users_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBQ2pDLGdEQUFzRztBQUV0RyxNQUFNLFVBQVUsR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFNUIsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsd0JBQWdCLEVBQUUsa0JBQVUsQ0FBQyxDQUFDO0FBQ25ELFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGdCQUFRLENBQUMsQ0FBQztBQUM5QixVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSx3QkFBZ0IsRUFBRSxrQkFBVSxDQUFDLENBQUM7QUFDdkQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsa0JBQVUsQ0FBQyxDQUFDO0FBRXRDLGtCQUFlLFVBQVUsQ0FBQyJ9