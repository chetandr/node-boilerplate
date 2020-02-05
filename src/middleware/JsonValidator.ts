import Ajv from 'ajv';
import { logger } from './Logger';
const ajv = new Ajv({ allErrors: true });
import { NextFunction, Request, Response } from 'express';
import { BAD_REQUEST } from 'http-status-codes';

/**
 * This is a middleware function which validates JSON for the POST/PUT/PATCH methods
 */
export const validateSchema = (pathName: any, jsonArr: any) => {
    return function (req: Request, res: Response, next: NextFunction) {
        let requestSchema: any = {}
        requestSchema = jsonArr.find((item: any) => item.pathname === pathName)
        const validate = ajv.compile(requestSchema.schema);
        let requestBody = req.body;
        let valid = validate(requestBody);
        if (valid) {
            next()
        } else {
            logger.error(ajv.errorsText(validate.errors), ajv.errorsText(validate.errors));
            return res.status(BAD_REQUEST).json({
                error: ajv.errorsText(validate.errors),
            });
        }
    }
}