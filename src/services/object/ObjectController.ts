import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError, verifyJwt } from '@middleware';
import * as orm from "../../ormapis/requests";

/**
 * @param req 
 * @param res  
 */
export const getObject = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        //const response = [{datatype:"COLUMN_PICKER"},{datatype:"DATASET"},{datatype:"DATE"},{datatype:"DIRECTORY"},{datatype:"DYNAMIC_LIST"},{datatype:"EMPLOYEE"},{datatype:"NUMERIC"},{datatype:"PID"},{datatype:"STATIC_LIST"},{datatype:"TEXT"},{datatype:"TEXTAREA"}]
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

/**
 * @param req 
 * @param res
 */
export const getHadoopMetaData = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        //const response = [{datatype:"COLUMN_PICKER"},{datatype:"DATASET"},{datatype:"DATE"},{datatype:"DIRECTORY"},{datatype:"DYNAMIC_LIST"},{datatype:"EMPLOYEE"},{datatype:"NUMERIC"},{datatype:"PID"},{datatype:"STATIC_LIST"},{datatype:"TEXT"},{datatype:"TEXTAREA"}]
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

/**
 * @param req 
 * @param res
 */
export const getHadoopTableType = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        //const response = [{datatype:"COLUMN_PICKER"},{datatype:"DATASET"},{datatype:"DATE"},{datatype:"DIRECTORY"},{datatype:"DYNAMIC_LIST"},{datatype:"EMPLOYEE"},{datatype:"NUMERIC"},{datatype:"PID"},{datatype:"STATIC_LIST"},{datatype:"TEXT"},{datatype:"TEXTAREA"}]
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

/**
 * @param req 
 * @param res
 */
export const getXml = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        //const response = [{datatype:"COLUMN_PICKER"},{datatype:"DATASET"},{datatype:"DATE"},{datatype:"DIRECTORY"},{datatype:"DYNAMIC_LIST"},{datatype:"EMPLOYEE"},{datatype:"NUMERIC"},{datatype:"PID"},{datatype:"STATIC_LIST"},{datatype:"TEXT"},{datatype:"TEXTAREA"}]
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

/**
 * @param req 
 * @param res
 */
export const getFailDesc = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        //const response = [{datatype:"COLUMN_PICKER"},{datatype:"DATASET"},{datatype:"DATE"},{datatype:"DIRECTORY"},{datatype:"DYNAMIC_LIST"},{datatype:"EMPLOYEE"},{datatype:"NUMERIC"},{datatype:"PID"},{datatype:"STATIC_LIST"},{datatype:"TEXT"},{datatype:"TEXTAREA"}]
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

/**
 * @param req 
 * @param res
 */
export const getColumns = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        //const response = [{datatype:"COLUMN_PICKER"},{datatype:"DATASET"},{datatype:"DATE"},{datatype:"DIRECTORY"},{datatype:"DYNAMIC_LIST"},{datatype:"EMPLOYEE"},{datatype:"NUMERIC"},{datatype:"PID"},{datatype:"STATIC_LIST"},{datatype:"TEXT"},{datatype:"TEXTAREA"}]
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

/**
 * @param req 
 * @param res
 */
export const getDistinctValues = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        //const response = [{datatype:"COLUMN_PICKER"},{datatype:"DATASET"},{datatype:"DATE"},{datatype:"DIRECTORY"},{datatype:"DYNAMIC_LIST"},{datatype:"EMPLOYEE"},{datatype:"NUMERIC"},{datatype:"PID"},{datatype:"STATIC_LIST"},{datatype:"TEXT"},{datatype:"TEXTAREA"}]
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

export const addObject = async (req: Request, res: Response) => {
    /* try {
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
    } */
    return res.status(BAD_REQUEST).json();
};

/**
 * 
 * @param req 
 * @param res 
 * Update Program
 */
export const updateObject = async (req: Request, res: Response) => {
    /* try {
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
    } */
    return res.status(BAD_REQUEST).json();
}

/**
 * 
 * @param req 
 * @param res 
 * Deletes program
 */
export const deleteObject = async (req: Request, res: Response) => {
    /* try {
        const id = Number(req.params.id);
        let result: any = await orm.remove(`users/${id}`);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    } */
    return res.status(BAD_REQUEST).json();
}