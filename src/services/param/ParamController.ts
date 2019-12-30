import * as paramService from './ParamService'
import { NextFunction, Request, Response } from "express";
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError, logger } from '@middleware';

export const getParams = async (req: Request, res: Response) => {
    try {
        const users = await paramService.getAllParams();
        return res.status(OK).json(users);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

export const addParam = async (req: Request, res: Response) => {
    /* try {
        const user = req.body;
        if (!user) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        await userService.addUser(user);
        return res.status(CREATED).json({
            message: "User created successfully!"
        });
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    } */
};

export const updateParam = async (req: Request, res: Response) => {
   /*  try {
        let id = Number(req.params.id);
        const user = req.body;

        if (!user || !id) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        await userService.updateUser(user, id);
        return res.status(OK).json({
            message: "User updated successfully!"
        });
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    } */
}

export const deleteParam = async (req: Request, res: Response) => {
    /* try {
        const id = Number(req.params.id);
        await userService.deleteUser(id);
        return res.status(OK).json({
            message: "User deleted successfully!"
        });
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    } */
}