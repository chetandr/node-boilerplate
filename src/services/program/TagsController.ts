import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError, verifyJwt } from '@middleware';
import * as orm from "../../ormapis/requests";

/**
 * 
 * @param req 
 * @param res  
 * Gets All programs 
 */
export const getTags = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json({
            message: "success",
            data: result,
        });
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

