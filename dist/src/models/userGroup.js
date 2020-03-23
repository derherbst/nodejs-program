"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
exports.UserGroup = database_1.sequelize.define('UserGroups', {
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    groupId: {
        type: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
    },
    userId: {
        type: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        references: {
            model: 'groups',
            key: 'id',
        },
    },
}, {
    timestamps: false,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy91c2VyR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBc0M7QUFFdEMsaURBQStDO0FBRWxDLFFBQUEsU0FBUyxHQUFHLG9CQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtJQUNwRCxFQUFFLEVBQUU7UUFDQSxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFlBQVksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDOUIsVUFBVSxFQUFFLElBQUk7UUFDaEIsU0FBUyxFQUFFLEtBQUs7S0FDbkI7SUFDRCxPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRTtZQUNSLEtBQUssRUFBRSxPQUFPO1lBQ2QsR0FBRyxFQUFFLElBQUk7U0FDWjtLQUNKO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUU7WUFDUixLQUFLLEVBQUUsUUFBUTtZQUNmLEdBQUcsRUFBRSxJQUFJO1NBQ1o7S0FDSjtDQUNKLEVBQUU7SUFDQyxVQUFVLEVBQUUsS0FBSztDQUNwQixDQUFDLENBQUMifQ==