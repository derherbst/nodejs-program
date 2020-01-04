"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_joi_validation_1 = require("express-joi-validation");
const user_1 = require("./../models/user");
const users_1 = require("../controllers/users");
const router = express_1.Router();
const validator = express_joi_validation_1.createValidator({
    passError: true,
});
router.post('/', validator.query(user_1.userSchema), users_1.createUser);
router.get('/', users_1.getUsers);
router.patch('/:id', validator.query(user_1.userSchema), users_1.updateUser);
router.delete('/:id', users_1.deleteUser);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBQ2pDLG1FQUF5RDtBQUN6RCwyQ0FBOEM7QUFDOUMsZ0RBQW9GO0FBRXBGLE1BQU0sTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQztBQUN4QixNQUFNLFNBQVMsR0FBRyx3Q0FBZSxDQUFDO0lBQzlCLFNBQVMsRUFBRSxJQUFJO0NBQ2xCLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQVUsQ0FBQyxFQUFFLGtCQUFVLENBQUMsQ0FBQztBQUMxRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxnQkFBUSxDQUFDLENBQUM7QUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxpQkFBVSxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxDQUFDO0FBQzlELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGtCQUFVLENBQUMsQ0FBQztBQUVsQyxrQkFBZSxNQUFNLENBQUMifQ==