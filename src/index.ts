import './LoadEnv';
import app from 'src/Server';
import { logger } from '@shared';
import {createConnection} from "typeorm";
import "reflect-metadata";

createConnection().then(async () => {
    const port = Number(process.env.PORT || 3000);
    await app.listen(port, () => {
        logger.info('Express server started on port: ' + port);
    });
}).catch(error => console.log(error));