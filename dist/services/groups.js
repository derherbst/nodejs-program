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
const data_group_access_1 = require("../data-access/data-group-access");
class Group {
    constructor(model) {
        this.getGroupById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield data_group_access_1.dataGroupAccess.getGroupById(id);
            return result;
        });
        this.getAllGroups = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield data_group_access_1.dataGroupAccess.getAllGroups();
            return result;
        });
        this.createGroup = (inputData) => __awaiter(this, void 0, void 0, function* () {
            const group = yield data_group_access_1.dataGroupAccess.getGroupByParams('name', inputData.name);
            if (group)
                return null;
            return data_group_access_1.dataGroupAccess.createGroup(inputData);
        });
        this.updateGroup = ({ id, updateBody }) => __awaiter(this, void 0, void 0, function* () {
            const group = yield data_group_access_1.dataGroupAccess.getGroupById(id);
            if (!group)
                return null;
            const result = yield data_group_access_1.dataGroupAccess.updateGroup({ id, updateBody });
            return result;
        });
        this.deleteGroup = (id) => __awaiter(this, void 0, void 0, function* () {
            const group = yield data_group_access_1.dataGroupAccess.getGroupById(id);
            if (!group)
                return null;
            const result = yield data_group_access_1.dataGroupAccess.deleteGroup(id);
            return result;
        });
        this.addUsersToGroup = (groupId, userIds) => __awaiter(this, void 0, void 0, function* () {
            const result = yield data_group_access_1.dataGroupAccess.addUsersToGroup(groupId, userIds);
            return result;
        });
        this.model = model;
    }
}
exports.groupService = new Group(group_1.GroupModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL2dyb3Vwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE2QztBQUM3Qyx3RUFBbUU7QUFFbkUsTUFBTSxLQUFLO0lBRVAsWUFBWSxLQUFLO1FBSWpCLGlCQUFZLEdBQUcsQ0FBTyxFQUFVLEVBQUUsRUFBRTtZQUNoQyxNQUFNLE1BQU0sR0FBRyxNQUFNLG1DQUFlLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXRELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQSxDQUFDO1FBRUYsaUJBQVksR0FBRyxHQUFTLEVBQUU7WUFDdEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxtQ0FBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRXBELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQSxDQUFDO1FBRUYsZ0JBQVcsR0FBRyxDQUFPLFNBQVMsRUFBRSxFQUFFO1lBQzlCLE1BQU0sS0FBSyxHQUFHLE1BQU0sbUNBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTdFLElBQUksS0FBSztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUV2QixPQUFPLG1DQUFlLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQSxDQUFDO1FBRUYsZ0JBQVcsR0FBRyxDQUFPLEVBQUMsRUFBRSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUU7WUFDckMsTUFBTSxLQUFLLEdBQUcsTUFBTSxtQ0FBZSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVyRCxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUV4QixNQUFNLE1BQU0sR0FBRyxNQUFNLG1DQUFlLENBQUMsV0FBVyxDQUFDLEVBQUMsRUFBRSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7WUFFbkUsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBLENBQUM7UUFFRixnQkFBVyxHQUFHLENBQU8sRUFBRSxFQUFFLEVBQUU7WUFDdkIsTUFBTSxLQUFLLEdBQUcsTUFBTSxtQ0FBZSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVyRCxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUV4QixNQUFNLE1BQU0sR0FBRyxNQUFNLG1DQUFlLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXJELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQSxDQUFDO1FBRUYsb0JBQWUsR0FBRyxDQUFPLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUN6QyxNQUFNLE1BQU0sR0FBRyxNQUFNLG1DQUFlLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUV2RSxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUEsQ0FBQztRQS9DRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0NBK0NKO0FBRVksUUFBQSxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQUMsa0JBQVUsQ0FBQyxDQUFDIn0=