import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
//import { paramMissingError, verifyJwt } from '@middleware';
import * as orm from "../../ormapis/requests";
import { xmlData, tabledataData } from "../../mock";

export const getQueryBuilder = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const saveQueryBuilder = async (req: Request, res: Response) => {
    try {
        const result = await orm.post(req.originalUrl, req.body);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getHadoopMetaData = async (req: Request, res: Response) => {

    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getHadoopTableType = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getFailDesc = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getXML = async (req: Request, res: Response) => {

    //input - 
    //filePath: ../../../webdata/xml/ATHENA.xml
    //subjectArea: ATHENA

    // let result = xmlData;

    // return res.status(OK).json({
    //     "status": 200,
    //     "message": `Mock Data for input -->
    //                 //filePath: ../../../webdata/xml/ATHENA.xml
    //                 //subjectArea: ATHENA`,
    //     "message_code": "",
    //     "i18n_code": 'en',
    //     "data": result,
    //     "meta": {}
    // })

    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getColumns = async (req: Request, res: Response) => {

    //Input Data
    /** subjectArea: ATHENA
        tableOwner: ATHENA
        tableName: PRODUCT_QUALIFICATIONS_FACT
        tableAlias: PRODUCT_QUALIFICATIONS_FACT
        overRideCache: false
        hideC: %_KEY
        showC:  */

    let result = {"customitems":[],"columns":[{"data_scale":"","data_precision":"","column_name":"APPROVED_DATE","data_length":7,"data_type":"DATE"},{"data_scale":"","data_precision":"","column_name":"BACKGROUND","data_length":4000,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"BACKGROUND_CLEAR","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"BACKGROUND_FILE","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"BUSINESSCASE_FILE","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"CANCELLED_DATE","data_length":7,"data_type":"DATE"},{"data_scale":"","data_precision":"","column_name":"CEE_ENGINEER_NAME","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"COMPARE_DATA_SUFFICIENT","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"COMPARE_FILE","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"COMPARE_REQUIRED","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"COMPLETE_DATE","data_length":7,"data_type":"DATE"},{"data_scale":"","data_precision":"","column_name":"COMPONENT_EXPERT","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"CONCAT_MATURITY","data_length":64,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"CORE_TEAM","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"COST_IMPACT","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"CREATED_BY_NAME","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"CREATED_BY_USER_GID","data_length":64,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"CREATED_DATE","data_length":7,"data_type":"DATE"},{"data_scale":"","data_precision":"","column_name":"CUSTOMER_NAME","data_length":128,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"CUSTOMER_REPORT_REQ","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"DISTRIBUTION_LIST","data_length":4000,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"DOC_NUM","data_length":128,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"DRIVE_EXPERT","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"EDITING_PERSON","data_length":256,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"ETL_LOAD_DATE","data_length":7,"data_type":"DATE"},{"data_scale":"","data_precision":"","column_name":"ETL_SOURCE_NAME","data_length":64,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"EXTERNAL_PRODUCT","data_length":256,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"FAILED_DATE","data_length":7,"data_type":"DATE"},{"data_scale":"","data_precision":"","column_name":"FMEA_FILE","data_length":256,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"FORM_FACTOR","data_length":32,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"GWA_RPM","data_length":256,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"INTERFACE","data_length":64,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"IN_PROCESS_DATE","data_length":7,"data_type":"DATE"},{"data_scale":"","data_precision":"","column_name":"IN_PROCESS_FILE","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"IN_PROCESS_REQUIRED","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"IPO_NUM","data_length":128,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"LAST_EDIT_BY","data_length":256,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"LAST_EDIT_DATE","data_length":7,"data_type":"DATE"},{"data_scale":"","data_precision":"","column_name":"LCO_RPM","data_length":64,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"LOCATION_FROM","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"LOCATION_TO","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"MARKET_SEGMENT","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"MATURITY_PHASE","data_length":32,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"MATURITY_PHASE_REV1","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"MATURITY_PHASE_REV2","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"MATURITY_PHASE_REV3","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"MOTOR_SPEED","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"ORIGINAL_BUILD_SITE","data_length":64,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"OUT_GOING_FILE","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"OUT_GOING_REQUIRED","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"PARAMETRIC_FILE","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"PARAMETRIC_LABEL","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"PARAMETRIC_REQUIRED","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"PRIORITY","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"PRODUCT_FAMILY","data_length":128,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"PRODUCT_TYPE","data_length":128,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"PULL_DATE","data_length":7,"data_type":"DATE"},{"data_scale":"","data_precision":"","column_name":"PURPOSE","data_length":256,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"QUAL_CHANGE","data_length":256,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"QUAL_CLASS","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"QUAL_HIST","data_length":4000,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"QUAL_PLAN_NEEDED","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"QUAL_REQ_STATUS","data_length":64,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"QUAL_TYPE","data_length":256,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"RDT_QTY","data_length":22,"data_type":"NUMBER"},{"data_scale":"","data_precision":"","column_name":"RECEIVE_DATE","data_length":7,"data_type":"DATE"},{"data_scale":"","data_precision":"","column_name":"REPORT_FILE","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"REQUESTING_ENG_GLOBAL_ID","data_length":32,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"REQUESTING_GROUP","data_length":32,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"REQUEST_UID","data_length":128,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"REQUIRED_APPROVAL_DATE","data_length":7,"data_type":"DATE"},{"data_scale":"","data_precision":"","column_name":"REQUIRED_START_DATE","data_length":7,"data_type":"DATE"},{"data_scale":"","data_precision":"","column_name":"RESP_FOR_BUILD","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"RESP_FOR_IPO","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"RISK_APPROVED_DATE","data_length":7,"data_type":"DATE"},{"data_scale":"","data_precision":"","column_name":"SECOND_RESP_FOR_BUILD","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"SECOND_RESP_FOR_IPO","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"SHIP_DATE","data_length":7,"data_type":"DATE"},{"data_scale":"","data_precision":"","column_name":"SHR_RPM","data_length":64,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"SKD_RPM","data_length":64,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"SLAM_PHASE","data_length":32,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"SOURCE","data_length":32,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"SPK_RPM","data_length":64,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"SQT_NUM","data_length":128,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"STATUS","data_length":64,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"STATUS_COMMENTS","data_length":1024,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"SUBJECT_EXPERT","data_length":512,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"SUZ_RPM","data_length":64,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"SYSTEM_LEVEL","data_length":128,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"TCO_RPM","data_length":64,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"TEST_BED","data_length":1024,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"TEST_GROUP","data_length":32,"data_type":"VARCHAR2"},
    {"data_scale":"","data_precision":"","column_name":"TEST_LOCATION","data_length":32,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"TTK_RPM","data_length":64,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"USE_DETAIL_DESC","data_length":12,"data_type":"VARCHAR2"},{"data_scale":"","data_precision":"","column_name":"VOLUME_IMPACT","data_length":512,"data_type":"VARCHAR2"}],"replaceitems":[],"isCached":true};
    return res.status(OK).json({
        "status": 200,
        "message": "Mock Data",
        "message_code": "",
        "i18n_code": 'en',
        "data": result,
        "meta": {
            "total": (result.columns.length) ? result.columns.length : 0,
            "page": req.body.page,
            "limit": req.body.limit,
            "sort_by": req.body.sort_by,
            "order": req.body.order
        }
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

export const getDistinctValues = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getHadoopColumn = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getTableColumnInfo = async (req: Request, res: Response) => {
    /**INPUT --> datasource: EDW
tableName: PRODUCT_QUALIFICATIONS_FACT
tableOwner: ATHENA
tableAlias: PRODUCT_QUALIFICATIONS_FACT
subjectArea: ATHENA
useSynonym: false */
let result = [{"datatype":"DATE","length":7,"defaultvalue":"","comments":"Approved date","nullable":true,"name":"APPROVED_DATE","precision":""},
{"datatype":"VARCHAR2","length":4000,"defaultvalue":"","comments":"Background info of this qual","nullable":true,"name":"BACKGROUND","precision":""},
{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Whether backgroud is clear","nullable":true,"name":"BACKGROUND_CLEAR","precision":""},
{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"File name of attachment","nullable":true,"name":"BACKGROUND_FILE","precision":""},
{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"File name of business case","nullable":true,"name":"BUSINESSCASE_FILE","precision":""},
{"datatype":"DATE","length":7,"defaultvalue":"","comments":"Cancelle date","nullable":true,"name":"CANCELLED_DATE","precision":""},
{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Name of cee engineer, CEE stands for Customer Experience Engineering","nullable":true,"name":"CEE_ENGINEER_NAME","precision":""},
{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Where compare data is sufficient","nullable":true,"name":"COMPARE_DATA_SUFFICIENT","precision":""},
{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Compare file name","nullable":true,"name":"COMPARE_FILE","precision":""},
{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Whether compare required","nullable":true,"name":"COMPARE_REQUIRED","precision":""},
{"datatype":"DATE","length":7,"defaultvalue":"","comments":"Complete date","nullable":true,"name":"COMPLETE_DATE","precision":""},
{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Email of component expert","nullable":true,"name":"COMPONENT_EXPERT","precision":""},
{"datatype":"VARCHAR2","length":64,"defaultvalue":"","comments":"Concatenation of Maturity Phase and Maturity Revs.","nullable":true,"name":"CONCAT_MATURITY","precision":""},
{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Core team email","nullable":true,"name":"CORE_TEAM","precision":""},
{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Impact cost","nullable":true,"name":"COST_IMPACT","precision":""},
{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Name of user who created the request","nullable":true,"name":"CREATED_BY_NAME","precision":""},
{"datatype":"VARCHAR2","length":64,"defaultvalue":"","comments":"GID of user who created the request","nullable":true,"name":"CREATED_BY_USER_GID","precision":""},
{"datatype":"DATE","length":7,"defaultvalue":"","comments":"Created Date","nullable":true,"name":"CREATED_DATE","precision":""},
{"datatype":"NUMBER","length":22,"defaultvalue":"","comments":"Surrogate key that uniquely identifies a day in DIM.DATE_DIM based on actual_date..","nullable":true,"name":"CREATED_DATE_KEY","precision":38},
{"datatype":"NUMBER","length":22,"defaultvalue":"","comments":"Employee key of ceated user","nullable":true,"name":"CREATED_USER_EMP_KEY","precision":38},
{"datatype":"VARCHAR2","length":128,"defaultvalue":"","comments":"Customer name","nullable":true,"name":"CUSTOMER_NAME","precision":""},
{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Whether cust report required","nullable":true,"name":"CUSTOMER_REPORT_REQ","precision":""},
{"datatype":"VARCHAR2","length":4000,"defaultvalue":"","comments":"Distribution List for Sending Notificaton to Users","nullable":true,"name":"DISTRIBUTION_LIST","precision":""},
{"datatype":"VARCHAR2","length":128,"defaultvalue":"","comments":"Document number","nullable":false,"name":"DOC_NUM","precision":""},
{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Expert email of drive","nullable":true,"name":"DRIVE_EXPERT","precision":""},
{"datatype":"VARCHAR2","length":256,"defaultvalue":"","comments":"Current editor if record is in edit mode.","nullable":true,"name":"EDITING_PERSON","precision":""},
{"datatype":"DATE","length":7,"defaultvalue":"","comments":"sysdate","nullable":true,"name":"ETL_LOAD_DATE","precision":""},{"datatype":"VARCHAR2","length":64,"defaultvalue":"","comments":"","nullable":true,"name":"ETL_SOURCE_NAME","precision":""},
{"datatype":"VARCHAR2","length":256,"defaultvalue":"","comments":"External product","nullable":true,"name":"EXTERNAL_PRODUCT","precision":""},
{"datatype":"DATE","length":7,"defaultvalue":"","comments":"Date of failed","nullable":true,"name":"FAILED_DATE","precision":""},
{"datatype":"VARCHAR2","length":256,"defaultvalue":"","comments":"FMEA file name","nullable":true,"name":"FMEA_FILE","precision":""},
{"datatype":"VARCHAR2","length":32,"defaultvalue":"","comments":"Form factor","nullable":true,"name":"FORM_FACTOR","precision":""},
{"datatype":"NUMBER","length":22,"defaultvalue":"","comments":"Surrogate key that uniquely identifies a location in LOCATION_DIM..","nullable":true,"name":"FROM_LOCATION_KEY","precision":38},
{"datatype":"VARCHAR2","length":256,"defaultvalue":"","comments":"Korea RPM","nullable":true,"name":"GWA_RPM","precision":""},
{"datatype":"VARCHAR2","length":64,"defaultvalue":"","comments":"Product family interface such as SATA or SAS","nullable":true,"name":"INTERFACE","precision":""},
{"datatype":"DATE","length":7,"defaultvalue":"","comments":"Date of in process","nullable":true,"name":"IN_PROCESS_DATE","precision":""},
{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"In process file name","nullable":true,"name":"IN_PROCESS_FILE","precision":""},
{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Whether in process required","nullable":true,"name":"IN_PROCESS_REQUIRED","precision":""},
{"datatype":"VARCHAR2","length":128,"defaultvalue":"","comments":"Number of IPO, IPO stands for Internal Purchase Order","nullable":true,"name":"IPO_NUM","precision":""},
{"datatype":"VARCHAR2","length":256,"defaultvalue":"","comments":"Name of last edit by","nullable":true,"name":"LAST_EDIT_BY","precision":""},
{"datatype":"DATE","length":7,"defaultvalue":"","comments":"Date of last edit","nullable":true,"name":"LAST_EDIT_DATE","precision":""},
{"datatype":"VARCHAR2","length":64,"defaultvalue":"","comments":"LOC RPM","nullable":true,"name":"LCO_RPM","precision":""},
{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"The location of qual from","nullable":true,"name":"LOCATION_FROM","precision":""},
{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"The location of qual to","nullable":true,"name":"LOCATION_TO","precision":""},
{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Market Segment as defined in PDH","nullable":true,"name":"MARKET_SEGMENT","precision":""},
{"datatype":"VARCHAR2","length":32,"defaultvalue":"","comments":"Maturity Phase of the Drive as inherited from the Qualification Plan","nullable":true,"name":"MATURITY_PHASE","precision":""},
{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Maturity Phase Revision 1 location","nullable":true,"name":"MATURITY_PHASE_REV1","precision":""},
{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Maturity Phase Revision 2 location","nullable":true,"name":"MATURITY_PHASE_REV2","precision":""},
{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Maturity Phase Revision 3 location","nullable":true,"name":"MATURITY_PHASE_REV3","precision":""},
{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Motor Speed","nullable":true,"name":"MOTOR_SPEED","precision":""},
{"datatype":"VARCHAR2","length":64,"defaultvalue":"","comments":"Original Build site","nullable":true,"name":"ORIGINAL_BUILD_SITE","precision":""},
{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Out going file name","nullable":true,"name":"OUT_GOING_FILE","precision":""},
{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Wheter out going required","nullable":true,"name":"OUT_GOING_REQUIRED","precision":""},{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Parametric file name","nullable":true,"name":"PARAMETRIC_FILE","precision":""},{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Flag to trigger Automatic reporting","nullable":true,"name":"PARAMETRIC_LABEL","precision":""},{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Whether parametric required","nullable":true,"name":"PARAMETRIC_REQUIRED","precision":""},{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Priority of this qual","nullable":true,"name":"PRIORITY","precision":""},{"datatype":"VARCHAR2","length":128,"defaultvalue":"","comments":"Lead Product or Leveraged Product Name only (Interface goes in INTERFACE)\t- Lead Product (Testing \/ Results Tab).","nullable":true,"name":"PRODUCT_FAMILY","precision":""},{"datatype":"VARCHAR2","length":128,"defaultvalue":"","comments":"Type of Product such as SBS, Drive Level, and etc.","nullable":true,"name":"PRODUCT_TYPE","precision":""},{"datatype":"DATE","length":7,"defaultvalue":"","comments":"Date of pull","nullable":true,"name":"PULL_DATE","precision":""},{"datatype":"VARCHAR2","length":256,"defaultvalue":"","comments":"Qual purpose","nullable":true,"name":"PURPOSE","precision":""},{"datatype":"VARCHAR2","length":256,"defaultvalue":"","comments":"Qual change info, Qual stands for Qualification","nullable":true,"name":"QUAL_CHANGE","precision":""},{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Class of qual","nullable":true,"name":"QUAL_CLASS","precision":""},{"datatype":"VARCHAR2","length":4000,"defaultvalue":"","comments":"History of qual","nullable":true,"name":"QUAL_HIST","precision":""},{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Whether need qual plan","nullable":true,"name":"QUAL_PLAN_NEEDED","precision":""},{"datatype":"VARCHAR2","length":64,"defaultvalue":"","comments":"Status of qual requirement","nullable":true,"name":"QUAL_REQ_STATUS","precision":""},
{"datatype":"VARCHAR2","length":256,"defaultvalue":"","comments":"Type of qual","nullable":true,"name":"QUAL_TYPE","precision":""},
{"datatype":"NUMBER","length":22,"defaultvalue":"","comments":"Capture RDT Qty for Capacity Planning prior to Test Plan Creation. RDT stands for Reliability Demostration Test","nullable":true,"name":"RDT_QTY","precision":""},{"datatype":"DATE","length":7,"defaultvalue":"","comments":"Receive date","nullable":true,"name":"RECEIVE_DATE","precision":""},{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Location of final Report file for a given qualification","nullable":true,"name":"REPORT_FILE","precision":""},{"datatype":"VARCHAR2","length":32,"defaultvalue":"","comments":"Qequesting eng global id","nullable":true,"name":"REQUESTING_ENG_GLOBAL_ID","precision":""},{"datatype":"VARCHAR2","length":32,"defaultvalue":"","comments":"Requesting group","nullable":true,"name":"REQUESTING_GROUP","precision":""},{"datatype":"VARCHAR2","length":128,"defaultvalue":"","comments":"Qual Request ID","nullable":false,"name":"REQUEST_UID","precision":""},{"datatype":"DATE","length":7,"defaultvalue":"","comments":"Date of qual approval","nullable":true,"name":"REQUIRED_APPROVAL_DATE","precision":""},{"datatype":"DATE","length":7,"defaultvalue":"","comments":"Started date","nullable":true,"name":"REQUIRED_START_DATE","precision":""},{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Email of person is responsible of this build","nullable":true,"name":"RESP_FOR_BUILD","precision":""},{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Email of person is responsible of IPO","nullable":true,"name":"RESP_FOR_IPO","precision":""},{"datatype":"DATE","length":7,"defaultvalue":"","comments":"Risk approved date","nullable":true,"name":"RISK_APPROVED_DATE","precision":""},{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Email of person is second responsible of IPO","nullable":true,"name":"SECOND_RESP_FOR_BUILD","precision":""},{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Email of person is second responsible of this build","nullable":true,"name":"SECOND_RESP_FOR_IPO","precision":""},{"datatype":"DATE","length":7,"defaultvalue":"","comments":"Date of ship","nullable":true,"name":"SHIP_DATE","precision":""},{"datatype":"VARCHAR2","length":64,"defaultvalue":"","comments":"Shrewsbury RPM","nullable":true,"name":"SHR_RPM","precision":""},{"datatype":"VARCHAR2","length":64,"defaultvalue":"","comments":"SKD RPM, SKD stands for South Korea Design Center","nullable":true,"name":"SKD_RPM","precision":""},{"datatype":"VARCHAR2","length":32,"defaultvalue":"","comments":"Phase of slam","nullable":true,"name":"SLAM_PHASE","precision":""},{"datatype":"VARCHAR2","length":32,"defaultvalue":"","comments":"TCO will send record into FACTS outside the scope of Internal - Reliablity testing and will modify to Internal - Design occassionally to hide records from reports","nullable":true,"name":"SOURCE","precision":""},{"datatype":"VARCHAR2","length":64,"defaultvalue":"","comments":"Science Park RPM","nullable":true,"name":"SPK_RPM","precision":""},{"datatype":"VARCHAR2","length":128,"defaultvalue":"","comments":"Inherited from Streamline Qual when requests are launched from the Streamline Qual Request, SQT stands for Streamlined Qualifiation Teams","nullable":true,"name":"SQT_NUM","precision":""},{"datatype":"VARCHAR2","length":64,"defaultvalue":"","comments":"This is referred to as State on the Qual Request Form due to legacy reports","nullable":true,"name":"STATUS","precision":""},{"datatype":"VARCHAR2","length":1024,"defaultvalue":"","comments":"Status Comments from users","nullable":true,"name":"STATUS_COMMENTS","precision":""},{"datatype":"NUMBER","length":22,"defaultvalue":"","comments":"","nullable":true,"name":"STREAMLINE_QUAL_KEY","precision":38},{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Expert email of subject","nullable":true,"name":"SUBJECT_EXPERT","precision":""},{"datatype":"VARCHAR2","length":64,"defaultvalue":"","comments":"Suzhou RPM","nullable":true,"name":"SUZ_RPM","precision":""},{"datatype":"VARCHAR2","length":128,"defaultvalue":"","comments":"System level","nullable":true,"name":"SYSTEM_LEVEL","precision":""},{"datatype":"VARCHAR2","length":64,"defaultvalue":"","comments":"Minnesota RPM","nullable":true,"name":"TCO_RPM","precision":""},{"datatype":"VARCHAR2","length":1024,"defaultvalue":"","comments":"Name of the Test Bed that was inherited from the Qualification Plan","nullable":true,"name":"TEST_BED","precision":""},{"datatype":"VARCHAR2","length":32,"defaultvalue":"","comments":"Test group","nullable":true,"name":"TEST_GROUP","precision":""},{"datatype":"VARCHAR2","length":32,"defaultvalue":"","comments":"Location of test","nullable":true,"name":"TEST_LOCATION","precision":""},{"datatype":"NUMBER","length":22,"defaultvalue":"","comments":"Surrogate key that uniquely identifies a location in LOCATION_DIM..","nullable":true,"name":"TO_LOCATION_KEY","precision":38},{"datatype":"VARCHAR2","length":64,"defaultvalue":"","comments":"TTK RPM","nullable":true,"name":"TTK_RPM","precision":""},{"datatype":"VARCHAR2","length":12,"defaultvalue":"","comments":"Mark as \"Yes\" if FACTS should use Detailed Description when records are created in FACTS","nullable":true,"name":"USE_DETAIL_DESC","precision":""},{"datatype":"VARCHAR2","length":512,"defaultvalue":"","comments":"Impact of volume","nullable":true,"name":"VOLUME_IMPACT","precision":""}];
    return res.status(OK).json({
        "status": 200,
        "message": "Mock Data",
        "message_code": "",
        "i18n_code": 'en',
        "data": result,
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

export const getTableObjectInfo = async (req: Request, res: Response) => {
    /**INPUT 
     * datasource: EDW
        tableName: PRODUCT_QUALIFICATIONS_FACT
        tableOwner: ATHENA
        tableAlias: PRODUCT_QUALIFICATIONS_FACT
        subjectArea: ATHENA
        useSynonym: false
     */
    let result:any = [];
    return res.status(OK).json({
        "status": 200,
        "message": "Mock Data",
        "message_code": "",
        "i18n_code": 'en',
        "data": result,
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

export const getTableData = async (req: Request, res: Response) => {

    /**INPUT
     * datasource: EDW
        tableName: BOM_PRIMARY_SUB_HIERARCHY_FACT
        tableOwner: MATERIAL_BOM
        tableAlias: BOM_FACT
        subjectArea: BOM
        useSynonym: false
        page: 1
        start: 0
        limit: 25
     */

    return res.status(OK).json({
        "status": 200,
        "message": "Mock Data",
        "message_code": "",
        "i18n_code": 'en',
        "data": tabledataData,
        "metaData":{"successProperty":"success","fields":[{"name":"BATCH_SEQ_ID"},{"name":"BOM_ORDER_SEQ_ID"},{"name":"BOM_TYPE"},{"name":"CHILD_PRIMARY_COMP_PROD_KEY"},{"name":"CHILD_PRODUCT_KEY"},{"name":"CHILD_SOURCE_TYPE"},{"name":"CONTROLLING_ORG_FLAG"},{"name":"DEPTH"},{"name":"ECR_IN_RELATIONSHIPS"},{"name":"ECR_OUT_RELATIONSHIPS"},{"name":"EFFECTIVITY_END_DATE"},{"name":"EFFECTIVITY_END_DATE_KEY"},{"name":"EFFECTIVITY_START_DATE"},{"name":"EFFECTIVITY_START_DATE_KEY"},{"name":"ETL_LOAD_DATE"},{"name":"GROUP_NUM"},{"name":"HEAD_ASSY_TYPE_CODE"},{"name":"HEAD_PRODUCT_KEY"},{"name":"HIGHEST_PARENT_FLAG"},{"name":"LOWEST_CHILD_FLAG"},{"name":"OLD_EFFECTIVITY_END_DATE"},{"name":"OLD_EFFECTIVITY_START_DATE"},{"name":"PARENT_PRODUCT_KEY"},
        {"name":"QUANTITY"},{"name":"SEAGATE_FIND_NUM"},{"name":"SITE_LOCATION_KEY"},{"name":"SOURCE_CREATE_DATE_TIME"}],"messageProperty":"message","root":"data","columns":[{"dataIndex":"BATCH_SEQ_ID","text":"BATCH_SEQ_ID","width":210},{"dataIndex":"BOM_ORDER_SEQ_ID","text":"BOM_ORDER_SEQ_ID","width":210},{"dataIndex":"BOM_TYPE","text":"BOM_TYPE","width":210},{"dataIndex":"CHILD_PRIMARY_COMP_PROD_KEY","text":"CHILD_PRIMARY_COMP_PROD_KEY","width":210},{"dataIndex":"CHILD_PRODUCT_KEY","text":"CHILD_PRODUCT_KEY","width":210},{"dataIndex":"CHILD_SOURCE_TYPE","text":"CHILD_SOURCE_TYPE","width":210},{"dataIndex":"CONTROLLING_ORG_FLAG","text":"CONTROLLING_ORG_FLAG","width":210},{"dataIndex":"DEPTH","text":"DEPTH","width":210},{"dataIndex":"ECR_IN_RELATIONSHIPS","text":"ECR_IN_RELATIONSHIPS","width":210},{"dataIndex":"ECR_OUT_RELATIONSHIPS","text":"ECR_OUT_RELATIONSHIPS","width":210},{"dataIndex":"EFFECTIVITY_END_DATE","text":"EFFECTIVITY_END_DATE","width":210},{"dataIndex":"EFFECTIVITY_END_DATE_KEY","text":"EFFECTIVITY_END_DATE_KEY","width":210},{"dataIndex":"EFFECTIVITY_START_DATE","text":"EFFECTIVITY_START_DATE","width":210},{"dataIndex":"EFFECTIVITY_START_DATE_KEY","text":"EFFECTIVITY_START_DATE_KEY","width":210},{"dataIndex":"ETL_LOAD_DATE","text":"ETL_LOAD_DATE","width":210},{"dataIndex":"GROUP_NUM","text":"GROUP_NUM","width":210},{"dataIndex":"HEAD_ASSY_TYPE_CODE","text":"HEAD_ASSY_TYPE_CODE","width":210},{"dataIndex":"HEAD_PRODUCT_KEY","text":"HEAD_PRODUCT_KEY","width":210},{"dataIndex":"HIGHEST_PARENT_FLAG","text":"HIGHEST_PARENT_FLAG","width":210},{"dataIndex":"LOWEST_CHILD_FLAG","text":"LOWEST_CHILD_FLAG","width":210},{"dataIndex":"OLD_EFFECTIVITY_END_DATE","text":"OLD_EFFECTIVITY_END_DATE","width":210},{"dataIndex":"OLD_EFFECTIVITY_START_DATE","text":"OLD_EFFECTIVITY_START_DATE","width":210},{"dataIndex":"PARENT_PRODUCT_KEY","text":"PARENT_PRODUCT_KEY","width":210},{"dataIndex":"QUANTITY","text":"QUANTITY","width":210},{"dataIndex":"SEAGATE_FIND_NUM","text":"SEAGATE_FIND_NUM","width":210},{"dataIndex":"SITE_LOCATION_KEY","text":"SITE_LOCATION_KEY","width":210},{"dataIndex":"SOURCE_CREATE_DATE_TIME","text":"SOURCE_CREATE_DATE_TIME","width":210}],"totalProperty":"total"},
        "meta": {}
    })

    
}

export const getHadoopTablesColumns = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getAppendedColumns = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getProgramOrderId = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getPrimaryKeys = async (req: Request, res: Response) => {
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};
