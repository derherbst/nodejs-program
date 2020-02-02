import { sequelize } from './config/database';
import { CREATE_TABLE, DROP_TABLE } from './helpers/helpers';

sequelize
    .query(CREATE_TABLE)
    .then(() => console.log('TABLE CREATED...'))
    .catch((err) => console.log(err));