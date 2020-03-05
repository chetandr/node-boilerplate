import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
//import { paramMissingError, verifyJwt } from '@middleware';
import * as orm from "../../ormapis/requests";
import { datasetsTreeData, metadataData } from "../../mock";

/**
 * 
 * @param req 
 * @param res 
 * Get Catgories
 */

export const getCategories = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
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
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
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
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get YieldSubjectAreas
 */
export const getYieldSubjectAreas = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get Owners
 */

export const getOwners = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};


/**
 * 
 * @param req 
 * @param res 
 * Get SubjectArea
 */

export const getSubjectArea = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get SubjectAreaPermissions
 */

export const getSubjectAreaPermissions = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get Jobs
 */

export const getJobs = async (req: Request, res: Response) => {
    try {
        const result = await orm.post(req.originalUrl, req.body);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get Jobs
 */

export const getDetailDefaultColumns = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get Jobs
 */

export const getSpecificProgram = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get Jobs
 */

export const getDefaultColumns = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get Jobs
 */

export const getProgramSQL = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get Jobs
 */

export const publishFlow = async (req: Request, res: Response) => {
    try {
        const result = await orm.put(req.originalUrl, req.body);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get SubmitRequest
 */

export const submitRequest = async (req: Request, res: Response) => {

    try {
        const result = await orm.post(req.originalUrl,req.body);
        return res.status(CREATED).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};



/**
 * 
 * @param req 
 * @param res 
 * Get settings
 */
export const getSettings = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get user
 */
export const getUser = async (req: Request, res: Response) => {

    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get groups
 */
export const getGroups = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get group programs
 */
export const getGroupPrograms = async (req: Request, res: Response) => {
    
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getGroupProgram = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

/**
 * 
 * @param req 
 * @param res 
 * Get metadata
 */
export const getMetadata = async (req: Request, res: Response) => {

    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getDatasetsTree = async (req: Request, res: Response) => {

    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
}

export const validateSql = async (req: Request, res: Response) => {
    try {
        const result = await orm.post(req.originalUrl, req.body);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
}
