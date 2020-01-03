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
        const result = await orm.get(req.originalUrl);
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
        let result: any = await orm.post(req.originalUrl, program);
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
        let result: any = await orm.put(req.originalUrl, user);
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
        let result: any = await orm.remove(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json({
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

 /**
  *  Get Program tags
  */
export const getProgramtags = async (req: Request, res: Response) => {
    try {
        const program_id = Number(req.params.id);
        let result: any = await orm.remove(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json({
            error: err.message,
        });
    }
}

 /**
  *  Get Program Types tree
  */
 export const getProgramTypeTree = async (req: Request, res: Response) => {
    try {
        let result: any = await orm.get(req.originalUrl);
        return res.status(OK).json({
            message: "success",
            data: result,
        });

    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json({
            error: err.message,
        });
    }
}


/**
 * 
 * @param req 
 * @param res  
 * Gets All programs by Environment. eg. By Dev, Staging, Production
 */
export const getProgrambyEnv = async (req: Request, res: Response) => {
    try {
        const envnum = Number(req.params.envnum);
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};