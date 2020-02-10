import { sequelize } from './config/database';
import { CREATE_TABLE_GROUPS, DROP_TABLE_GROUPS } from './helpers/helpers';

sequelize
    .query(CREATE_TABLE_GROUPS)
    .then(() => console.log('GROUPS TABLE CREATED...'))
    .catch((err) => console.log(err));