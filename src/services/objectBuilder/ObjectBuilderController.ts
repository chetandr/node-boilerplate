import * as objectService from './ObjectBuilderService'
import { NextFunction, Request, Response } from "express";
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError, logger } from '@middleware';

/**
 * @param req 
 * @param res  
 * Gets object data
 */
export const object = async (req: Request, res: Response) => {
    try {
        const result = await objectService.getObject();
        return res.status(OK).json({
            message: "success!",
            data: result
        });
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
 * Get hadoop meta data
 */
export const hadoopMetaData = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}
/**
 * @param req 
 * @param res  
 * Get hadoop table type
 */
export const hadoopTableType = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}
/**
 * @param req 
 * @param res  
 * Get fail description
 */
export const failDesc = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}
/**
 * @param req 
 * @param res  
 * Get xml data
 */
export const xml = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}
/**
 * @param req 
 * @param res  
 * Add object
 */
export const addObject = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}

/**
 * @param req 
 * @param res  
 * Get columns data
 */
export const columns = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}

/**
 * @param req 
 * @param res  
 * Delete object
 */
export const deleteObject = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}