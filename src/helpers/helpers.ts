export const USER_MIN_AGE = 4;
export const USER_MAX_AGE = 130;
export const PORT = 3004;

export const CREATE_TABLE = 'CREATE TABLE IF NOT EXISTS "users" ("id" UUID NOT NULL , "login" VARCHAR(255) NOT NULL, "password" VARCHAR(255) NOT NULL, "age" INTEGER NOT NULL, "isDeleted" BOOLEAN NOT NULL, PRIMARY KEY ("id"));';
export const DROP_TABLE = 'DROP TABLE "users";';