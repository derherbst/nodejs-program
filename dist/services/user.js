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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const data_access_1 = require("../data-access/data-access");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class User {
    constructor(model) {
        this.authenticate = ({ login, password }) => __awaiter(this, void 0, void 0, function* () {
            const user = yield data_access_1.dataAccess.getUserByParams('login', login);
            if (!user || user.password !== password)
                return;
            const payload = { 'sub': user.id };
            const token = jsonwebtoken_1.default.sign(payload, 'secret', { expiresIn: 3000 });
            return token;
        });
        this.checkToken = (token) => {
            let result;
            jsonwebtoken_1.default.verify(token, 'secret', (error) => {
                if (error) {
                    result = error;
                }
            });
            return result;
        };
        this.getUsers = ({ limit, loginSubstring }) => {
            return loginSubstring
                ? data_access_1.dataAccess.getAutoSuggestUsers({ limit, loginSubstring })
                : data_access_1.dataAccess.getAllUsers(limit);
        };
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
            return data_access_1.dataAccess.updateUser({ id, updateBody });
        });
        this.deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield data_access_1.dataAccess.getUserById(id);
            const updateBody = { isDeleted: true };
            if (!user)
                return;
            return data_access_1.dataAccess.updateUser({ id, updateBody });
        });
        this.model = model;
    }
}
exports.userService = new User(user_1.UserModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTJDO0FBQzNDLDREQUF3RDtBQUN4RCxnRUFBK0I7QUFHL0IsTUFBTSxJQUFJO0lBRU4sWUFBWSxLQUFLO1FBSWpCLGlCQUFZLEdBQUcsQ0FBTyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFBRSxFQUFFO1lBQ3ZDLE1BQU0sSUFBSSxHQUFHLE1BQU0sd0JBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRTlELElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRO2dCQUFFLE9BQU87WUFFaEQsTUFBTSxPQUFPLEdBQUcsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ2pDLE1BQU0sS0FBSyxHQUFHLHNCQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUU3RCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUEsQ0FBQztRQUVGLGVBQVUsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ25CLElBQUksTUFBTSxDQUFDO1lBRVgsc0JBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNsQyxJQUFJLEtBQUssRUFBRTtvQkFDUCxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNsQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDO1FBRUYsYUFBUSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFDLEVBQUUsRUFBRTtZQUNuQyxPQUFPLGNBQWM7Z0JBQ2pCLENBQUMsQ0FBRSx3QkFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBQyxDQUFDO2dCQUMxRCxDQUFDLENBQUMsd0JBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkMsQ0FBQyxDQUFDO1FBRUYsZUFBVSxHQUFHLENBQU8sU0FBUyxFQUFFLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEdBQUcsTUFBTSx3QkFBVSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXhFLElBQUksSUFBSTtnQkFBRSxPQUFPO1lBRWpCLE9BQU8sd0JBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFBLENBQUM7UUFFRixlQUFVLEdBQUcsQ0FBTyxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUMsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxHQUFHLE1BQU0sd0JBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFOUMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTztZQUVsQixPQUFPLHdCQUFVLENBQUMsVUFBVSxDQUFDLEVBQUMsRUFBRSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFBLENBQUM7UUFFRixlQUFVLEdBQUcsQ0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN0QixNQUFNLElBQUksR0FBRyxNQUFNLHdCQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sVUFBVSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO1lBRXZDLElBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU87WUFFbEIsT0FBTyx3QkFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQSxDQUFBO1FBdkRHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Q0F1REo7QUFFWSxRQUFBLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxnQkFBUyxDQUFDLENBQUMifQ==