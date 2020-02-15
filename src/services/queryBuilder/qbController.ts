import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
//import { paramMissingError, verifyJwt } from '@middleware';
import * as orm from "../../ormapis/requests";

export const getQueryBuilder = async (req: Request, res: Response) => {
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

export const saveQueryBuilder = async (req: Request, res: Response) => {
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

export const getHadoopMetaData = async (req: Request, res: Response) => {

    //Mock Data

    let result = [
        {"created_date":"2019-07-08 03:23:49.0","gid":"534180","last_updated_date":"2019-12-30 17:06:42.0","pid":"E1046926","result_description":"E1046926_Motor_join","rnum":"1","row_count":"4339725","table_alias_name":"Motor_join","table_name":"E1046926_Motor_join","total":"1945","workflow_node_id":"ef5b87fd-1375-4e54-a8fc-cd5edcc61251"},
        {"created_date":"2019-06-26 22:09:14.0","gid":"534180","last_updated_date":"2019-12-30 22:36:47.0","pid":"E1046926","result_description":"drive sn for linking with motor sn","rnum":"2","row_count":"-1","table_alias_name":"ort_cert_drive_sn","table_name":"E1046926_ort_cert_drive_sn","total":"1945","workflow_node_id":"1431330d-5a4c-4129-aeca-5d2dd17577e6"},
        {"created_date":"2017-11-28 03:45:38.0","gid":"503180","last_updated_date":"2017-11-28 03:45:38.0","pid":"E1050480","result_description":"None","rnum":"3","row_count":"33556","table_alias_name":"None","table_name":"E1050480_cust","total":"1945","workflow_node_id":"8cf6d719-49ff-4184-be0d-15943a81208e"},
        {"created_date":"2017-11-28 03:19:58.0","gid":"503180","last_updated_date":"2017-11-28 03:19:58.0","pid":"E1050480","result_description":"Pull PopMon Data from Hadoop","rnum":"4","row_count":"60887419","table_alias_name":"hadoop","table_name":"E1050480_hadoop","total":"1945","workflow_node_id":"bdf9861f-5568-4826-8486-31f27aca2206"}]

    return res.status(OK).json({
        "status": 200,
        "message": "Mock Data",
        "message_code": "",
        "i18n_code": 'en',
        "data": result,
        "meta": {
            "total": (result.length) ? result.length : 0,
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

export const getHadoopTableType = async (req: Request, res: Response) => {
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

export const getFailDesc = async (req: Request, res: Response) => {
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

export const getXML = async (req: Request, res: Response) => {

    //input - 
    //filePath: ../../../webdata/xml/ATHENA.xml
    //subjectArea: ATHENA

    let result = `<tables><quickpicksRequired>false</quickpicksRequired><Connection_name>EDW</Connection_name><default_quick_picks/><table alias="DRIVE_PRODUCT_ST_MODEL_DIM"><name>DRIVE_PRODUCT_ST_MODEL_DIM</name><owner>DIM</owner><level>2</level><parent>TEST_RECORD_FACT</parent><alias>DRIVE_PRODUCT_ST_MODEL_DIM</alias><nickname>DRPRDST</nickname><join>LEFT OUTER JOIN DIM.DRIVE_PRODUCT_ST_MODEL_DIM DRIVE_PRODUCT_ST_MODEL_DIM ON (TEST_RECORD_FACT.DRIVE_PRODUCT_ST_MODEL_KEY = DRIVE_PRODUCT_ST_MODEL_DIM.DRIVE_PRODUCT_ST_MODEL_KEY)</join><weight>202</weight><replaceItems/><quickPicks2><pick pickType="date" placeinJoin="false" quoted="true"><column value="16-Aug-2017">DRIVE_PRODUCT_ST_MODEL_DIM.APPLICATION_SEGMENT_ABBR</column></pick><pick pickType="date" placeinJoin="false" quoted="true"><column value="29-Dec-2019">DRIVE_PRODUCT_ST_MODEL_DIM.APPLICATION_SEGMENT_ABBR</column></pick><pick pickType="text" placeinJoin="false" quoted="true"><column value="abc">DRIVE_PRODUCT_ST_MODEL_DIM.APPLICATION_SEGMENT_ABBR</column></pick></quickPicks2><required_quick_picks/><default_quick_picks/><customItems><item groupByRequired="false" source="database"><SQL>CONCAT(APPLICATION_SEGMENT_ABBR,'-',APPLICATION_SEGMENT_CODE,'-',APPLICATION_SEGMENT_DESC)</SQL><ColumnAlias>DESCRIPTION</ColumnAlias><Description>saample test</Description><joinAlias>DRIVE_PRODUCT_ST_MODEL_DIM</joinAlias></item><item groupByRequired="false" source="database"><SQL>CONCAT(APPLICATION_SEGMENT_ABBR,'-',APPLICATION_SEGMENT_CODE,'-',APPLICATION_SEGMENT_DESC)</SQL><ColumnAlias>DESCRIPTION1</ColumnAlias><Description>saample test</Description><joinAlias>DRIVE_PRODUCT_ST_MODEL_DIM</joinAlias></item><item groupByRequired="false" source="database"><SQL>CONCAT(APPLICATION_SEGMENT_ABBR,'-',APPLICATION_SEGMENT_CODE)</SQL><ColumnAlias>DESCRIPTION_S</ColumnAlias><Description>saample test</Description><joinAlias>DRIVE_PRODUCT_ST_MODEL_DIM</joinAlias></item><item groupByRequired="false" source="database"><SQL>select * from drive_product_st_model_dim</SQL><ColumnAlias>SAMPLE</ColumnAlias><Description>saample test</Description><joinAlias>DRIVE_PRODUCT_ST_MODEL_DIM</joinAlias></item></customItems></table><table alias="PRD_QUALIFICATION_DATE"><name>DATE_DIM</name><owner>DIM</owner><level>1</level><parent>PRODUCT_QUALIFICATIONS_FACT</parent><alias>PRD_QUALIFICATION_DATE</alias><nickname>PQFDT</nickname><join>LEFT OUTER JOIN DIM.DATE_DIM PRD_QUALIFICATION_DATE ON (PRODUCT_QUALIFICATIONS_FACT.CREATED_DATE_KEY = PRD_QUALIFICATION_DATE.DATE_KEY)</join><weight>103</weight><replaceItems/><quickPicks2><pick pickType="date" placeinJoin="false" quoted="false"><column>PRD_QUALIFICATION_DATE.ACTUAL_DATE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>PRD_QUALIFICATION_DATE.CALENDAR_QUARTER</column><query>select distinct calendar_quarter
                from dim.date_dim
                where calendar_quarter is not null
                order by calendar_quarter</query></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>PRD_QUALIFICATION_DATE.CALENDAR_YEAR</column><query>select distinct calendar_year
                from dim.date_dim
                where calendar_year is not null
                order by calendar_year</query></pick><pick pickType="numeric" placeinJoin="false" quoted="false"><column value="0">PRD_QUALIFICATION_DATE.FISCAL_PERIOD_AGE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>PRD_QUALIFICATION_DATE.FISCAL_QUARTER</column><query>select distinct fiscal_quarter
                from dim.date_dim
                where fiscal_quarter is not null
                order by fiscal_quarter</query></pick><pick pickType="numeric" placeinJoin="false" quoted="false"><column value="0">PRD_QUALIFICATION_DATE.FISCAL_QUARTER_AGE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>PRD_QUALIFICATION_DATE.FISCAL_WEEK</column><query>select distinct fiscal_week
                from dim.date_dim
                where fiscal_week is not null
                order by fiscal_week</query></pick><pick pickType="numeric" placeinJoin="false" quoted="false"><column value="0">PRD_QUALIFICATION_DATE.FISCAL_WEEK_AGE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>PRD_QUALIFICATION_DATE.FISCAL_YEAR</column><query>select distinct fiscal_year
                from dim.date_dim
                where fiscal_year is not null
                order by fiscal_year</query></pick><pick pickType="numeric" placeinJoin="false" quoted="false"><column value="0">PRD_QUALIFICATION_DATE.FISCAL_YEAR_AGE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="true"><column>PRD_QUALIFICATION_DATE.MONTH_YEAR_NAME</column><query>select distinct month_year_name as label, month_year_name as value, month_year_num
                from dim.date_dim
                where month_year_name is not null
                order by month_year_num</query></pick><pick pickType="numeric" placeinJoin="false" quoted="true"><column value="3">PRD_QUALIFICATION_DATE.SYS_NC00051$</column></pick></quickPicks2><required_quick_picks/><default_quick_picks/></table><table alias="PRD_QUALIFICATION_EMPLOYEE"><name>EMPLOYEE_DIM</name><owner>DIM</owner><level>1</level><parent>PRODUCT_QUALIFICATIONS_FACT</parent><alias>PRD_QUALIFICATION_EMPLOYEE</alias><nickname>PQFEMP</nickname><join>LEFT OUTER JOIN DIM.EMPLOYEE_DIM PRD_QUALIFICATION_EMPLOYEE ON (PRODUCT_QUALIFICATIONS_FACT.CREATED_USER_EMP_KEY = PRD_QUALIFICATION_EMPLOYEE.EMPLOYEE_KEY)</join><weight>102</weight><replaceItems/><quickPicks2><pick pickType="numeric" placeinJoin="false" quoted="true"><column value="12">PRD_QUALIFICATION_EMPLOYEE.CEO_GLOBAL_ID</column></pick><pick pickType="numeric" placeinJoin="false" quoted="true"><column value="123">PRD_QUALIFICATION_EMPLOYEE.CEO_GLOBAL_ID</column></pick></quickPicks2><required_quick_picks/><default_quick_picks/></table><table alias="PRD_QUALIFICATION_FRM_LOCATION"><name>LOCATION_DIM</name><owner>DIM</owner><level>1</level><parent>PRODUCT_QUALIFICATIONS_FACT</parent><alias>PRD_QUALIFICATION_FRM_LOCATION</alias><nickname>PQFFLOC</nickname><join>LEFT OUTER JOIN DIM.LOCATION_DIM PRD_QUALIFICATION_FRM_LOCATION ON (PRODUCT_QUALIFICATIONS_FACT.FROM_LOCATION_KEY = PRD_QUALIFICATION_FRM_LOCATION.LOCATION_KEY)</join><weight>101</weight><replaceItems/><quickPicks2><pick pickType="queryList" placeinJoin="false" quoted="true"><column>PRD_QUALIFICATION_FRM_LOCATION.LOCATION_CODE</column><query>select distinct location_code, rpad(convert(trim(substr(location_desc,1,34)), 'UTF8', 'WE8ISO8859P1'),36,'.') || location_code as display
                from dim.location_dim
                where location_desc is not null
                and location_code is not null
                order by display</query></pick><pick pickType="text" placeinJoin="false" quoted="true"><column value="'AMK'">PRD_QUALIFICATION_FRM_LOCATION.OPERATION</column></pick></quickPicks2><required_quick_picks/><default_quick_picks/></table><table alias="PRD_QUALIFICATION_TO_LOCATION"><name>LOCATION_DIM</name><owner>DIM</owner><level>1</level><parent>PRODUCT_QUALIFICATIONS_FACT</parent><alias>PRD_QUALIFICATION_TO_LOCATION</alias><nickname>PQFTLOC</nickname><join>LEFT OUTER JOIN DIM.LOCATION_DIM PRD_QUALIFICATION_TO_LOCATION ON (PRODUCT_QUALIFICATIONS_FACT.TO_LOCATION_KEY = PRD_QUALIFICATION_TO_LOCATION.LOCATION_KEY)</join><weight>100</weight><replaceItems/><quickPicks2><pick pickType="queryList" placeinJoin="false" quoted="true"><column>PRD_QUALIFICATION_TO_LOCATION.LOCATION_CODE</column><query>select distinct location_code, rpad(convert(trim(substr(location_desc,1,34)), 'UTF8', 'WE8ISO8859P1'),36,'.') || location_code as display
                from dim.location_dim
                where location_desc is not null
                and location_code is not null
                order by display</query></pick><pick pickType="text" placeinJoin="false" quoted="true"><column value="'AMK'">PRD_QUALIFICATION_TO_LOCATION.OPERATION</column></pick></quickPicks2><required_quick_picks/><default_quick_picks/></table><table alias="PRODUCT_QUALIFICATIONS_FACT"><name>PRODUCT_QUALIFICATIONS_FACT</name><owner>ATHENA</owner><level>0</level><alias>PRODUCT_QUALIFICATIONS_FACT</alias><nickname>PQF</nickname><weight>1</weight><replaceItems/><quickPicks2/><required_quick_picks/><default_quick_picks/></table><table alias="STREAMLINE_QUAL_DIM"><name>STREAMLINE_QUAL_DIM</name><owner>ATHENA</owner><level>1</level><parent>PRODUCT_QUALIFICATIONS_FACT</parent><alias>STREAMLINE_QUAL_DIM</alias><nickname>SQD</nickname><join>RIGHT OUTER JOIN ATHENA.STREAMLINE_QUAL_DIM STREAMLINE_QUAL_DIM ON (PRODUCT_QUALIFICATIONS_FACT.STREAMLINE_QUAL_KEY = STREAMLINE_QUAL_DIM.STREAMLINE_QUAL_KEY)</join><weight>104</weight><replaceItems/><quickPicks2/><required_quick_picks/><default_quick_picks/></table><table alias="STREAMLINE_QUAL_IMP_DATE"><name>DATE_DIM</name><owner>DIM</owner><level>3</level><parent>STREAMLINE_QUAL_IMP_FACT</parent><alias>STREAMLINE_QUAL_IMP_DATE</alias><nickname>SQIFDT</nickname><join>LEFT OUTER JOIN DIM.DATE_DIM STREAMLINE_QUAL_IMP_DATE ON (STREAMLINE_QUAL_IMP_FACT.SOURCE_LAST_UPDATED_DATE_KEY = STREAMLINE_QUAL_IMP_DATE.DATE_KEY)</join><weight>300</weight><replaceItems/><quickPicks2><pick pickType="date" placeinJoin="false" quoted="false"><column>STREAMLINE_QUAL_IMP_DATE.ACTUAL_DATE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>STREAMLINE_QUAL_IMP_DATE.CALENDAR_QUARTER</column><query>select distinct calendar_quarter
                from dim.date_dim
                where calendar_quarter is not null
                order by calendar_quarter</query></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>STREAMLINE_QUAL_IMP_DATE.CALENDAR_YEAR</column><query>select distinct calendar_year
                from dim.date_dim
                where calendar_year is not null
                order by calendar_year</query></pick><pick pickType="numeric" placeinJoin="false" quoted="false"><column value="0">STREAMLINE_QUAL_IMP_DATE.FISCAL_PERIOD_AGE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>STREAMLINE_QUAL_IMP_DATE.FISCAL_QUARTER</column><query>select distinct fiscal_quarter
                from dim.date_dim
                where fiscal_quarter is not null
                order by fiscal_quarter</query></pick><pick pickType="numeric" placeinJoin="false" quoted="false"><column value="0">STREAMLINE_QUAL_IMP_DATE.FISCAL_QUARTER_AGE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>STREAMLINE_QUAL_IMP_DATE.FISCAL_WEEK</column><query>select distinct fiscal_week
                from dim.date_dim
                where fiscal_week is not null
                order by fiscal_week</query></pick><pick pickType="numeric" placeinJoin="false" quoted="false"><column value="0">STREAMLINE_QUAL_IMP_DATE.FISCAL_WEEK_AGE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>STREAMLINE_QUAL_IMP_DATE.FISCAL_YEAR</column><query>select distinct fiscal_year
                from dim.date_dim
                where fiscal_year is not null
                order by fiscal_year</query></pick><pick pickType="numeric" placeinJoin="false" quoted="false"><column value="0">STREAMLINE_QUAL_IMP_DATE.FISCAL_YEAR_AGE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="true"><column>STREAMLINE_QUAL_IMP_DATE.MONTH_YEAR_NAME</column><query>select distinct month_year_name as label, month_year_name as value, month_year_num
                from dim.date_dim
                where month_year_name is not null
                order by month_year_num</query></pick></quickPicks2><required_quick_picks/><default_quick_picks/></table><table alias="STREAMLINE_QUAL_IMP_FACT"><name>STREAMLINE_QUAL_IMP_FACT</name><owner>ATHENA</owner><level>2</level><parent>STREAMLINE_QUAL_DIM</parent><alias>STREAMLINE_QUAL_IMP_FACT</alias><nickname>SQIF</nickname><join>LEFT OUTER JOIN ATHENA.STREAMLINE_QUAL_IMP_FACT STREAMLINE_QUAL_IMP_FACT ON (STREAMLINE_QUAL_DIM.STREAMLINE_QUAL_KEY = STREAMLINE_QUAL_IMP_FACT.STREAMLINE_QUAL_KEY)</join><weight>205</weight><replaceItems/><quickPicks2/><required_quick_picks/><default_quick_picks/></table><table alias="TEST_RECORD_BUILD_LOCATION"><name>LOCATION_DIM</name><owner>DIM</owner><level>2</level><parent>TEST_RECORD_FACT</parent><alias>TEST_RECORD_BUILD_LOCATION</alias><nickname>TRFBLOC</nickname><join>LEFT OUTER JOIN DIM.LOCATION_DIM TEST_RECORD_BUILD_LOCATION ON (TEST_RECORD_FACT.BUILD_LOCATION_KEY = TEST_RECORD_BUILD_LOCATION.LOCATION_KEY)</join><weight>203</weight><replaceItems/><quickPicks2><pick pickType="queryList" placeinJoin="false" quoted="true"><column>TEST_RECORD_BUILD_LOCATION.LOCATION_CODE</column><query>select distinct location_code, rpad(convert(trim(substr(location_desc,1,34)), 'UTF8', 'WE8ISO8859P1'),36,'.') || location_code as display
                from dim.location_dim
                where location_desc is not null
                and location_code is not null
                order by display</query></pick><pick pickType="text" placeinJoin="false" quoted="true"><column value="'AMK'">TEST_RECORD_BUILD_LOCATION.OPERATION</column></pick></quickPicks2><required_quick_picks/><default_quick_picks/></table><table alias="TEST_RECORD_DATE"><name>DATE_DIM</name><owner>DIM</owner><level>2</level><parent>TEST_RECORD_FACT</parent><alias>TEST_RECORD_DATE</alias><nickname>TRFDT</nickname><join>LEFT OUTER JOIN DIM.DATE_DIM TEST_RECORD_DATE ON (TEST_RECORD_FACT.CREATED_DATE_KEY = TEST_RECORD_DATE.DATE_KEY)</join><weight>204</weight><replaceItems/><quickPicks2><pick pickType="date" placeinJoin="false" quoted="false"><column>TEST_RECORD_DATE.ACTUAL_DATE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>TEST_RECORD_DATE.CALENDAR_QUARTER</column><query>select distinct calendar_quarter
                from dim.date_dim
                where calendar_quarter is not null
                order by calendar_quarter</query></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>TEST_RECORD_DATE.CALENDAR_YEAR</column><query>select distinct calendar_year
                from dim.date_dim
                where calendar_year is not null
                order by calendar_year</query></pick><pick pickType="numeric" placeinJoin="false" quoted="false"><column value="0">TEST_RECORD_DATE.FISCAL_PERIOD_AGE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>TEST_RECORD_DATE.FISCAL_QUARTER</column><query>select distinct fiscal_quarter
                from dim.date_dim
                where fiscal_quarter is not null
                order by fiscal_quarter</query></pick><pick pickType="numeric" placeinJoin="false" quoted="false"><column value="0">TEST_RECORD_DATE.FISCAL_QUARTER_AGE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>TEST_RECORD_DATE.FISCAL_WEEK</column><query>select distinct fiscal_week
                from dim.date_dim
                where fiscal_week is not null
                order by fiscal_week</query></pick><pick pickType="numeric" placeinJoin="false" quoted="false"><column value="0">TEST_RECORD_DATE.FISCAL_WEEK_AGE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="false"><column>TEST_RECORD_DATE.FISCAL_YEAR</column><query>select distinct fiscal_year
                from dim.date_dim
                where fiscal_year is not null
                order by fiscal_year</query></pick><pick pickType="numeric" placeinJoin="false" quoted="false"><column value="0">TEST_RECORD_DATE.FISCAL_YEAR_AGE</column></pick><pick pickType="queryList" placeinJoin="false" quoted="true"><column>TEST_RECORD_DATE.MONTH_YEAR_NAME</column><query>select distinct month_year_name as label, month_year_name as value, month_year_num
                from dim.date_dim
                where month_year_name is not null
                order by month_year_num</query></pick></quickPicks2><required_quick_picks/><default_quick_picks/></table><table alias="TEST_RECORD_FACT"><name>TEST_RECORD_FACT</name><owner>ATHENA</owner><level>1</level><parent>PRODUCT_QUALIFICATIONS_FACT</parent><alias>TEST_RECORD_FACT</alias><nickname>TRF</nickname><join>LEFT OUTER JOIN ATHENA.TEST_RECORD_FACT TEST_RECORD_FACT ON (PRODUCT_QUALIFICATIONS_FACT.PRODUCT_FAMILY = TEST_RECORD_FACT.ATHENA_FAMILY AND PRODUCT_QUALIFICATIONS_FACT.TEST_BED = TEST_RECORD_FACT.TEST_BED AND PRODUCT_QUALIFICATIONS_FACT.CONCAT_MATURITY = TEST_RECORD_FACT.CONCAT_MATURITY)</join><weight>2</weight><replaceItems/><quickPicks2/><required_quick_picks/><default_quick_picks/></table><table alias="TEST_RECORD_LOCATION"><name>LOCATION_DIM</name><owner>DIM</owner><level>2</level><parent>TEST_RECORD_FACT</parent><alias>TEST_RECORD_LOCATION</alias><nickname>TRFLOC</nickname><join>LEFT OUTER JOIN DIM.LOCATION_DIM TEST_RECORD_LOCATION ON (TEST_RECORD_FACT.TEST_LOCATION_KEY = TEST_RECORD_LOCATION.LOCATION_KEY)</join><weight>200</weight><replaceItems/><quickPicks2><pick pickType="queryList" placeinJoin="false" quoted="true"><column>TEST_RECORD_LOCATION.LOCATION_CODE</column><query>select distinct location_code, rpad(convert(trim(substr(location_desc,1,34)), 'UTF8', 'WE8ISO8859P1'),36,'.') || location_code as display
                from dim.location_dim
                where location_desc is not null
                and location_code is not null
                order by display</query></pick><pick pickType="text" placeinJoin="false" quoted="true"><column value="'AMK'">TEST_RECORD_LOCATION.OPERATION</column></pick></quickPicks2><required_quick_picks/><default_quick_picks/></table><table alias="TEST_RECORD_PRODUCT"><name>PRODUCT_DIM</name><owner>DIM</owner><level>2</level><parent>TEST_RECORD_FACT</parent><alias>TEST_RECORD_PRODUCT</alias><nickname>TRFPRD</nickname><join>LEFT OUTER JOIN DIM.PRODUCT_DIM TEST_RECORD_PRODUCT ON (TEST_RECORD_FACT.PRODUCT_KEY = TEST_RECORD_PRODUCT.PRODUCT_KEY)</join><weight>201</weight><replaceItems/><quickPicks2><pick pickType="queryList" placeinJoin="false" quoted="true"><column value="500">TEST_RECORD_PRODUCT.PRODUCT_FORMAT_CAPACITY</column><query>select distinct PRODUCT_FORMAT_CAPACITY
                from DIM.PRODUCT_DIM
                where PRODUCT_FORMAT_CAPACITY is not null
                order by PRODUCT_FORMAT_CAPACITY</query></pick><pick pickType="queryList" placeinJoin="false" quoted="true"><column value="ALPINE">TEST_RECORD_PRODUCT.PRODUCT_INTERNAL_NAME</column><query>select distinct PRODUCT_INTERNAL_NAME
                from DIM.PRODUCT_DIM
                where PRODUCT_INTERNAL_NAME is not null
                order by PRODUCT_INTERNAL_NAME</query></pick><pick pickType="text" placeinJoin="false" quoted="true"><column value="9A2001-030">TEST_RECORD_PRODUCT.PRODUCT_PART_NUM</column></pick><pick pickType="text" placeinJoin="false" quoted="true"><column value="ST3750640NS">TEST_RECORD_PRODUCT.PRODUCT_ST_MODEL_NUM</column></pick><pick pickType="queryList" placeinJoin="false" quoted="true"><column value="DRIVE">TEST_RECORD_PRODUCT.PRODUCT_TYPE</column><query>select distinct PRODUCT_TYPE
                from DIM.PRODUCT_DIM
                where PRODUCT_TYPE is not null
                order by PRODUCT_TYPE</query></pick></quickPicks2><required_quick_picks/><default_quick_picks/></table><failures/><parallel_chunk_date_fields/></tables> `

    return res.status(OK).json({
        "status": 200,
        "message": `Mock Data for input -->
                    //filePath: ../../../webdata/xml/ATHENA.xml
                    //subjectArea: ATHENA`,
        "message_code": "",
        "i18n_code": 'en',
        "data": result,
        "meta": {
            "total": (result.length) ? result.length : 0,
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
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};

export const getHadoopColumn = async (req: Request, res: Response) => {
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

export const getHadoopTablesColumns = async (req: Request, res: Response) => {
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

export const getAppendedColumns = async (req: Request, res: Response) => {
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

export const getProgramOrderId = async (req: Request, res: Response) => {
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

export const getPrimaryKeys = async (req: Request, res: Response) => {
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
