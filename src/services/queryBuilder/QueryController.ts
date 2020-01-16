import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError, verifyJwt } from '@middleware';
import * as orm from "../../ormapis/requests";

/**
 * @param req 
 * @param res  
 */
export const getQuery = async (req: Request, res: Response) => {
    try {
        const  result= await orm.get(req.originalUrl);
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
export const saveQueryBuilder = async (req: Request, res: Response) => {
    try {
        const  result= await orm.post(req.originalUrl, req.body);
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
        const  result= await orm.get(req.originalUrl);
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
        const  result= await orm.get(req.originalUrl);
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
        const  result= await orm.get(req.originalUrl);
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
        const  result= await orm.get(req.originalUrl);
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
        const  result= await orm.get(req.originalUrl);
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
        const  result= await orm.get(req.originalUrl);
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
export const getHadoopColumn = async (req: Request, res: Response) => {
    try {
        const  result= await orm.get(req.originalUrl);
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
export const getTableColumnInfo = async (req: Request, res: Response) => {
    try {
        const  result= await orm.get(req.originalUrl);
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
export const getTableObjectInfo = async (req: Request, res: Response) => {
    try {
        const  result= await orm.get(req.originalUrl);
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
export const getHadoopTablesColumns = async (req: Request, res: Response) => {
    try {
        const  result= await orm.get(req.originalUrl);
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
export const getAppendedColumns = async (req: Request, res: Response) => {
    try {
        const  result= await orm.get(req.originalUrl);
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
export const getProgramOrderId = async (req: Request, res: Response) => {
    try {
        const  result= await orm.get(req.originalUrl);
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
export const getPrimaryKeys = async (req: Request, res: Response) => {
    try {
        const  result= await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};