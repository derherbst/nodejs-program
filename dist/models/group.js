"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const joi_1 = __importDefault(require("@hapi/joi"));
const database_1 = require("../config/database");
exports.groupSchema = joi_1.default.object({
    id: joi_1.default.string().uuid().optional(),
    name: joi_1.default.string().required(),
    permissions: joi_1.default.array().items(joi_1.default.string()),
});
const Groups = database_1.sequelize.define('groups', {
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    permissions: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
}, {
    timestamps: false,
});
Groups.associate = (models) => {
    Groups.belongsToMany(models.UserModel, {
        through: models.UserGroup,
        as: 'users',
        foreignKey: 'groupId'
    });
};
exports.GroupModel = Groups;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL2dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQXNDO0FBQ3RDLG9EQUE0QjtBQUM1QixpREFBK0M7QUFJbEMsUUFBQSxXQUFXLEdBQUcsYUFBRyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxFQUFFLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNsQyxJQUFJLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM3QixXQUFXLEVBQUUsYUFBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7Q0FDL0MsQ0FBQyxDQUFDO0FBRUgsTUFBTSxNQUFNLEdBQUcsb0JBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0lBQ3RDLEVBQUUsRUFBRTtRQUNBLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsWUFBWSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUM5QixVQUFVLEVBQUUsSUFBSTtRQUNoQixTQUFTLEVBQUUsS0FBSztRQUNoQixNQUFNLEVBQUUsSUFBSTtLQUNmO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztRQUNoQixNQUFNLEVBQUUsSUFBSTtLQUNmO0lBQ0QsV0FBVyxFQUFFO1FBQ1QsSUFBSSxFQUFFLHFCQUFTLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLFNBQVMsRUFBRSxLQUFLO0tBQ25CO0NBQ0osRUFBRTtJQUNDLFVBQVUsRUFBRSxLQUFLO0NBQ3BCLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtJQUMxQixNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7UUFDbkMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1FBQ3pCLEVBQUUsRUFBRSxPQUFPO1FBQ1gsVUFBVSxFQUFFLFNBQVM7S0FDeEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRVcsUUFBQSxVQUFVLEdBQUcsTUFBTSxDQUFDIn0=