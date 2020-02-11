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
const group_1 = require("../models/group");
const user_1 = require("../models/user");
const userGroup_1 = require("../models/userGroup");
const database_1 = require("../config/database");
class DataGroupAccess {
    constructor(model, userModel, userGroupModel) {
        this.getGroupById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.findByPk(id);
            return result;
        });
        this.getAllGroups = () => __awaiter(this, void 0, void 0, function* () {
            const order = ['name', 'ASC'];
            const result = yield this.model.findAll(order);
            return result;
        });
        this.getGroupByParams = (param, value) => {
            return this.model.findOne({
                where: {
                    [param]: value,
                },
            });
        };
        this.createGroup = (data) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.create(data);
            return result;
        });
        this.updateGroup = ({ id, updateBody }) => __awaiter(this, void 0, void 0, function* () {
            return this.model.update(Object.assign({}, updateBody), {
                where: {
                    id,
                },
                returning: true,
            });
        });
        this.deleteGroup = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.destroy({
                where: {
                    id,
                },
                force: true,
            });
            return result;
        });
        this.addUsersToGroup = (groupId, usersIds) => __awaiter(this, void 0, void 0, function* () {
            const response = yield database_1.sequelize.transaction((t) => __awaiter(this, void 0, void 0, function* () {
                const groupPromise = this.model.findByPk(groupId, {
                    raw: true,
                });
                const usersPromise = this.userModel.findAll({
                    where: {
                        id: usersIds,
                    },
                    raw: true,
                });
                const [group, users] = yield Promise.all([groupPromise, usersPromise]);
                usersIds.forEach((userId) => __awaiter(this, void 0, void 0, function* () {
                    console.log("GROUP!!!!!!!!!!!!", group);
                    console.log("users!!!!!!!!!!!!", users);
                    const result = yield this.userGroupModel.create({ groupId: group.id, userId }, { returning: true });
                    return result;
                }));
            }));
            return response;
        });
        this.model = model;
        this.userModel = userModel;
        this.userGroupModel = userGroupModel;
    }
}
exports.dataGroupAccess = new DataGroupAccess(group_1.GroupModel, user_1.UserModel, userGroup_1.UserGroup);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncm91cC1hY2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS1hY2Nlc3MvZGF0YS1ncm91cC1hY2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkM7QUFDN0MseUNBQTJDO0FBQzNDLG1EQUFnRDtBQUNoRCxpREFBK0M7QUFFL0MsTUFBTSxlQUFlO0lBSWpCLFlBQVksS0FBSyxFQUFFLFNBQVMsRUFBRSxjQUFjO1FBTTVDLGlCQUFZLEdBQUcsQ0FBTyxFQUFVLEVBQUUsRUFBRTtZQUNoQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTdDLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQSxDQUFDO1FBRUYsaUJBQVksR0FBRyxHQUFTLEVBQUU7WUFDdEIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUvQyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUEsQ0FBQztRQUVGLHFCQUFnQixHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ3RCLEtBQUssRUFBRTtvQkFDSCxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUs7aUJBQ2pCO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO1FBRUYsZ0JBQVcsR0FBRyxDQUFPLElBQUksRUFBRSxFQUFFO1lBQ3pCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBLENBQUM7UUFFRixnQkFBVyxHQUFHLENBQU8sRUFBQyxFQUFFLEVBQUUsVUFBVSxFQUFDLEVBQUUsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxtQkFBSyxVQUFVLEdBQUc7Z0JBQ3RDLEtBQUssRUFBRTtvQkFDSCxFQUFFO2lCQUNMO2dCQUNELFNBQVMsRUFBRSxJQUFJO2FBQ2xCLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQSxDQUFDO1FBRUYsZ0JBQVcsR0FBRyxDQUFPLEVBQVUsRUFBRSxFQUFFO1lBQy9CLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ3BDLEtBQUssRUFBRTtvQkFDSCxFQUFFO2lCQUNMO2dCQUNELEtBQUssRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1lBRUgsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBLENBQUM7UUFFRixvQkFBZSxHQUFHLENBQU8sT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQzFDLE1BQU0sUUFBUSxHQUFHLE1BQU0sb0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBTyxDQUFDLEVBQUUsRUFBRTtnQkFDckQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO29CQUM5QyxHQUFHLEVBQUUsSUFBSTtpQkFDWixDQUFDLENBQUM7Z0JBQ0gsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7b0JBQ3hDLEtBQUssRUFBRTt3QkFDSCxFQUFFLEVBQUUsUUFBUTtxQkFDZjtvQkFDRCxHQUFHLEVBQUUsSUFBSTtpQkFDWixDQUFDLENBQUM7Z0JBRUgsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDdkUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFPLE1BQU0sRUFBRSxFQUFFO29CQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUN4QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFFbEcsT0FBTyxNQUFNLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUEsQ0FBQyxDQUFDO1lBRUgsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQyxDQUFBLENBQUM7UUE1RUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQztDQTJFSjtBQUVZLFFBQUEsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFDLGtCQUFVLEVBQUUsZ0JBQVMsRUFBRSxxQkFBUyxDQUFDLENBQUMifQ==