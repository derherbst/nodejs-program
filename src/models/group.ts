import { DataTypes } from 'sequelize';
import Joi from '@hapi/joi';
import { sequelize } from '../config/database';

export const groupSchema = Joi.object({
    id: Joi.string().uuid().optional(),
    name: Joi.string().required(),
    permissions: Joi.array().items(Joi.string()),
});

const GroupModel = sequelize.define('groups', {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
    },
    permissions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
}, {
    timestamps: false,
});

GroupModel.associate = (models) => {
    GroupModel.belongsToMany(models.Users, {
        through: 'GroupUsers',
        as: 'users',
        foreignKey: 'groupId'
    });
};

export const Group = GroupModel;