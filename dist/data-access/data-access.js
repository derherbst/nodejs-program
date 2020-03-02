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
            return yield this.model.findByPk(id);
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
            return yield this.model.findAll(limit, order);
        });
        this.getAutoSuggestUsers = ({ limit, loginSubstring }) => __awaiter(this, void 0, void 0, function* () {
            const order = ['login', 'ASC'];
            return yield this.model.findAll({
                limit,
                where: {
                    login: {
                        [sequelize_1.Op.like]: `%${loginSubstring}%`,
                    },
                },
                order,
            });
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
            return yield this.model.create(data);
        });
        this.model = model;
    }
}
exports.dataAccess = new DataAccess(user_1.UserModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hY2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS1hY2Nlc3MvZGF0YS1hY2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBMkM7QUFDM0MseUNBQStCO0FBRS9CLE1BQU0sVUFBVTtJQUVaLFlBQVksS0FBSztRQUlqQixnQkFBVyxHQUFHLENBQU8sRUFBVSxFQUFFLEVBQUU7WUFDL0IsT0FBTyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQSxDQUFDO1FBRUYsb0JBQWUsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUN0QixLQUFLLEVBQUU7b0JBQ0gsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLO2lCQUNqQjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQUVGLGdCQUFXLEdBQUcsQ0FBTyxLQUFhLEVBQUUsRUFBRTtZQUNsQyxNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQzNCLEtBQUssRUFDTCxLQUFLLENBQ1IsQ0FBQztRQUNOLENBQUMsQ0FBQSxDQUFDO1FBRUYsd0JBQW1CLEdBQUcsQ0FBTyxFQUFDLEtBQUssRUFBRSxjQUFjLEVBQUMsRUFBRSxFQUFFO1lBQ3BELE1BQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQy9CLE9BQU8sTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDNUIsS0FBSztnQkFDTCxLQUFLLEVBQUU7b0JBQ0gsS0FBSyxFQUFFO3dCQUNILENBQUMsY0FBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksY0FBYyxHQUFHO3FCQUNuQztpQkFDSjtnQkFDRCxLQUFLO2FBQ1IsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFBLENBQUM7UUFFRixlQUFVLEdBQUcsQ0FBTyxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUMsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLG1CQUFLLFVBQVUsR0FBRztnQkFDdEMsS0FBSyxFQUFFO29CQUNILEVBQUU7aUJBQ0w7Z0JBQ0QsU0FBUyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFBLENBQUM7UUFFRixlQUFVLEdBQUcsQ0FBTyxJQUFJLEVBQUUsRUFBRTtZQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFBLENBQUM7UUEvQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztDQStDSjtBQUVZLFFBQUEsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLGdCQUFTLENBQUMsQ0FBQyJ9