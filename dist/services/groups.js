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
            return yield data_group_access_1.dataGroupAccess.getGroupById(id);
        });
        this.getAllGroups = () => __awaiter(this, void 0, void 0, function* () {
            return yield data_group_access_1.dataGroupAccess.getAllGroups();
        });
        this.createGroup = (inputData) => __awaiter(this, void 0, void 0, function* () {
            const group = yield data_group_access_1.dataGroupAccess.getGroupByParams('name', inputData.name);
            if (group)
                return;
            return data_group_access_1.dataGroupAccess.createGroup(inputData);
        });
        this.updateGroup = ({ id, updateBody }) => __awaiter(this, void 0, void 0, function* () {
            const group = yield data_group_access_1.dataGroupAccess.getGroupById(id);
            if (!group)
                return;
            return yield data_group_access_1.dataGroupAccess.updateGroup({ id, updateBody });
        });
        this.deleteGroup = (id) => __awaiter(this, void 0, void 0, function* () {
            const group = yield data_group_access_1.dataGroupAccess.getGroupById(id);
            if (!group)
                return;
            return yield data_group_access_1.dataGroupAccess.deleteGroup(id);
        });
        this.addUsersToGroup = (groupId, userIds) => __awaiter(this, void 0, void 0, function* () {
            return yield data_group_access_1.dataGroupAccess.addUsersToGroup(groupId, userIds);
        });
        this.model = model;
    }
}
exports.groupService = new Group(group_1.GroupModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL2dyb3Vwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUEyQztBQUMzQyx3RUFBaUU7QUFFakUsTUFBTSxLQUFLO0lBRVAsWUFBWSxLQUFLO1FBSWpCLGlCQUFZLEdBQUcsQ0FBTyxFQUFVLEVBQUUsRUFBRTtZQUNoQyxPQUFPLE1BQU0sbUNBQWUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFBLENBQUM7UUFFRixpQkFBWSxHQUFHLEdBQVMsRUFBRTtZQUN0QixPQUFPLE1BQU0sbUNBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNoRCxDQUFDLENBQUEsQ0FBQztRQUVGLGdCQUFXLEdBQUcsQ0FBTyxTQUFTLEVBQUUsRUFBRTtZQUM5QixNQUFNLEtBQUssR0FBRyxNQUFNLG1DQUFlLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU3RSxJQUFJLEtBQUs7Z0JBQUUsT0FBTztZQUVsQixPQUFPLG1DQUFlLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQSxDQUFDO1FBRUYsZ0JBQVcsR0FBRyxDQUFPLEVBQUMsRUFBRSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUU7WUFDckMsTUFBTSxLQUFLLEdBQUcsTUFBTSxtQ0FBZSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVyRCxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPO1lBRW5CLE9BQU8sTUFBTSxtQ0FBZSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQSxDQUFDO1FBRUYsZ0JBQVcsR0FBRyxDQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sS0FBSyxHQUFHLE1BQU0sbUNBQWUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFckQsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTztZQUVuQixPQUFPLE1BQU0sbUNBQWUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFBLENBQUM7UUFFRixvQkFBZSxHQUFHLENBQU8sT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ3pDLE9BQU8sTUFBTSxtQ0FBZSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFBLENBQUM7UUFyQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztDQXFDSjtBQUVZLFFBQUEsWUFBWSxHQUFHLElBQUksS0FBSyxDQUFDLGtCQUFVLENBQUMsQ0FBQyJ9