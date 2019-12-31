import * as userService from './TagService'
import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError, verifyJwt } from '@middleware';

export const getTags = async (req: Request, res: Response) => {
    try {
        // const tags = await userService.getAllTags();
        let tags = {
            "tags": [
               " FRIEND",
                "ASSUMPTIONS"
            ]
        } // Dummy reponse to be removed
        return res.status(OK).json(tags);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};