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
const sequelize_1 = require("sequelize");
class DataAccess {
    constructor(model) {
        this.getUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.findByPk(id);
            return result;
        });
        this.getUserByParams = (param, value) => {
            return this.model.findOne({
                where: {
                    [param]: value,
                },
            });
        };
        this.getAllUsers = (limit) => __awaiter(this, void 0, void 0, function* () {
            const order = ['login', 'ASC'];
            const result = yield this.model.findAll(limit, order);
            return result;
        });
        this.getAutoSuggestUsers = ({ limit, loginSubstring }) => __awaiter(this, void 0, void 0, function* () {
            const order = ['login', 'ASC'];
            const result = yield this.model.findAll({
                limit,
                where: {
                    login: {
                        [sequelize_1.Op.like]: `%${loginSubstring}%`,
                    },
                },
                order,
            });
            return result;
        });
        this.updateUser = ({ id, updateBody }) => __awaiter(this, void 0, void 0, function* () {
            return this.model.update(Object.assign({}, updateBody), {
                where: {
                    id,
                },
                returning: true,
            });
        });
        this.createUser = (data) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.create(data);
            return result;
        });
        this.model = model;
    }
}
exports.dataAccess = new DataAccess(user_1.UserModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hY2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS1hY2Nlc3MvZGF0YS1hY2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBMkM7QUFDM0MseUNBQStCO0FBRS9CLE1BQU0sVUFBVTtJQUVaLFlBQVksS0FBSztRQUlqQixnQkFBVyxHQUFHLENBQU8sRUFBVSxFQUFFLEVBQUU7WUFDL0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUU3QyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUEsQ0FBQztRQUVGLG9CQUFlLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDdEIsS0FBSyxFQUFFO29CQUNILENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSztpQkFDakI7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFFRixnQkFBVyxHQUFHLENBQU8sS0FBYSxFQUFFLEVBQUU7WUFDbEMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDL0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDbkMsS0FBSyxFQUNMLEtBQUssQ0FDUixDQUFBO1lBRUQsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBLENBQUM7UUFFRix3QkFBbUIsR0FBRyxDQUFPLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBQyxFQUFFLEVBQUU7WUFDcEQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDL0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDcEMsS0FBSztnQkFDTCxLQUFLLEVBQUU7b0JBQ0gsS0FBSyxFQUFFO3dCQUNILENBQUMsY0FBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksY0FBYyxHQUFHO3FCQUNuQztpQkFDSjtnQkFDRCxLQUFLO2FBQ1IsQ0FBQyxDQUFDO1lBRUgsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBLENBQUM7UUFFRixlQUFVLEdBQUcsQ0FBTyxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUMsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLG1CQUFLLFVBQVUsR0FBRztnQkFDdEMsS0FBSyxFQUFFO29CQUNILEVBQUU7aUJBQ0w7Z0JBQ0QsU0FBUyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFBLENBQUM7UUFFRixlQUFVLEdBQUcsQ0FBTyxJQUFJLEVBQUUsRUFBRTtZQUN4QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQSxDQUFDO1FBdERFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Q0FzREo7QUFFWSxRQUFBLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxnQkFBUyxDQUFDLENBQUMifQ==