import * as wfbService from './WfbService'
import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError, verifyJwt } from '@middleware';

export const getWfb = async (req: Request, res: Response) => {
    try {
        const wfb = await wfbService.getAllWfbs();
        return res.status(OK).json(wfb);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

export const addWfb = async (req: Request, res: Response) => {
    try {
        const wfb = req.body;
        if (!wfb) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        await wfbService.addWfb(wfb);
        return res.status(CREATED).json({
            message: "Workflow created successfully!"
        });
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

export const updateWfb = async (req: Request, res: Response) => {
    try {
        let id = Number(req.params.id);
        const wfb = req.body;

        if (!wfb || !id) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        await wfbService.updateWfb(wfb, id);
        return res.status(OK).json({
            message: "Workflow updated successfully!"
        });
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
}

export const deleteWfb = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        await wfbService.deleteWfb(id);
        return res.status(OK).json({
            message: "Workflow deleted successfully!"
        });
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
}