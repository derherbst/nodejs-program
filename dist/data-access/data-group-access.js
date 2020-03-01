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
            return yield this.model.findByPk(id);
        });
        this.getAllGroups = () => __awaiter(this, void 0, void 0, function* () {
            const order = ['name', 'ASC'];
            return yield this.model.findAll(order);
        });
        this.getGroupByParams = (param, value) => {
            return this.model.findOne({
                where: {
                    [param]: value,
                },
            });
        };
        this.createGroup = (data) => __awaiter(this, void 0, void 0, function* () {
            return yield this.model.create(data);
        });
        this.updateGroup = ({ id, updateBody }) => __awaiter(this, void 0, void 0, function* () {
            return yield this.model.update(Object.assign({}, updateBody), {
                where: {
                    id,
                },
                returning: true,
            });
        });
        this.deleteGroup = (id) => __awaiter(this, void 0, void 0, function* () {
            return this.model.destroy({
                where: {
                    id,
                },
                force: true,
            });
        });
        this.addUsersToGroup = (groupId, usersIds) => __awaiter(this, void 0, void 0, function* () {
            return database_1.sequelize.transaction((t) => __awaiter(this, void 0, void 0, function* () {
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
                const userGroupPromises = usersIds.reduce((acc, userId) => {
                    const result = this.userGroupModel.create({ groupId: group.id, userId }, { returning: true });
                    if (result) {
                        (acc).push(result);
                    }
                    return acc;
                }, []);
                const [userGroupCollection] = yield Promise.all(userGroupPromises);
                return userGroupCollection;
            }));
        });
        this.model = model;
        this.userModel = userModel;
        this.userGroupModel = userGroupModel;
    }
}
exports.dataGroupAccess = new DataGroupAccess(group_1.GroupModel, user_1.UserModel, userGroup_1.UserGroup);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncm91cC1hY2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS1hY2Nlc3MvZGF0YS1ncm91cC1hY2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkM7QUFDN0MseUNBQTJDO0FBQzNDLG1EQUFnRDtBQUNoRCxpREFBK0M7QUFFL0MsTUFBTSxlQUFlO0lBSWpCLFlBQVksS0FBSyxFQUFFLFNBQVMsRUFBRSxjQUFjO1FBTTVDLGlCQUFZLEdBQUcsQ0FBTyxFQUFVLEVBQUUsRUFBRTtZQUNoQyxPQUFPLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFBLENBQUM7UUFFRixpQkFBWSxHQUFHLEdBQVMsRUFBRTtZQUN0QixNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QixPQUFPLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFBLENBQUM7UUFFRixxQkFBZ0IsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUN0QixLQUFLLEVBQUU7b0JBQ0gsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLO2lCQUNqQjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQUVGLGdCQUFXLEdBQUcsQ0FBTyxJQUFJLEVBQUUsRUFBRTtZQUN6QixPQUFPLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFBLENBQUM7UUFFRixnQkFBVyxHQUFHLENBQU8sRUFBQyxFQUFFLEVBQUUsVUFBVSxFQUFDLEVBQUUsRUFBRTtZQUNyQyxPQUFPLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLG1CQUFLLFVBQVUsR0FBRztnQkFDNUMsS0FBSyxFQUFFO29CQUNILEVBQUU7aUJBQ0w7Z0JBQ0QsU0FBUyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFBLENBQUM7UUFFRixnQkFBVyxHQUFHLENBQU8sRUFBVSxFQUFFLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDdEIsS0FBSyxFQUFFO29CQUNILEVBQUU7aUJBQ0w7Z0JBQ0QsS0FBSyxFQUFFLElBQUk7YUFDZCxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUEsQ0FBQztRQUVGLG9CQUFlLEdBQUcsQ0FBTyxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDMUMsT0FBTyxvQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFPLENBQUMsRUFBRSxFQUFFO2dCQUNyQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7b0JBQzlDLEdBQUcsRUFBRSxJQUFJO2lCQUNaLENBQUMsQ0FBQztnQkFDSCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztvQkFDeEMsS0FBSyxFQUFFO3dCQUNILEVBQUUsRUFBRSxRQUFRO3FCQUNmO29CQUNELEdBQUcsRUFBRSxJQUFJO2lCQUNaLENBQUMsQ0FBQztnQkFFSCxNQUFNLENBQUUsS0FBSyxFQUFFLEtBQUssQ0FBRSxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN6RSxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQ3RELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFFOUYsSUFBSSxNQUFNLEVBQUU7d0JBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ3RCO29CQUVELE9BQU8sR0FBRyxDQUFDO2dCQUNmLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDUCxNQUFNLENBQUUsbUJBQW1CLENBQUUsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFFckUsT0FBTyxtQkFBbUIsQ0FBQztZQUMvQixDQUFDLENBQUEsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFBLENBQUM7UUF0RUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQztDQXFFSjtBQUVZLFFBQUEsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFDLGtCQUFVLEVBQUUsZ0JBQVMsRUFBRSxxQkFBUyxDQUFDLENBQUMifQ==