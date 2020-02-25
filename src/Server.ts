import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import BaseRouter from './routes';
import { verifyJwt } from '@middleware'
import cors from 'cors';

// Init express
const app = express();
// Add middleware/settings/routes to express.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
//app.use(verifyJwt)

/** To resolve CORS issue, this should be use before base router */
app.use(cors())

app.use('/', BaseRouter);
/**
 * Point express to the 'views' directory. If you're using a
 * single-page-application framework like react or angular
 * which has its own development server, you might want to
 * configure this to only serve the index file while in
 * production mode.
 */
// Export express instance
export default app;
