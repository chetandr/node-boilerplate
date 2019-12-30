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


