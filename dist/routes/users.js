"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const helpers_1 = require("../helpers/helpers");
const router = express_1.Router();
console.log(64564654645645);
router.post('/', helpers_1.validateUserData, users_1.createUser);
router.get('/', users_1.getUsers);
router.patch('/:id', helpers_1.validateUserData, users_1.updateUser);
router.delete('/:id', users_1.deleteUser);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBQ2pDLGdEQUFvRjtBQUNwRixnREFBc0Q7QUFFdEQsTUFBTSxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO0FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsMEJBQWdCLEVBQUUsa0JBQVUsQ0FBQyxDQUFDO0FBQy9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGdCQUFRLENBQUMsQ0FBQztBQUMxQixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSwwQkFBZ0IsRUFBRSxrQkFBVSxDQUFDLENBQUM7QUFDbkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsa0JBQVUsQ0FBQyxDQUFDO0FBRWxDLGtCQUFlLE1BQU0sQ0FBQyJ9