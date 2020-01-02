import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError, verifyJwt } from '@middleware';
import * as orm from "../../ormapis/requests";

export const getLdapGroups = async (req: Request, res: Response) => {
    try {
        // const tags = await userService.getAllTags();
        let result: any = await orm.get(req.originalUrl);
        return res.status(OK).json(result);

    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};