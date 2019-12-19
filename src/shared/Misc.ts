import { logger } from './Logger';
import {NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../LoadEnv'
import { UNAUTHORIZED, OK } from 'http-status-codes';


export const paramMissingError = 'One or more of the required parameters was missing.';
export const invalidPasswordError = 'Invalid credentials, authentication failed.';

export const pErr = (err: Error) => {
    if (err) {
        logger.error(err);
    }
};

export const getRandomInt = () => {
    return Math.floor(Math.random() * 1_000_000_000_000);
};

export const verifyJwt = (req: Request,  res: Response, next: NextFunction) => {

    
    const token = <string>req.headers['authorization'];
    let jwtPayload;

    try {
        jwtPayload = <any>jwt.verify(token, JWT_SECRET_KEY);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (err) {
        logger.error(err.message, err);
        return res.status(UNAUTHORIZED).json({
            error: err.message,
        });
    }

    const { userId, username } = jwtPayload;
    const newToken = jwt.sign({ userId, username }, JWT_SECRET_KEY, { expiresIn: "300m" });
    res.setHeader("token", newToken);

    next();
}
