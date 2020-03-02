"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const joi_1 = __importDefault(require("@hapi/joi"));
const database_1 = require("../config/database");
const helpers_1 = require("../helpers/helpers");
exports.userSchema = joi_1.default.object({
    id: joi_1.default.string().uuid().optional(),
    login: joi_1.default.string().required(),
    password: joi_1.default.string().required().alphanum(),
    age: joi_1.default.number().min(helpers_1.USER_MIN_AGE).max(helpers_1.USER_MAX_AGE).required(),
    isDeleted: joi_1.default.boolean(),
});
const Users = database_1.sequelize.define('users', {
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    login: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
        validate: {
            min: 4,
            max: 130,
        }
    },
    isDeleted: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    }
}, {
    timestamps: false,
});
Users.associate = (models) => {
    Users.belongsToMany(models.GroupModel, {
        through: 'UserGroups',
        as: 'groups',
        foreignKey: 'userId'
    });
};
exports.UserModel = Users;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDQUFzQztBQUN0QyxvREFBNEI7QUFDNUIsaURBQStDO0FBQy9DLGdEQUFnRTtBQUVuRCxRQUFBLFVBQVUsR0FBRyxhQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2pDLEVBQUUsRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ2xDLEtBQUssRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzlCLFFBQVEsRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzVDLEdBQUcsRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsc0JBQVksQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUNoRSxTQUFTLEVBQUUsYUFBRyxDQUFDLE9BQU8sRUFBRTtDQUMzQixDQUFDLENBQUM7QUFFSCxNQUFNLEtBQUssR0FBRyxvQkFBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7SUFDcEMsRUFBRSxFQUFFO1FBQ0EsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixZQUFZLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQzlCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFNBQVMsRUFBRSxLQUFLO0tBQ25CO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtLQUN6QjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07S0FDekI7SUFDRCxHQUFHLEVBQUU7UUFDRCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO1FBQ3ZCLFFBQVEsRUFBRTtZQUNOLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEdBQUc7U0FDWDtLQUNKO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztRQUN2QixZQUFZLEVBQUUsS0FBSztRQUNuQixTQUFTLEVBQUUsS0FBSztLQUNuQjtDQUNKLEVBQUU7SUFDQyxVQUFVLEVBQUUsS0FBSztDQUNwQixDQUFDLENBQUM7QUFFSCxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7SUFDekIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1FBQ3JDLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLEVBQUUsRUFBRSxRQUFRO1FBQ1osVUFBVSxFQUFFLFFBQVE7S0FDckIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRVMsUUFBQSxTQUFTLEdBQUcsS0FBSyxDQUFDIn0=