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
                ? data_access_1.dataAccess.getAutoSuggestUsers({ limit, loginSubstring })
                : data_access_1.dataAccess.getAllUsers(limit);
        });
        this.createUser = (inputData) => __awaiter(this, void 0, void 0, function* () {
            const user = yield data_access_1.dataAccess.getUserByParams('login', inputData.login);
            if (user)
                return null;
            return data_access_1.dataAccess.createUser(inputData);
        });
        this.updateUser = ({ id, updateBody }) => __awaiter(this, void 0, void 0, function* () {
            const user = yield data_access_1.dataAccess.getUserById(id);
            if (!user)
                return null;
            const result = yield data_access_1.dataAccess.updateUser({ id, updateBody });
            return result;
        });
        this.deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield data_access_1.dataAccess.getUserById(id);
            const updateBody = { isDeleted: true };
            if (!user)
                return null;
            const result = yield data_access_1.dataAccess.updateUser({ id, updateBody });
            return result;
        });
        this.model = model;
    }
}
exports.userService = new User(user_1.UserModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUNBQTJDO0FBQzNDLDREQUF3RDtBQUV4RCxNQUFNLElBQUk7SUFFTixZQUFZLEtBQUs7UUFJakIsYUFBUSxHQUFHLENBQU8sRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFDLEVBQUUsRUFBRTtZQUN6QyxPQUFPLGNBQWM7Z0JBQ2pCLENBQUMsQ0FBRSx3QkFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBQyxDQUFDO2dCQUMxRCxDQUFDLENBQUMsd0JBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkMsQ0FBQyxDQUFBLENBQUM7UUFFRixlQUFVLEdBQUcsQ0FBTyxTQUFTLEVBQUUsRUFBRTtZQUM3QixNQUFNLElBQUksR0FBRyxNQUFNLHdCQUFVLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFeEUsSUFBSSxJQUFJO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBRXRCLE9BQU8sd0JBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFBLENBQUM7UUFFRixlQUFVLEdBQUcsQ0FBTyxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUMsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxHQUFHLE1BQU0sd0JBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFOUMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFFdkIsTUFBTSxNQUFNLEdBQUcsTUFBTSx3QkFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO1lBRTdELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQSxDQUFDO1FBRUYsZUFBVSxHQUFHLENBQU8sRUFBRSxFQUFFLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEdBQUcsTUFBTSx3QkFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QyxNQUFNLFVBQVUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUV2QyxJQUFJLENBQUMsSUFBSTtnQkFBRSxPQUFPLElBQUksQ0FBQztZQUV2QixNQUFNLE1BQU0sR0FBRyxNQUFNLHdCQUFVLENBQUMsVUFBVSxDQUFDLEVBQUMsRUFBRSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7WUFFN0QsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBLENBQUE7UUFwQ0csSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztDQW9DSjtBQUVZLFFBQUEsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLGdCQUFTLENBQUMsQ0FBQyJ9