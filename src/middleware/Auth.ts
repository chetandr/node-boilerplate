import { logger } from './Logger';
import {NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../LoadEnv'
import { UNAUTHORIZED, OK } from 'http-status-codes';
const skipPath: Array<string> = ['/api/auth/login']

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
    let flag:number = skipPath.indexOf(req.url)
    if (flag > -1) return next()

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