import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import * as orm from "../../ormapis/requests";


/**
 * 
 * @param req 
 * @param res 
 * Get me
 */

export const getMe = async (req: Request, res: Response) => {
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
 * Get JobDetails
 */

export const getJobDetails = async (req: Request, res: Response) => {
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
 * Get Status
 */

export const getStatus = async (req: Request, res: Response) => {
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
 * Get Job Programs
 */

export const getJobPrograms = async (req: Request, res: Response) => {
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
 * Get Program Parameters
 */

export const getProgramParameters = async (req: Request, res: Response) => {
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
 * Get ProgramInfo
 */

export const getProgramInfo = async (req: Request, res: Response) => {
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
 * Get ProgramParameterList
 */

export const getProgramParameterList = async (req: Request, res: Response) => {
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
 * Get ProgramParameterInfo
 */

export const getProgramParameterInfo = async (req: Request, res: Response) => {
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
 * Get files
 */

export const getFiles = async (req: Request, res: Response) => {
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
 * Get Stored Results
 */

export const getStoredResults = async (req: Request, res: Response) => {
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
 * Get Notifications
 */

export const getNotifications = async (req: Request, res: Response) => {
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
 * Get Schedule
 */

export const getSchedule = async (req: Request, res: Response) => {
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
 * Get Viewers
 */

export const getViewers = async (req: Request, res: Response) => {
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