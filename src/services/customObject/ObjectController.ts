import * as objectService from './ObjectService'
import { NextFunction, Request, Response } from "express";
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError, logger } from '@middleware';

export const getOwnerName = async (req: Request, res: Response) => {
    try {
        const users = await objectService.getAllOwnerName();
        return res.status(OK).json(users);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

export const getSubjectArea = async (req: Request, res: Response) => {
    try {
        const users = await objectService.getAllSubjectArea();
        return res.status(OK).json(users);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

export const getCustomObjectList = async (req: Request, res: Response) => {
    try {
        const users = await objectService.getCustomObjectList();
        return res.status(OK).json(users);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

export const getXml = async (req: Request, res: Response) => {
    try {
        const users = await objectService.getXml();
        return res.status(OK).json(users);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

export const getXmlW = async (req: Request, res: Response) => {
    try {
        const users = await objectService.getXmlW();
        return res.status(OK).json(users);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

export const getCustomObject = async (req: Request, res: Response) => {
    try {
        const users = await objectService.getCustomObject();
        return res.status(OK).json(users);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

export const addCustomObject = async (req: Request, res: Response) => {
    try {
        const users = await objectService.addCustomObject();
        return res.status(OK).json(users);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};
