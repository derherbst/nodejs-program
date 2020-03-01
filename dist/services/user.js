"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const data_access_1 = require("../data-access/data-access");
class User {
    constructor(model) {
        this.getUsers = ({ limit, loginSubstring }) => __awaiter(this, void 0, void 0, function* () {
            return loginSubstring
                ? yield data_access_1.dataAccess.getAutoSuggestUsers({ limit, loginSubstring })
                : yield data_access_1.dataAccess.getAllUsers(limit);
        });
        this.createUser = (inputData) => __awaiter(this, void 0, void 0, function* () {
            const user = yield data_access_1.dataAccess.getUserByParams('login', inputData.login);
            if (user)
                return;
            return data_access_1.dataAccess.createUser(inputData);
        });
        this.updateUser = ({ id, updateBody }) => __awaiter(this, void 0, void 0, function* () {
            const user = yield data_access_1.dataAccess.getUserById(id);
            if (!user)
                return;
            return yield data_access_1.dataAccess.updateUser({ id, updateBody });
        });
        this.deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield data_access_1.dataAccess.getUserById(id);
            const updateBody = { isDeleted: true };
            if (!user)
                return;
            return yield data_access_1.dataAccess.updateUser({ id, updateBody });
        });
        this.model = model;
    }
}
exports.userService = new User(user_1.UserModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUNBQTJDO0FBQzNDLDREQUF3RDtBQUV4RCxNQUFNLElBQUk7SUFFTixZQUFZLEtBQUs7UUFJakIsYUFBUSxHQUFHLENBQU8sRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFDLEVBQUUsRUFBRTtZQUN6QyxPQUFPLGNBQWM7Z0JBQ2pCLENBQUMsQ0FBRSxNQUFNLHdCQUFVLENBQUMsbUJBQW1CLENBQUMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFDLENBQUM7Z0JBQ2hFLENBQUMsQ0FBQyxNQUFNLHdCQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzdDLENBQUMsQ0FBQSxDQUFDO1FBRUYsZUFBVSxHQUFHLENBQU8sU0FBUyxFQUFFLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEdBQUcsTUFBTSx3QkFBVSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXhFLElBQUksSUFBSTtnQkFBRSxPQUFPO1lBRWpCLE9BQU8sd0JBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFBLENBQUM7UUFFRixlQUFVLEdBQUcsQ0FBTyxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUMsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxHQUFHLE1BQU0sd0JBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFOUMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTztZQUVsQixPQUFPLE1BQU0sd0JBQVUsQ0FBQyxVQUFVLENBQUMsRUFBQyxFQUFFLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUEsQ0FBQztRQUVGLGVBQVUsR0FBRyxDQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3RCLE1BQU0sSUFBSSxHQUFHLE1BQU0sd0JBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUMsTUFBTSxVQUFVLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFFdkMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTztZQUVsQixPQUFPLE1BQU0sd0JBQVUsQ0FBQyxVQUFVLENBQUMsRUFBQyxFQUFFLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUEsQ0FBQTtRQWhDRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0NBZ0NKO0FBRVksUUFBQSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQVMsQ0FBQyxDQUFDIn0=