"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const helpers_1 = require("../helpers/helpers");
const router = express_1.Router();
router.post('/', helpers_1.validateUserData, users_1.createUser);
router.get('/', users_1.getUsers);
router.patch('/:id', helpers_1.prepareDataForUpdateValidation, helpers_1.validateUserData, users_1.updateUser);
router.delete('/:id', users_1.deleteUser);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBQ2pDLGdEQUFvRjtBQUNwRixnREFBc0Y7QUFFdEYsTUFBTSxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO0FBRXhCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLDBCQUFnQixFQUFFLGtCQUFVLENBQUMsQ0FBQztBQUMvQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxnQkFBUSxDQUFDLENBQUM7QUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FDUixNQUFNLEVBQ04sd0NBQThCLEVBQzlCLDBCQUFnQixFQUNoQixrQkFBVSxDQUNiLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxrQkFBVSxDQUFDLENBQUM7QUFFbEMsa0JBQWUsTUFBTSxDQUFDIn0=