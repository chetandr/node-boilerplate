
import { logger } from '@shared';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError } from '@shared';
import { ParamsDictionary } from 'express-serve-static-core';

import {getRepository} from "typeorm";
import {NextFunction, Request, Response, Router, Express} from "express";
import {User} from "../entity/User";

// Init shared
const router = Router();
// const userDao = new UserDao();


/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
    try {
        const userRepository = getRepository(User);
        const users = await userRepository.find();
        return res.status(OK).json({users});
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

/******************************************************************************
 *                       Add One - "POST /api/users/add"
 ******************************************************************************/

router.post('/add', async (req: Request, res: Response) => {
    try {
        const userRepository = getRepository(User);
        const { user } = req.body;
        console.log(user);
        if (!user) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }

        var userData = new User();
        userData.firstName = user.firstName;
        userData.lastName = user.lastName;
        userData.age = user.age;
        await userRepository.save(userData);
        return res.status(CREATED).end();
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

/******************************************************************************
 *                       Update - "PUT /api/users/update/:id"
 ******************************************************************************/

router.put('/update/:id', async (req: Request, res: Response) => {
    try {
        const userRepository = getRepository(User);
        let id = Number(req.params.id);
        const { user } = req.body;

        if (!user) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }

        await userRepository.update(
            id,
            user,
        );
        return res.status(OK).end();
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

/******************************************************************************
 *                    Delete - "DELETE /api/users/delete/:id"
 ******************************************************************************/

router.delete('/delete/:id', async (req: Request, res: Response) => {
    try {
        const userRepository = getRepository(User);
        const id = Number(req.params.id);
        await userRepository.delete(id);
        return res.status(OK).end();
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
