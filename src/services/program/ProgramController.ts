import * as prgService from "./ProgramService"
import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { paramMissingError, verifyJwt } from "@middleware";

export const getPrograms = async (req: Request, res: Response) => {
    try {
        const users = await prgService.getAllPrograms();
        return res.status(OK).json(users);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

export const addProgram = async (req: Request, res: Response) => {
    try {
        const program = req.body;
        if (!program) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        await prgService.addProgram(program);
        return res.status(CREATED).json({
            message: "Program created successfully!"
        });
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

export const updateProgram = async (req: Request, res: Response) => {
    try {
        let id = Number(req.params.id);
        const user = req.body;

        if (!user || !id) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        await prgService.updateProgram(user, id);
        return res.status(OK).json({
            message: "Program updated successfully!"
        });
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        await prgService.deleteProgram(id);
        return res.status(OK).json({
            message: "Program deleted successfully!"
        });
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
}

export const getProgramTypeTree = async (req: Request, res: Response) => {
    try {
        // const programmeType = await prgService.getProgramTypeTree();
        let programmeType = {
            "types": {
                program_type: "ALL",
                children: [{
                    text: "KNIME",
                    id: "KNIME",
                    leaf: true
                }, {
                    expanded: true,
                    text: "USER PYTHON",
                    id: "USER PYTHON",
                    children: [{
                        text: "PYSPARK",
                        id: "PYSPARK",
                        leaf: true
                    }, {
                        text: "PY_2.7",
                        id: "PY_2.7",
                        leaf: true
                    }, {
                        text: "USER DENODO",
                        id: "USER DENODO",
                        leaf: true
                    }]
                }, {
                    expanded: true,
                    text: "USER R",
                    id: "USER R",
                    children: [{
                        text: "OPENR",
                        id: "OPENR",
                        leaf: true
                    }, {
                        text: "REVR",
                        id: "REVR",
                        leaf: true
                    }, {
                        text: "RMARKDOWN",
                        id: "RMARKDOWN",
                        leaf: true
                    }, {
                        text: "SHINY",
                        id: "SHINY",
                        leaf: true
                    }, {
                        text: "SPARKR",
                        id: "SPARKR",
                        leaf: true
                    }]
                }, {
                    expanded: true,
                    text: "USER SAS",
                    id: "USER SAS",
                    children: [{
                        text: "EGP",
                        id: "EGP",
                        leaf: true
                    }, {
                        text: "SAS-EG",
                        id: "SAS-EG",
                        leaf: true
                    }, {
                        text: "SAS-EM",
                        id: "SAS-EM",
                        leaf: true
                    }]
                }]
            }
        } // Dummy response tobe removed
        return res.status(OK).json(programmeType);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

/**
 * 
 * @param req 
 * @param res  
 * Gets All programs by Environment. eg. By Dev, Staging, Production
 */
export const getFiles = async (req: Request, res: Response) => {
    try {
        const files = await prgService.getFiles();
        return res.status(OK).json(files);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
}

/**
 * 
 * @param req 
 * @param res  
 * Gets All programs by Environment. eg. By Dev, Staging, Production
 */
export const getProgrambyEnv = async (req: Request, res: Response) => {
    try {
        const envnum = Number(req.params.envnum);
        let result: any  = prgService.getProgrambyEnv(envnum)
        result = [{}]; // dummy reposonse
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};