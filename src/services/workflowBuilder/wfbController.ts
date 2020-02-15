import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
//import { paramMissingError, verifyJwt } from '@middleware';
import * as orm from "../../ormapis/requests";

/**
 * 
 * @param req 
 * @param res 
 * Get Catgories
 */

export const getCategories = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get Statuses
 */

export const getStatuses = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get SubjectAreas
 */

export const getSubjectAreas = async (req: Request, res: Response) => {
    try {        
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get YieldSubjectAreas
 */
export const getYieldSubjectAreas = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get Owners
 */

export const getOwners = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get SubjectArea
 */

export const getSubjectArea = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get SubjectAreaPermissions
 */

export const getSubjectAreaPermissions = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get Jobs
 */

export const getJobs = async (req: Request, res: Response) => {
    try {
        const result = await orm.post(req.originalUrl, req.body);
        return res.status(OK).json(result);
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
 * Get Jobs
 */

export const getDetailDefaultColumns = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get Jobs
 */

export const getSpecificProgram = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get Jobs
 */

export const getDefaultColumns = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get Jobs
 */

export const getProgramSQL = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get Jobs
 */

export const publishFlow = async (req: Request, res: Response) => {
    try {
        const result = await orm.post(req.originalUrl, req.body);
        return res.status(OK).json(result);
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
 * Get Jobs
 */

export const submitRequest = async (req: Request, res: Response) => {

    //Input -- For Save as new workflow
    /*jobMetadata: {"builderVersion":1.5,"run":false,"pid":"","isInstance":false,
                    "description":"Test2222","groups":[{"title":"Group 1","jobs":[],
                    "programs":[{"run_latest":"N","run_version":"50061","parameters":[],"outputParameters":[],
                            "node_id":"4a87ffee-02b9-4a48-bad2-4f43cc0a4e03","order_id":1,
                            "parent_order_id":"","stop_on_error":true,"ignore":false}],
                    "tempId":"grouppanel-1066"}]}*/
    // For submit as new workflow
    /*
    jobMetadata: {"sourcePID":"E9005413","builderVersion":1.5,"run":true,"pid":"","isInstance":false,"description":"Test2222",
                    "groups":[{"title":"Group 1","jobs":[],"programs":[{"parent_order_id":"","order_id":1,"workflow_name":"",
                    "outputParameters":[],"stop_on_error":true,"run_version":50061,"parameters":[],
                    "node_id":"7097b032-8358-45ee-a633-13b150e911f6","workflow_desc":"","ignore":false,"run_latest":"N"}],
                    "tempId":"grouppanel-1167"}]}
    */

    return res.status(OK).json({
        "status": 200,
        "message": "E9005413",
        "message_code": "",
        "i18n_code": 'en',
        "data": [],
        "meta": {}
    })

    // try {
    //     const result = await orm.post(req.originalUrl, req.body);
    //     return res.status(OK).json(result);
    // } catch (err) {
    //     logger.error(err.message, err);
    //     return res.status(BAD_REQUEST).json({
    //         error: err.message,
    //     });
    // }
};



/**
 * 
 * @param req 
 * @param res 
 * Get settings
 */
export const getSettings = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get user
 */
export const getUser = async (req: Request, res: Response) => {

    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get groups
 */
export const getGroups = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get group programs
 */
export const getGroupPrograms = async (req: Request, res: Response) => {
    
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

export const getGroupProgram = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
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
 * Get metadata
 */
export const getMetadata = async (req: Request, res: Response) => {

    //Response has Pid on Save this workflow -- updates existing worflow
    //does not have Pid on Save as new workflow -- creates new workflow

    let response = `{"isInstance":false,
                     "gid":739374,
                     "groups":[{"jobs":[],
                                "programs":[{"parent_order_id":"",
                                             "order_id":1,
                                             "outputParameters":[],
                                             "stop_on_error":true,
                                             "run_version":50061,
                                             "parameters":[],
                                             "node_id":"4a87ffee-02b9-4a48-bad2-4f43cc0a4e03",
                                             "ignore":false,"run_latest":"N"}],
                                "tempId":"grouppanel-1066",
                                "title":"Group 1"}],
                     "description":"Test2222",
                     "run":false,
                     "pid":"E9005413",
                     "controlInfo":{"REQUEST_DT":"February, 14 2020 02:57:40",
                                    "SUBJECT_AREA":"WORKFLOW",
                                    "EMPLOYEE_LAST_NAME":"Rohani",
                                    "SCHEDULE_START_DATE":"",
                                    "JOB_CATEGORY":"OTHER",
                                    "OUTPUT_FOLDERS":"",
                                    "SCHEDULE_END_DATE":"",
                                    "GLOBAL_ID":739374,
                                    "CRON":"",
                                    "STATUS":"SAVED",
                                    "DATE_LAST_RUN":"",
                                    "PUBLISHED":"",
                                    "DESCRIPTION":"Test2222",
                                    "SCHEDULE":"",
                                    "EMPLOYEE_FULL_NAME":"Poonam Rohani",
                                    "RETENTION":35,
                                    "CHANGE_DT":"",
                                    "CREATION_DT":"February, 14 2020 02:57:40",
                                    "PID":"E9005413",
                                    "DEDICATED_SERVER":"",
                                    "UPDATE_DT":"",
                                    "EMPLOYEE_FIRST_NAME":"Poonam",
                                    "WHY_NOT_RUN":"",
                                    "DELETED_INACTIVE_INDICATOR":"",
                                    "OCCURRENCES":"",
                                    "SOURCE":"Workflow Builder",
                                    "JOB_TYPE":"P",
                                    "SOURCE_PID":"",
                                    "INTERACTIVE":"N",
                                    "E_MAIL_WORK":"poonam.rohani@seagate.com"},
                     "builderVersion":1.5}`;

    return res.status(OK).json({
        "status": 200,
        "message": "Mock Data for input -- pid: E9005413 --- takes pid generated from submitRequest/save as workflow button",
        "message_code": "",
        "i18n_code": 'en',
        "data": response,
        "meta": {}
    })

    // try {
    //     const result = await orm.get(req.originalUrl);
    //     return res.status(OK).json(result);
    // } catch (err) {
    //     logger.error(err.message, err);
    //     return res.status(BAD_REQUEST).json({
    //         error: err.message,
    //     });
    // }
};


export const getDatasetsTree = async (req: Request, res: Response) => {
    /**
     * INPUT
     * pid: personal
    method: getDatasetsTree
    node: root
     */

    return res.status(OK).json({
        "status": 200,
        "message": `Mock Data for input -- pid: personal
        method: getDatasetsTree
        node: root`,
        "message_code": "",
        "i18n_code": 'en',
        "data": [],
        "meta": {}
    })

}
