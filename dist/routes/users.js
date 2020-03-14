"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const userRouter = express_1.Router();
userRouter.post('/', users_1.validateUserData, users_1.checkToken, users_1.createUser);
userRouter.post('/login', users_1.login);
userRouter.get('/', users_1.checkToken, users_1.getUsers);
userRouter.patch('/:id', users_1.validateUserData, users_1.checkToken, users_1.updateUser);
userRouter.delete('/:id', users_1.checkToken, users_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBQ2pDLGdEQVE4QjtBQUU5QixNQUFNLFVBQVUsR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFNUIsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsd0JBQWdCLEVBQUUsa0JBQVUsRUFBRSxrQkFBVSxDQUFDLENBQUM7QUFDL0QsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBSyxDQUFDLENBQUM7QUFDakMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsa0JBQVUsRUFBRSxnQkFBUSxDQUFDLENBQUM7QUFDMUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsd0JBQWdCLEVBQUUsa0JBQVUsRUFBRSxrQkFBVSxDQUFDLENBQUM7QUFDbkUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsa0JBQVUsRUFBRSxrQkFBVSxDQUFDLENBQUM7QUFFbEQsa0JBQWUsVUFBVSxDQUFDIn0=