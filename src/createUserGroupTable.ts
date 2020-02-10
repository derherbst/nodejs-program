import { sequelize } from './config/database';
import { CREATE_USER_GROUPS_TABLE, DROP_USER_GROUPS_TABLE } from './helpers/helpers';

sequelize
    .query(CREATE_USER_GROUPS_TABLE)
    .then(() => console.log('USER-GROUP TABLE CREATED...'))
    .catch((err) => console.log(err));