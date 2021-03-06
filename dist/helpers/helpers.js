"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_MIN_AGE = 4;
exports.USER_MAX_AGE = 130;
exports.PORT = 3004;
exports.CREATE_TABLE_USERS = 'CREATE TABLE IF NOT EXISTS "users" ("id" UUID NOT NULL UNIQUE, "login" VARCHAR(255) NOT NULL, "password" VARCHAR(255) NOT NULL, "age" INTEGER NOT NULL, "isDeleted" BOOLEAN NOT NULL, PRIMARY KEY ("id"));';
exports.DROP_TABLE_USERS = 'DROP TABLE "users";';
exports.CREATE_TABLE_GROUPS = 'CREATE TABLE IF NOT EXISTS "groups" ("id" UUID NOT NULL UNIQUE, "name" VARCHAR(255) NOT NULL, "permissions" VARCHAR(255) NOT NULL, PRIMARY KEY ("id"));';
exports.DROP_TABLE_GROUPS = 'DROP TABLE "groups";';
exports.CREATE_USER_GROUPS_TABLE = `CREATE TABLE IF NOT EXISTS "UserGroups" (
    "id" UUID NOT NULL,
    "groupId" UUID NOT NULL REFERENCES "groups" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    "userId" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    UNIQUE ("groupId", "userId"),
    PRIMARY KEY ("id")
);`;
exports.DROP_USER_GROUPS_TABLE = 'DROP TABLE IF EXISTS "UserGroup" CASCADE';
exports.failedSearchResponse = (object) => ({
    status: 'failed',
    message: `Could not find ${object}!`
});
exports.internalError = (res) => {
    return res.status(500).send('Internal error');
};
exports.successResponse = (res, body) => {
    return res.status(200).send(body);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDakIsUUFBQSxZQUFZLEdBQUcsR0FBRyxDQUFDO0FBQ25CLFFBQUEsSUFBSSxHQUFHLElBQUksQ0FBQztBQUVaLFFBQUEsa0JBQWtCLEdBQUcsNE1BQTRNLENBQUM7QUFDbE8sUUFBQSxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQztBQUV6QyxRQUFBLG1CQUFtQixHQUFHLHlKQUF5SixDQUFDO0FBQ2hMLFFBQUEsaUJBQWlCLEdBQUcsc0JBQXNCLENBQUM7QUFFM0MsUUFBQSx3QkFBd0IsR0FBRzs7Ozs7O0dBTXJDLENBQUM7QUFDUyxRQUFBLHNCQUFzQixHQUFHLDBDQUEwQyxDQUFDO0FBRXBFLFFBQUEsb0JBQW9CLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsTUFBTSxFQUFFLFFBQVE7SUFDaEIsT0FBTyxFQUFFLGtCQUFrQixNQUFNLEdBQUc7Q0FDdkMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxhQUFhLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNqQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDbEQsQ0FBQyxDQUFDO0FBRVcsUUFBQSxlQUFlLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDekMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUMifQ==