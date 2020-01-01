import './LoadEnv';
import app from './Server';
import { logger } from '@middleware';
import "reflect-metadata";


const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});
