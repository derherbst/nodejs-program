import { DataTypes } from 'sequelize';
import Joi from '@hapi/joi';
import { sequelize } from '../config/database';
import { UserModel } from './user';
import { UserGroup } from './userGroup';

export const groupSchema = Joi.object({
    id: Joi.string().uuid().optional(),
    name: Joi.string().required(),
    permissions: Joi.array().items(Joi.string()),
});

const Groups = sequelize.define('groups', {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    permissions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
}, {
    timestamps: false,
});

Groups.associate = (models) => {
    Groups.belongsToMany(models.UserModel, {
        through: 'UserGroups',
        as: 'users',
        foreignKey: 'groupId'
    });
};

export const GroupModel = Groups;