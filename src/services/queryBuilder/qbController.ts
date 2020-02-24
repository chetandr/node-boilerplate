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
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getColumns = async (req: Request, res: Response) => {
    try {
        const result = await orm.post(req.originalUrl,req.body);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getDistinctValues = async (req: Request, res: Response) => {
    try {
        const result = await orm.post(req.originalUrl, req.body);
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
    try {
        const result = await orm.get(req.originalUrl);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
};

export const getTableObjectInfo = async (req: Request, res: Response) => {
    try {
        const result = await orm.post(req.originalUrl, req.body);
        return res.status(OK).json(result);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(err.statusCode).json(err.error);
    }
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
