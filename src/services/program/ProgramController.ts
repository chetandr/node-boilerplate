import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
//import { paramMissingError, verifyJwt } from '@middleware';
import * as orm from "../../ormapis/requests";



/**
 * 
 * @param req 
 * @param res 
 * Get ProgramOwners
 */

export const getProgramOwners = async (req: Request, res: Response) => {
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
 * Get ProgramVersions
 */

export const getProgramVersions = async (req: Request, res: Response) => {
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
 * Get ProgramInputPrompts
 */

export const getProgramInputPrompts = async (req: Request, res: Response) => {
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
 * Get ProgramOutputPrompts
 */

export const getProgramOutputPrompts = async (req: Request, res: Response) => {
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
 * Get ProgramOutputParameters
 */

export const getProgramOutputParameters = async (req: Request, res: Response) => {
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
 * Get ProgramFileType
 */

export const getProgramFileType = async (req: Request, res: Response) => {
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


