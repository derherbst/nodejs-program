import { DataTypes } from 'sequelize';
import Joi from '@hapi/joi';
import { sequelize } from '../config/database';
import { USER_MAX_AGE, USER_MIN_AGE } from '../helpers/helpers';

export const userSchema = Joi.object({
    id: Joi.string().uuid().optional(),
    login: Joi.string().required(),
    password: Joi.string().required().alphanum(),
    age: Joi.number().min(USER_MIN_AGE).max(USER_MAX_AGE).required(),
    isDeleted: Joi.boolean(),
});

export const UserModel = sequelize.define('users', {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    login: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER,
        validate: {
            min: 4,
            max: 130,
        }
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    }

}, {
    timestamps: false,
});