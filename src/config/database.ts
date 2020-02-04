import { Sequelize } from 'sequelize';
import { config } from './config';

export const sequelize = new Sequelize(config.database, config.username, config.password, {
    dialect: 'postgres',
    host: config.host,
    port: config.port,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

