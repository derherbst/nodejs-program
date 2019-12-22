"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
exports.userSchema = joi_1.default.object({
    id: joi_1.default.string().uuid().optional(),
    login: joi_1.default.string().required(),
    password: joi_1.default.string().required().alphanum(),
    age: joi_1.default.number().min(4).max(130),
    isDeleted: joi_1.default.boolean().required(),
});
class User {
    constructor(id, login, password, age, isDeleted) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.age = age;
        this.isDeleted = isDeleted;
    }
}
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUEyQjtBQUVkLFFBQUEsVUFBVSxHQUFHLGFBQUcsQ0FBQyxNQUFNLENBQUM7SUFDakMsRUFBRSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDbEMsS0FBSyxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDOUIsUUFBUSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDNUMsR0FBRyxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUNqQyxTQUFTLEVBQUUsYUFBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUN0QyxDQUFDLENBQUE7QUFFRixNQUFhLElBQUk7SUFDYixZQUNXLEVBQVUsRUFDVixLQUFhLEVBQ2IsUUFBZ0IsRUFDaEIsR0FBVyxFQUNYLFNBQWtCO1FBSmxCLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsY0FBUyxHQUFULFNBQVMsQ0FBUztJQUc3QixDQUFDO0NBQ0o7QUFWRCxvQkFVQyJ9