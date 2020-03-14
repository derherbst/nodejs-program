import { config } from 'dotenv';
config();
import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { sequelize } from './config/database';
import userRoutes from './routes/users';
import groupRoutes from './routes/groups';
import { PORT } from './helpers/helpers';
import { logger } from './logger/logger';

sequelize.authenticate()
    .then(() => console.log('DB connected...'))
    .catch((err) => console.log('Error:', err));

const app = express();

app.use(cors());
app.use(json());

app.use('/users', userRoutes);
app.use('/groups', groupRoutes);

app.use((
    err: Error,
    req: Request,
    res: Response,
) => {
    logger.error(`ERROR: ${err}`);
    res.status(500).json({ message: err.message });
});

app.listen(PORT);
