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
export const getProgram = async (req: Request, res: Response) => {
    try {
        const result = await orm.get('programs');
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
 * Add programs 
 */

export const addProgram = async (req: Request, res: Response) => {
    try {
        const program = req.body;
        if (!program) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        let result: any = await orm.post(`program`, program);
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
 * Update Program
 */
export const updateProgram = async (req: Request, res: Response) => {
    try {
        let id = Number(req.params.id);
        const user = req.body;

        if (!user || !id) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        let result: any = await orm.put(`programs/${id}`, user);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
}

/**
 * 
 * @param req 
 * @param res 
 * Deletes program
 */
export const deleteProgram = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        let result: any = await orm.remove(`users/${id}`);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
}