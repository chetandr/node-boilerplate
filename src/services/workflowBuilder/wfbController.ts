import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError, verifyJwt } from '@middleware';
import * as orm from "../../ormapis/requests";

/**
 * 
 * @param req 
 * @param res 
 * Get Catgories
 */

export const getCategories = async (req: Request, res: Response) => {
    try {
        const result = await orm.get('wfb/categories');
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get Statuses
 */

export const getStatuses = async (req: Request, res: Response) => {
    try {
        const result = await orm.get('wfb/statuses');
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get SubjectAreas
 */

export const getSubjectAreas = async (req: Request, res: Response) => {
    try {
        const result = await orm.get('wfb/subjectAreas');
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};


