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

    return res.status(OK).json({
        "status": 200,
        "message": "Mock Data",
        "message_code": "",
        "i18n_code": 'en',
        "data": [{"group_array":[],"additional_info":{},"e_mail_work":"chetan.rane@seagate.com","global_id":"729016","name":"Chetan Rane"}],
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

/**
 * 
 * @param req 
 * @param res 
 * Get groups
 */
export const getGroups = async (req: Request, res: Response) => {

    //input
    //pid: E9005404
    //environment: Development
    let response = [{"index":"1","name":"Group 1 [1]"}]
    return res.status(OK).json({
        "status": 200,
        "message": `Mock Data for input --->
                    //pid: E9005404
                    //environment: Development`,
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

/**
 * 
 * @param req 
 * @param res 
 * Get group programs
 */
export const getGroupPrograms = async (req: Request, res: Response) => {
    //input
    //pid: E9005404
    //environment: Development
    //groupIndex: 1
    let response = [{"display":"QB Table Query [1]","description":"athena","index":"1","node_id":"0cfa8194-01b8-4e19-ba77-fb53f2d2e571","name":"QB Table Query"}]
    return res.status(OK).json({
        "status": 200,
        "message": `Mock Data for input --->
                    //pid: E9005404
                    //environment: Development
                    //groupIndex: 1`,
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

export const getAddedGroupProgram = async (req: Request, res: Response) => {
    //input
    //pid: E9005404
    //environment: Development
    //groupIndex: 1
    //nodeId: 0cfa8194-01b8-4e19-ba77-fb53f2d2e571
    let response = [{"groupString":"","parent_order_id":"",
    "queryConfig":{"fileTypeDisplay":"SAS CHUNKA QUERY - SAS7BDAT","queryType":"regular","outputFileType":"SAS7BDAT"},
    "addedQuickPicks":[{"quoted":true,"tableName":"DIM.DRIVE_PRODUCT_ST_MODEL_DIM","column":"DRIVE_PRODUCT_ST_MODEL_DIM.APPLICATION_SEGMENT_ABBR","shortSql":"DRIVE_PRODUCT_ST_MODEL_DIM.APPLICATION_SEGMENT_...","sql":"DRIVE_PRODUCT_ST_MODEL_DIM.APPLICATION_SEGMENT_ABBR = SYSDATE-9","pickLabel":"APPLICATION_SEGMENT_ABBR","daysBack2":"","tableAlias":"DRIVE_PRODUCT_ST_MODEL_DIM","placeinJoin":false,"operator":"=","daysBack1":9,"value1":"to_date('02\/04\/2020','mm\/dd\/yyyy')","pickType":"date","value2":"","relativeDates":true,"id":"WorkflowBuilder.model.QuickPick-1"}],"stop_on_error":true,"output_folder":"","run_version":8174,"dataset":"elib.all","addedFields":[{"tableName":"DRIVE_PRODUCT_ST_MODEL_DIM","tableOwner":"DIM","column":"APPLICATION_SEGMENT_ABBR","nullable":false,"detail":false,"name":"DRPRDST_APPLICATION_SEGMENT_1","sql":"APPLICATION_SEGMENT_ABBR","datatype":"VARCHAR2","tableAlias":"DRIVE_PRODUCT_ST_MODEL_DIM","joinaliases":"","id":"DRIVE_PRODUCT_ST_MODEL_DIM.APPLICATION_SEGMENT_ABBR","type":"Table Column(s)","groupby":false}],"parameters":[{"value":"athena","itemId":"","parameterType":"TEXT","name":"RESULT_DESCRIPTION"},{"value":"","itemId":"","parameterType":"TEXT","name":"Set_Command"},{"value":"","itemId":"","parameterType":"TEXT","name":"Partition"},{"value":"","itemId":"","parameterType":"TEXT","name":"Bucket"},{"value":35,"itemId":"","parameterType":"NUMBER","name":"CustomRetentionDays"},{"value":"ORC","itemId":"","parameterType":"TEXT","name":"ctasTableType"},{"value":"EDW","itemId":"","parameterType":"TEXT","name":"Connect_Name"},{"value":"\n       DRIVE_PRODUCT_ST_MODEL_DIM.APPLICATION_SEGMENT_ABBR as DRPRDST_APPLICATION_SEGMENT_1","itemId":"","parameterType":"TEXT","name":"Fields"},{"value":"","itemId":"","parameterType":"TEXT","name":"_WITH_"},{"value":"","itemId":"","parameterType":"TEXT","name":"output_folder"},{"value":"elib.all","itemId":"","parameterType":"DATASET","name":"DATASET"},{"value":"SAS7BDAT","itemId":"","parameterType":"TEXT","name":"OUTPUT_FILE_TYPE"},{"value":"ATHENA.PRODUCT_QUALIFICATIONS_FACT PRODUCT_QUALIFICATIONS_FACT\n     LEFT OUTER JOIN ATHENA.TEST_RECORD_FACT TEST_RECORD_FACT ON (PRODUCT_QUALIFICATIONS_FACT.PRODUCT_FAMILY = TEST_RECORD_FACT.ATHENA_FAMILY AND PRODUCT_QUALIFICATIONS_FACT.TEST_BED = TEST_RECORD_FACT.TEST_BED AND PRODUCT_QUALIFICATIONS_FACT.CONCAT_MATURITY = TEST_RECORD_FACT.CONCAT_MATURITY)\n     LEFT OUTER JOIN DIM.DRIVE_PRODUCT_ST_MODEL_DIM DRIVE_PRODUCT_ST_MODEL_DIM ON (TEST_RECORD_FACT.DRIVE_PRODUCT_ST_MODEL_KEY = DRIVE_PRODUCT_ST_MODEL_DIM.DRIVE_PRODUCT_ST_MODEL_KEY)","itemId":"","parameterType":"TEXT","name":"Table"},{"value":"WHERE DRIVE_PRODUCT_ST_MODEL_DIM.APPLICATION_SEGMENT_ABBR = SYSDATE-9\n\n ","itemId":"","parameterType":"TEXT","name":"_QUERY_"}],"node_id":"0cfa8194-01b8-4e19-ba77-fb53f2d2e571","ignore":false,"run_latest":"Y","whereString":"","editorType":"query","order_id":1,"description":"athena","addedDatasets":[],"workflow_desc":"athena","subjectArea":{"tableau_flag":false,"field_incremental_flag":false,"subject_area":"ATHENA","yrr_flag":false,"yield_flag":true,"slurm_category_key":1,"upsert_flag":false,"editable_flag":true,"pqa_flag":true,"partition_column":"","xml_path":"..\/..\/..\/webdata\/xml\/ATHENA.xml","spc_control_chart_flag":false,"id":"WorkflowBuilder.model.SubjectArea-4","quick_pick_required_flag":false,"query_builder_flag":true,"first_last_flag":false,"slurm_fairshare":250000,"edit_url":"CFE\/queryBuilder\/index.cfm?fuseaction=builder2&edit=TRUE&PID=#PID#","name":"ATHENA","spc_dppm_flag":false,"data_extraction_flag":false,"cb_source_type":"DB","rtp_flag":false,"subject_area_key":263,"connection_name":"EDW","environment_flag":3,"incremental_flag":true,"odtv_analysis_flag":false}}];
    return res.status(OK).json({
        "status": 200,
        "message": `Mock Data for input --->
                    //pid: E9005404
                    //environment: Development
                    //groupIndex: 1
                    //nodeId: 0cfa8194-01b8-4e19-ba77-fb53f2d2e571`,
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
