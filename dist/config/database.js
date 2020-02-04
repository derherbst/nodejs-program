"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("./config");
exports.sequelize = new sequelize_1.Sequelize(config_1.config.database, config_1.config.username, config_1.config.password, {
    dialect: 'postgres',
    host: config_1.config.host,
    port: config_1.config.port,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2RhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXNDO0FBQ3RDLHFDQUFrQztBQUVyQixRQUFBLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsZUFBTSxDQUFDLFFBQVEsRUFBRSxlQUFNLENBQUMsUUFBUSxFQUFFLGVBQU0sQ0FBQyxRQUFRLEVBQUU7SUFDdEYsT0FBTyxFQUFFLFVBQVU7SUFDbkIsSUFBSSxFQUFFLGVBQU0sQ0FBQyxJQUFJO0lBQ2pCLElBQUksRUFBRSxlQUFNLENBQUMsSUFBSTtJQUVqQixJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsRUFBRSxDQUFDO1FBQ04sT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsS0FBSztLQUNkO0NBQ0osQ0FBQyxDQUFDIn0=