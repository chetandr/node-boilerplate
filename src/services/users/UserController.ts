import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError, verifyJwt } from '@middleware';
import * as orm from "../../ormapis/requests";

/**
 * 
 * @param req 
 * @param res 
 * Get Users
 */

export const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await orm.get('users');
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
 * Get Add user
 */
export const addUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        if (!user) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        let result: any = await orm.post(`users`, user);
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
 * Get Update User
 */

export const updateUser = async (req: Request, res: Response) => {
    try {
        let id = Number(req.params.id);
        const user = req.body;

        if (!user || !id) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        let result: any = await orm.put(`users/${id}`, user);
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
 * Delete Users
 */

export const deleteUser = async (req: Request, res: Response) => {
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