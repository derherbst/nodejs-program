import express, { Request, Response } from 'express';
import { json } from 'body-parser';

import userRoutes from './routes/users';

const app = express();

app.use(json());

app.use('/users', userRoutes);

app.use((
    err: Error,
    req: Request,
    res: Response,
) => {
    res.status(500).json({ message: err.message });
});

app.listen(3004);
