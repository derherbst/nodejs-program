"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./config/database");
const helpers_1 = require("./helpers/helpers");
database_1.sequelize
    .query(helpers_1.CREATE_USER_GROUPS_TABLE)
    .then(() => console.log('USER-GROUP TABLE CREATED...'))
    .catch((err) => console.error(err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVXNlckdyb3VwVGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3JlYXRlVXNlckdyb3VwVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBOEM7QUFDOUMsK0NBQXFGO0FBRXJGLG9CQUFTO0tBQ0osS0FBSyxDQUFDLGtDQUF3QixDQUFDO0tBQy9CLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7S0FDdEQsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMifQ==