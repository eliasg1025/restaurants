import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { PORT } from './config';

import routes from './routes';
import { handleError } from './middlewares/error.middleware';
import { handleNotFound } from 'middlewares/not-found.middleware';

const app: Application = express();

/**
 * Settings
 */
app.set('port', PORT);

/**
 * Middlewares
 */
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

/**
 * Routes
 */
app.use('/', routes);
app.use(handleError);
app.use(handleNotFound);

export default app;
