import { sequelize } from './config/database';
import { CREATE_TABLE_USERS, DROP_TABLE_USERS } from './helpers/helpers';

sequelize
    .query(CREATE_TABLE_USERS)
    .then(() => console.log('USERS TABLE CREATED...'))
    .catch((err) => console.error(err));