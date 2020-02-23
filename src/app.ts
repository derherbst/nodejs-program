import { config } from 'dotenv';
config();
import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import pino from 'pino';
import expressPinoLogger from "express-pino-logger";
import { sequelize } from './config/database';
import userRoutes from './routes/users';
import groupRoutes from './routes/groups';
import { PORT } from './helpers/helpers';

sequelize.authenticate()
    .then(() => console.log('DB connected...'))
    .catch((err) => console.log('Error:', err));

const app = express();

console.log(process.env.LOG_LEVEL);

export const logger = pino({
    name: 'user-app',
});

app.use(json());
app.use(expressPinoLogger({
    logger,
}));

app.use('/users', userRoutes);
app.use('/groups', groupRoutes);

app.use((
    err: Error,
    req: Request,
    res: Response,
) => {
    res.status(500).json({ message: err.message });
});

app.listen(PORT);
