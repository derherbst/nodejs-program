import { DataTypes } from 'sequelize';
import Joi from '@hapi/joi';
import { sequelize } from '../config/database';

export const UserGroup = sequelize.define('userGroup', {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    groupId: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
    },
    userId: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        references: {
            model: 'groups',
            key: 'id',
        },
    },
}, {
    timestamps: false,
});
