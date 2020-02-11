export const USER_MIN_AGE = 4;
export const USER_MAX_AGE = 130;
export const PORT = 3004;

export const CREATE_TABLE_USERS = 'CREATE TABLE IF NOT EXISTS "users" ("id" UUID NOT NULL UNIQUE, "login" VARCHAR(255) NOT NULL, "password" VARCHAR(255) NOT NULL, "age" INTEGER NOT NULL, "isDeleted" BOOLEAN NOT NULL, PRIMARY KEY ("id"));';
export const DROP_TABLE_USERS = 'DROP TABLE "users";';

export const CREATE_TABLE_GROUPS = 'CREATE TABLE IF NOT EXISTS "groups" ("id" UUID NOT NULL UNIQUE, "name" VARCHAR(255) NOT NULL, "permissions" VARCHAR(255) NOT NULL, PRIMARY KEY ("id"));';
export const DROP_TABLE_GROUPS = 'DROP TABLE "groups";';

export const CREATE_USER_GROUPS_TABLE = `CREATE TABLE IF NOT EXISTS "UserGroups" (
    "id" UUID NOT NULL,
    "groupId" UUID NOT NULL REFERENCES "groups" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    "userId" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    UNIQUE ("groupId", "userId"),
    PRIMARY KEY ("id")
);`;
export const DROP_USER_GROUPS_TABLE = 'DROP TABLE IF EXISTS "UserGroup" CASCADE';