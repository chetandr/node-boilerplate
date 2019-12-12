import './LoadEnv'; // Must be the first import
import logger from 'morgan';
import "reflect-metadata";
import {createConnection} from "typeorm";
import express from 'express';
import * as bodyParser from "body-parser";
import BaseRouter from './routes';

createConnection().then(async (connection) => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    // Add middleware/settings/routes to express.
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use('/api', BaseRouter);

    // start express server
    const port = Number(process.env.PORT || 3000);
    app.listen(port);

    // insert new users for test
    /* await connection.manager.save(connection.manager.create(User, {
        firstName: "Timber",
        lastName: "Saw",
        age: 27
    }));
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Phantom",
        lastName: "Assassin",
        age: 24
    }));*/

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));

