"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./config/database");
const helpers_1 = require("./helpers/helpers");
const config_1 = require("./config/config");
console.log(`Creating database "${config_1.config.database}"...`);
database_1.sequelize.query(`CREATE DATABASE IF NOT EXISTS "${config_1.config.database}"`)
    .then(() => console.log('Database created'));
database_1.sequelize
    .query(helpers_1.CREATE_TABLE)
    .then(() => console.log('TABLE CREATED...'))
    .catch((err) => console.log(err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3JlYXRlVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBOEM7QUFDOUMsK0NBQTZEO0FBQzdELDRDQUF5QztBQUV6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixlQUFNLENBQUMsUUFBUSxNQUFNLENBQUMsQ0FBQztBQUN6RCxvQkFBUyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsZUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDO0tBQ2hFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUVqRCxvQkFBUztLQUNKLEtBQUssQ0FBQyxzQkFBWSxDQUFDO0tBQ25CLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDM0MsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMifQ==