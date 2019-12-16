import Ajv from 'ajv';
import { logger } from './Logger';
import * as Jsonschema  from './Jsonschema';
const ajv = new Ajv({ allErrors: true });
import express from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
/**
 * This is a middleware function which validates JSON for the POST/PUT/PATCH methods
 * 
 */

/**
 * @param req : Express request
 * @param res : Express response
 * @param next : Next function Express
 */
export const validatorMiddleware = (req: express.Request, res: express.Response, next: any) => {
    let pathName = req.url
    let requestSchema:any = {}
    requestSchema = Jsonschema.jsonschemaArr.find((item) => item.pathname === pathName)
    if (req.method === "GET") { next() } else {
        const validate = ajv.compile(requestSchema);
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
};