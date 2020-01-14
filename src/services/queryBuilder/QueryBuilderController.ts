import * as queryService from './QueryBuilderService'
import { NextFunction, Request, Response } from "express";
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError, logger } from '@middleware';

/**
 * @param req 
 * @param res  
 * Gets query data
 */
export const query = async (req: Request, res: Response) => {
    try {
        const result = await queryService.getQuery();
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
 * Get query builder data
 */
export const getQueryBuilder = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}

/**
 * @param req
 * @param res
 * Save query builder data
 */
export const saveQueryBuilder = async (req: Request, res: Response) => {
    console.log(`req.body`)
    console.log(req.body)
    return res.status(200).json({result : "Success"})
}
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
 * Get columns data
 */
export const columns = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}


/**
 * @param req 
 * @param res  
 * Get distinct values
 */
export const distinctValues = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}

/**
 * @param req 
 * @param res  
 * Get hadoop column
 */
export const getHadoopColumn = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}

/**
 * @param req 
 * @param res  
 * Get table column information 
 */
export const getTableColumnInfo = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}

/**
 * @param req
 * @param res
 * Get table query information
 */
export const getTableObjectInfo = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}

/**
 * @param req 
 * @param res  
 * Get hadoop tables columns
 */
export const getHadoopTablesColumns = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}

/**
 * @param req 
 * @param res  
 * Get appended columns
 */
export const getAppendedColumns = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}

/**
 * @param req 
 * @param res  
 * Get program order id
 */
export const getProgramOrderId = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}

/**
 * @param req 
 * @param res  
 * Get primary keys
 */
export const getPrimaryKeys = async (req: Request, res: Response) => {
    return res.status(200).json({result : "Success"})
}