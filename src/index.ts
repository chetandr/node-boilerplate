import './LoadEnv';
import app from './Server';
import { logger } from '@middleware';
import { createConnection } from "typeorm";
import "reflect-metadata";

createConnection().then(async () => {
    const port = Number(process.env.PORT || 3000);
    await app.listen(port, () => {
        logger.info('Express server started on port: ' + port);
    });
}).catch(error => console.log(error));