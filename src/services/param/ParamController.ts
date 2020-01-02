import * as paramService from './ParamService'
import { NextFunction, Request, Response } from "express";
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError, logger } from '@middleware';

/**
 * @param req 
 * @param res  
 * Gets param data type /api/params/
 */
export const getParams = async (req: Request, res: Response) => {
    try {
        let paramTypes = ['INPUT PROMPT'];
        let paramType = req.params.type;
        if (paramType !== undefined && paramTypes.indexOf(paramType) === -1) {
            throw new Error('Please provide correct param type')
        }
        const result = await paramService.getAllParams();
        return res.status(OK).json({
            message: "success!",
            data: result
        });
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};


/**
 * @param req 
 * @param res  
 * Gets parameter metadata by name
 */
export const getParamMetadata = async (req: Request, res: Response) => {
    try {
        let metaTypes = ['adv', 'basic'];
        let metaType = req.params.type;
        
        if (metaTypes.indexOf(metaType) === -1) {
           throw new Error('Please provice correct metatype')
        }

        const result = await paramService.getParamMetadata(metaType);
        return res.status(OK).json({
            message: "success!",
            data: result
        });
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message
        });
    }
};

/**
 * @param req 
 * @param res  
 * Gets parameter metadata by name
 */
export const getOutputParamByProgramKey = async (req: Request, res: Response) => {
    try {
        let programKeys = ['pg1'];
        let programKey = req.params.programKey;
        if (programKey !== undefined && programKeys.indexOf(programKey) === -1) {
            throw new Error('Please provice correct program Key')
        }

        const result = await paramService.getOutputParamByProgramKey();
        return res.status(OK).json({
            message: "success!",
            data: result
        });
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message
        });
    }
};


/**
 * @param req 
 * @param res  
 * Gets parameter metadata by name
 */
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

/**
 * @param req 
 * @param res  
 * Gets parameter metadata by name
 */
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

/**
 * @param req 
 * @param res  
 * Gets parameter metadata by name
 */
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