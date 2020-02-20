export const datasetsTreeData = `
{"id":"root","children":[{"text":"None","id":"/seamnt/sasdata-dev/sasdata/ecube/results/E9005417/None","children":[]},{"path":"/seamnt/sasdata-dev/sasdata/ecube/results/E9005417","date_modified":"02/14/2020 11:44:05 AM","path_and_name":"&Results_Path/E9005417/all.sas7bdat","size":"131072","text":"all.sas7bdat","id":"&Results_Path/E9005417/all.sas7bdat","leaf":true,"name":"all.sas7bdat"}]}
`
export const metadataData = {"isInstance":false,
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
"builderVersion":1.5};

export const xmlData = 
{
   "quickpicksRequired": "false",
   "Connection_name": "EDW",
   "default_quick_picks": [],
   "table": [
		{
         "alias": "DRIVE_PRODUCT_ST_MODEL_DIM",
         "name": "DRIVE_PRODUCT_ST_MODEL_DIM",
         "owner": "DIM",
         "level": "2",
         "parent": "TEST_RECORD_FACT",
         "nickname": "DRPRDST",
         "join": "LEFT OUTER JOIN DIM.DRIVE_PRODUCT_ST_MODEL_DIM DRIVE_PRODUCT_ST_MODEL_DIM ON (TEST_RECORD_FACT.DRIVE_PRODUCT_ST_MODEL_KEY = DRIVE_PRODUCT_ST_MODEL_DIM.DRIVE_PRODUCT_ST_MODEL_KEY)",
         "weight": "202",
         "replaceItems": [],
         "quickPicks2": [
            {
               "pickType": "date",
               "placeinJoin": "false",
               "quoted": "true",
               "column": {
                  "value": "30-Dec-2019",
                  "text": "DRIVE_PRODUCT_ST_MODEL_DIM.APPLICATION_SEGMENT_ABBR"
               }
            },
            {
               "pickType": "date",
               "placeinJoin": "false",
               "quoted": "true",
               "column": {
                  "value": "26-Dec-2019",
                  "text": "DRIVE_PRODUCT_ST_MODEL_DIM.APPLICATION_SEGMENT_ABBR"
               }
            },
            {
               "pickType": "text",
               "placeinJoin": "false",
               "quoted": "true",
               "column": {
                  "value": "abc",
                  "text": "DRIVE_PRODUCT_ST_MODEL_DIM.APPLICATION_SEGMENT_ABBR"
               }
            }
         ],
         "required_quick_picks": [],
         "default_quick_picks": [],
         "customItems": [
            {
               "groupByRequired": "false",
               "source": "database",
               "SQL": "CONCAT(APPLICATION_SEGMENT_ABBR,'-',APPLICATION_SEGMENT_CODE,'-',APPLICATION_SEGMENT_DESC)",
               "ColumnAlias": "DESCRIPTION",
               "Description": "saample test",
               "joinAlias": "DRIVE_PRODUCT_ST_MODEL_DIM"
            },
            {
               "groupByRequired": "false",
               "source": "database",
               "SQL": "CONCAT(APPLICATION_SEGMENT_ABBR,'-',APPLICATION_SEGMENT_CODE,'-',APPLICATION_SEGMENT_DESC)",
               "ColumnAlias": "DESCRIPTION1",
               "Description": "saample test",
               "joinAlias": "DRIVE_PRODUCT_ST_MODEL_DIM"
            },
            {
               "groupByRequired": "false",
               "source": "database",
               "SQL": "CONCAT(APPLICATION_SEGMENT_ABBR,'-',APPLICATION_SEGMENT_CODE)",
               "ColumnAlias": "DESCRIPTION_S",
               "Description": "saample test",
               "joinAlias": "DRIVE_PRODUCT_ST_MODEL_DIM"
            },
            {
               "groupByRequired": "false",
               "source": "database",
               "SQL": "select * from drive_product_st_model_dim",
               "ColumnAlias": "SAMPLE",
               "Description": "saample test",
               "joinAlias": "DRIVE_PRODUCT_ST_MODEL_DIM"
            }
         ]
      },
      {
         "alias": "PRD_QUALIFICATION_DATE",
         "name": "DATE_DIM",
         "owner": "DIM",
         "level": "1",
         "parent": "PRODUCT_QUALIFICATIONS_FACT",
         "nickname": "PQFDT",
         "join": "LEFT OUTER JOIN DIM.DATE_DIM PRD_QUALIFICATION_DATE ON (PRODUCT_QUALIFICATIONS_FACT.CREATED_DATE_KEY = PRD_QUALIFICATION_DATE.DATE_KEY)",
         "weight": "103",
         "replaceItems": [],
         "quickPicks2": [
            {
               "pickType": "date",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "PRD_QUALIFICATION_DATE.ACTUAL_DATE"
            },
            {
               "pickType": "text",
               "placeinJoin": "false",
               "quoted": "true",
               "column": {
                  "value": "Test",
                  "text": "PRD_QUALIFICATION_DATE.ACTUAL_DATE"
               }
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "PRD_QUALIFICATION_DATE.CALENDAR_QUARTER",
               "query": "select distinct calendar_quarter\n                from dim.date_dim\n                where calendar_quarter is not null\n                order by calendar_quarter"
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "PRD_QUALIFICATION_DATE.CALENDAR_YEAR",
               "query": "select distinct calendar_year\n                from dim.date_dim\n                where calendar_year is not null\n                order by calendar_year"
            },
            {
               "pickType": "numeric",
               "placeinJoin": "false",
               "quoted": "false",
               "column": {
                  "value": "0",
                  "text": "PRD_QUALIFICATION_DATE.FISCAL_PERIOD_AGE"
               }
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "PRD_QUALIFICATION_DATE.FISCAL_QUARTER",
               "query": "select distinct fiscal_quarter\n                from dim.date_dim\n                where fiscal_quarter is not null\n                order by fiscal_quarter"
            },
            {
               "pickType": "numeric",
               "placeinJoin": "false",
               "quoted": "false",
               "column": {
                  "value": "0",
                  "text": "PRD_QUALIFICATION_DATE.FISCAL_QUARTER_AGE"
               }
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "PRD_QUALIFICATION_DATE.FISCAL_WEEK",
               "query": "select distinct fiscal_week\n                from dim.date_dim\n                where fiscal_week is not null\n                order by fiscal_week"
            },
            {
               "pickType": "numeric",
               "placeinJoin": "false",
               "quoted": "false",
               "column": {
                  "value": "0",
                  "text": "PRD_QUALIFICATION_DATE.FISCAL_WEEK_AGE"
               }
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "PRD_QUALIFICATION_DATE.FISCAL_YEAR",
               "query": "select distinct fiscal_year\n                from dim.date_dim\n                where fiscal_year is not null\n                order by fiscal_year"
            },
            {
               "pickType": "numeric",
               "placeinJoin": "false",
               "quoted": "false",
               "column": {
                  "value": "0",
                  "text": "PRD_QUALIFICATION_DATE.FISCAL_YEAR_AGE"
               }
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "true",
               "column": "PRD_QUALIFICATION_DATE.MONTH_YEAR_NAME",
               "query": "select distinct month_year_name as label, month_year_name as value, month_year_num\n                from dim.date_dim\n                where month_year_name is not null\n                order by month_year_num"
            },
            {
               "pickType": "numeric",
               "placeinJoin": "false",
               "quoted": "true",
               "column": {
                  "value": "3",
                  "text": "PRD_QUALIFICATION_DATE.SYS_NC00051$"
               }
            }
         ],
         "required_quick_picks": [],
         "default_quick_picks": []
      },
      {
         "alias": "PRD_QUALIFICATION_EMPLOYEE",
         "name": "EMPLOYEE_DIM",
         "owner": "DIM",
         "level": "1",
         "parent": "PRODUCT_QUALIFICATIONS_FACT",
         "nickname": "PQFEMP",
         "join": "LEFT OUTER JOIN DIM.EMPLOYEE_DIM PRD_QUALIFICATION_EMPLOYEE ON (PRODUCT_QUALIFICATIONS_FACT.CREATED_USER_EMP_KEY = PRD_QUALIFICATION_EMPLOYEE.EMPLOYEE_KEY)",
         "weight": "102",
         "replaceItems": [],
         "quickPicks2": {
            "pick": {
               "pickType": "numeric",
               "placeinJoin": "false",
               "quoted": "true",
               "column": {
                  "value": "123",
                  "text": "PRD_QUALIFICATION_EMPLOYEE.CEO_GLOBAL_ID"
               }
            }
         },
         "required_quick_picks": [],
         "default_quick_picks": []
      },
      {
         "alias": "PRD_QUALIFICATION_FRM_LOCATION",
         "name": "LOCATION_DIM",
         "owner": "DIM",
         "level": "1",
         "parent": "PRODUCT_QUALIFICATIONS_FACT",
         "nickname": "PQFFLOC",
         "join": "LEFT OUTER JOIN DIM.LOCATION_DIM PRD_QUALIFICATION_FRM_LOCATION ON (PRODUCT_QUALIFICATIONS_FACT.FROM_LOCATION_KEY = PRD_QUALIFICATION_FRM_LOCATION.LOCATION_KEY)",
         "weight": "101",
         "replaceItems": [],
         "quickPicks2": [
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "true",
               "column": "PRD_QUALIFICATION_FRM_LOCATION.LOCATION_CODE",
               "query": "select distinct location_code, rpad(convert(trim(substr(location_desc,1,34)), 'UTF8', 'WE8ISO8859P1'),36,'.') || location_code as display\n                from dim.location_dim\n                where location_desc is not null\n                and location_code is not null\n                order by display"
            },
            {
               "pickType": "text",
               "placeinJoin": "false",
               "quoted": "true",
               "column": {
                  "value": "'AMK'",
                  "text": "PRD_QUALIFICATION_FRM_LOCATION.OPERATION"
               }
            }
         ],
         "required_quick_picks": [],
         "default_quick_picks": []
      },
      {
         "alias": "PRD_QUALIFICATION_TO_LOCATION",
         "name": "LOCATION_DIM",
         "owner": "DIM",
         "level": "1",
         "parent": "PRODUCT_QUALIFICATIONS_FACT",
         "nickname": "PQFTLOC",
         "join": "LEFT OUTER JOIN DIM.LOCATION_DIM PRD_QUALIFICATION_TO_LOCATION ON (PRODUCT_QUALIFICATIONS_FACT.TO_LOCATION_KEY = PRD_QUALIFICATION_TO_LOCATION.LOCATION_KEY)",
         "weight": "100",
         "replaceItems": [],
         "quickPicks2": [
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "true",
               "column": "PRD_QUALIFICATION_TO_LOCATION.LOCATION_CODE",
               "query": "select distinct location_code, rpad(convert(trim(substr(location_desc,1,34)), 'UTF8', 'WE8ISO8859P1'),36,'.') || location_code as display\n                from dim.location_dim\n                where location_desc is not null\n                and location_code is not null\n                order by display"
            },
            {
               "pickType": "text",
               "placeinJoin": "false",
               "quoted": "true",
               "column": {
                  "value": "'AMK'",
                  "text": "PRD_QUALIFICATION_TO_LOCATION.OPERATION"
               }
            }
         ],
         "required_quick_picks": [],
         "default_quick_picks": []
      },
      {
         "alias": "PRODUCT_QUALIFICATIONS_FACT",
         "name": "PRODUCT_QUALIFICATIONS_FACT",
         "owner": "ATHENA",
         "level": "0",
         "nickname": "PQF",
         "weight": "1",
         "replaceItems": [],
         "quickPicks2": [],
         "required_quick_picks": [],
         "default_quick_picks": []
      },
      {
         "alias": "STREAMLINE_QUAL_DIM",
         "name": "STREAMLINE_QUAL_DIM",
         "owner": "ATHENA",
         "level": "1",
         "parent": "PRODUCT_QUALIFICATIONS_FACT",
         "nickname": "SQD",
         "join": "RIGHT OUTER JOIN ATHENA.STREAMLINE_QUAL_DIM STREAMLINE_QUAL_DIM ON (PRODUCT_QUALIFICATIONS_FACT.STREAMLINE_QUAL_KEY = STREAMLINE_QUAL_DIM.STREAMLINE_QUAL_KEY)",
         "weight": "104",
         "replaceItems": [],
         "quickPicks2": [],
         "required_quick_picks": [],
         "default_quick_picks": []
      },
      {
         "alias": "STREAMLINE_QUAL_IMP_DATE",
         "name": "DATE_DIM",
         "owner": "DIM",
         "level": "3",
         "parent": "STREAMLINE_QUAL_IMP_FACT",
         "nickname": "SQIFDT",
         "join": "LEFT OUTER JOIN DIM.DATE_DIM STREAMLINE_QUAL_IMP_DATE ON (STREAMLINE_QUAL_IMP_FACT.SOURCE_LAST_UPDATED_DATE_KEY = STREAMLINE_QUAL_IMP_DATE.DATE_KEY)",
         "weight": "300",
         "replaceItems": [],
         "quickPicks2": [
            {
               "pickType": "date",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "STREAMLINE_QUAL_IMP_DATE.ACTUAL_DATE"
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "STREAMLINE_QUAL_IMP_DATE.CALENDAR_QUARTER",
               "query": "select distinct calendar_quarter\n                from dim.date_dim\n                where calendar_quarter is not null\n                order by calendar_quarter"
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "STREAMLINE_QUAL_IMP_DATE.CALENDAR_YEAR",
               "query": "select distinct calendar_year\n                from dim.date_dim\n                where calendar_year is not null\n                order by calendar_year"
            },
            {
               "pickType": "numeric",
               "placeinJoin": "false",
               "quoted": "false",
               "column": {
                  "value": "0",
                  "text": "STREAMLINE_QUAL_IMP_DATE.FISCAL_PERIOD_AGE"
               }
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "STREAMLINE_QUAL_IMP_DATE.FISCAL_QUARTER",
               "query": "select distinct fiscal_quarter\n                from dim.date_dim\n                where fiscal_quarter is not null\n                order by fiscal_quarter"
            },
            {
               "pickType": "numeric",
               "placeinJoin": "false",
               "quoted": "false",
               "column": {
                  "value": "0",
                  "text": "STREAMLINE_QUAL_IMP_DATE.FISCAL_QUARTER_AGE"
               }
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "STREAMLINE_QUAL_IMP_DATE.FISCAL_WEEK",
               "query": "select distinct fiscal_week\n                from dim.date_dim\n                where fiscal_week is not null\n                order by fiscal_week"
            },
            {
               "pickType": "numeric",
               "placeinJoin": "false",
               "quoted": "false",
               "column": {
                  "value": "0",
                  "text": "STREAMLINE_QUAL_IMP_DATE.FISCAL_WEEK_AGE"
               }
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "STREAMLINE_QUAL_IMP_DATE.FISCAL_YEAR",
               "query": "select distinct fiscal_year\n                from dim.date_dim\n                where fiscal_year is not null\n                order by fiscal_year"
            },
            {
               "pickType": "numeric",
               "placeinJoin": "false",
               "quoted": "false",
               "column": {
                  "value": "0",
                  "text": "STREAMLINE_QUAL_IMP_DATE.FISCAL_YEAR_AGE"
               }
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "true",
               "column": "STREAMLINE_QUAL_IMP_DATE.MONTH_YEAR_NAME",
               "query": "select distinct month_year_name as label, month_year_name as value, month_year_num\n                from dim.date_dim\n                where month_year_name is not null\n                order by month_year_num"
            }
         ],
         "required_quick_picks": [],
         "default_quick_picks": []
      },
      {
         "alias": "STREAMLINE_QUAL_IMP_FACT",
         "name": "STREAMLINE_QUAL_IMP_FACT",
         "owner": "ATHENA",
         "level": "2",
         "parent": "STREAMLINE_QUAL_DIM",
         "nickname": "SQIF",
         "join": "LEFT OUTER JOIN ATHENA.STREAMLINE_QUAL_IMP_FACT STREAMLINE_QUAL_IMP_FACT ON (STREAMLINE_QUAL_DIM.STREAMLINE_QUAL_KEY = STREAMLINE_QUAL_IMP_FACT.STREAMLINE_QUAL_KEY)",
         "weight": "205",
         "replaceItems": [],
         "quickPicks2": [],
         "required_quick_picks": [],
         "default_quick_picks": []
      },
      {
         "alias": "TEST_RECORD_BUILD_LOCATION",
         "name": "LOCATION_DIM",
         "owner": "DIM",
         "level": "2",
         "parent": "TEST_RECORD_FACT",
         "nickname": "TRFBLOC",
         "join": "LEFT OUTER JOIN DIM.LOCATION_DIM TEST_RECORD_BUILD_LOCATION ON (TEST_RECORD_FACT.BUILD_LOCATION_KEY = TEST_RECORD_BUILD_LOCATION.LOCATION_KEY)",
         "weight": "203",
         "replaceItems": [],
         "quickPicks2": [
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "true",
               "column": "TEST_RECORD_BUILD_LOCATION.LOCATION_CODE",
               "query": "select distinct location_code, rpad(convert(trim(substr(location_desc,1,34)), 'UTF8', 'WE8ISO8859P1'),36,'.') || location_code as display\n                from dim.location_dim\n                where location_desc is not null\n                and location_code is not null\n                order by display"
            },
            {
               "pickType": "text",
               "placeinJoin": "false",
               "quoted": "true",
               "column": {
                  "value": "'AMK'",
                  "text": "TEST_RECORD_BUILD_LOCATION.OPERATION"
               }
            }
         ],
         "required_quick_picks": [],
         "default_quick_picks": []
      },
      {
         "alias": "TEST_RECORD_DATE",
         "name": "DATE_DIM",
         "owner": "DIM",
         "level": "2",
         "parent": "TEST_RECORD_FACT",
         "nickname": "TRFDT",
         "join": "LEFT OUTER JOIN DIM.DATE_DIM TEST_RECORD_DATE ON (TEST_RECORD_FACT.CREATED_DATE_KEY = TEST_RECORD_DATE.DATE_KEY)",
         "weight": "204",
         "replaceItems": [],
         "quickPicks2": [
            {
               "pickType": "date",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "TEST_RECORD_DATE.ACTUAL_DATE"
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "TEST_RECORD_DATE.CALENDAR_QUARTER",
               "query": "select distinct calendar_quarter\n                from dim.date_dim\n                where calendar_quarter is not null\n                order by calendar_quarter"
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "TEST_RECORD_DATE.CALENDAR_YEAR",
               "query": "select distinct calendar_year\n                from dim.date_dim\n                where calendar_year is not null\n                order by calendar_year"
            },
            {
               "pickType": "numeric",
               "placeinJoin": "false",
               "quoted": "false",
               "column": {
                  "value": "0",
                  "text": "TEST_RECORD_DATE.FISCAL_PERIOD_AGE"
               }
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "TEST_RECORD_DATE.FISCAL_QUARTER",
               "query": "select distinct fiscal_quarter\n                from dim.date_dim\n                where fiscal_quarter is not null\n                order by fiscal_quarter"
            },
            {
               "pickType": "numeric",
               "placeinJoin": "false",
               "quoted": "false",
               "column": {
                  "value": "0",
                  "text": "TEST_RECORD_DATE.FISCAL_QUARTER_AGE"
               }
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "TEST_RECORD_DATE.FISCAL_WEEK",
               "query": "select distinct fiscal_week\n                from dim.date_dim\n                where fiscal_week is not null\n                order by fiscal_week"
            },
            {
               "pickType": "numeric",
               "placeinJoin": "false",
               "quoted": "false",
               "column": {
                  "value": "0",
                  "text": "TEST_RECORD_DATE.FISCAL_WEEK_AGE"
               }
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "false",
               "column": "TEST_RECORD_DATE.FISCAL_YEAR",
               "query": "select distinct fiscal_year\n                from dim.date_dim\n                where fiscal_year is not null\n                order by fiscal_year"
            },
            {
               "pickType": "numeric",
               "placeinJoin": "false",
               "quoted": "false",
               "column": {
                  "value": "0",
                  "text": "TEST_RECORD_DATE.FISCAL_YEAR_AGE"
               }
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "true",
               "column": "TEST_RECORD_DATE.MONTH_YEAR_NAME",
               "query": "select distinct month_year_name as label, month_year_name as value, month_year_num\n                from dim.date_dim\n                where month_year_name is not null\n                order by month_year_num"
            }
         ],
         "required_quick_picks": [],
         "default_quick_picks": []
      },
      {
         "alias": "TEST_RECORD_FACT",
         "name": "TEST_RECORD_FACT",
         "owner": "ATHENA",
         "level": "1",
         "parent": "PRODUCT_QUALIFICATIONS_FACT",
         "nickname": "TRF",
         "join": "LEFT OUTER JOIN ATHENA.TEST_RECORD_FACT TEST_RECORD_FACT ON (PRODUCT_QUALIFICATIONS_FACT.PRODUCT_FAMILY = TEST_RECORD_FACT.ATHENA_FAMILY AND PRODUCT_QUALIFICATIONS_FACT.TEST_BED = TEST_RECORD_FACT.TEST_BED AND PRODUCT_QUALIFICATIONS_FACT.CONCAT_MATURITY = TEST_RECORD_FACT.CONCAT_MATURITY)",
         "weight": "2",
         "replaceItems": [],
         "quickPicks2": [],
         "required_quick_picks": [],
         "default_quick_picks": []
      },
      {
         "alias": "TEST_RECORD_LOCATION",
         "name": "LOCATION_DIM",
         "owner": "DIM",
         "level": "2",
         "parent": "TEST_RECORD_FACT",
         "nickname": "TRFLOC",
         "join": "LEFT OUTER JOIN DIM.LOCATION_DIM TEST_RECORD_LOCATION ON (TEST_RECORD_FACT.TEST_LOCATION_KEY = TEST_RECORD_LOCATION.LOCATION_KEY)",
         "weight": "200",
         "replaceItems": [],
         "quickPicks2": [
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "true",
               "column": "TEST_RECORD_LOCATION.LOCATION_CODE",
               "query": "select distinct location_code, rpad(convert(trim(substr(location_desc,1,34)), 'UTF8', 'WE8ISO8859P1'),36,'.') || location_code as display\n                from dim.location_dim\n                where location_desc is not null\n                and location_code is not null\n                order by display"
            },
            {
               "pickType": "text",
               "placeinJoin": "false",
               "quoted": "true",
               "column": {
                  "value": "'AMK'",
                  "text": "TEST_RECORD_LOCATION.OPERATION"
               }
            }
         ],
         "required_quick_picks": [],
         "default_quick_picks": []
      },
      {
         "alias": "TEST_RECORD_PRODUCT",
         "name": "PRODUCT_DIM",
         "owner": "DIM",
         "level": "2",
         "parent": "TEST_RECORD_FACT",
         "nickname": "TRFPRD",
         "join": "LEFT OUTER JOIN DIM.PRODUCT_DIM TEST_RECORD_PRODUCT ON (TEST_RECORD_FACT.PRODUCT_KEY = TEST_RECORD_PRODUCT.PRODUCT_KEY)",
         "weight": "201",
         "replaceItems": [],
         "quickPicks2": [
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "true",
               "column": {
                  "value": "500",
                  "text": "TEST_RECORD_PRODUCT.PRODUCT_FORMAT_CAPACITY"
               },
               "query": "select distinct PRODUCT_FORMAT_CAPACITY\n                from DIM.PRODUCT_DIM\n                where PRODUCT_FORMAT_CAPACITY is not null\n                order by PRODUCT_FORMAT_CAPACITY"
            },
            {
               "pickType": "queryList",
               "quoted": "true",
               "placeinJoin": "false",
               "column": {
                  "value": "ALPINE",
                  "text": "TEST_RECORD_PRODUCT.PRODUCT_INTERNAL_NAME"
               },
               "query": "select distinct PRODUCT_INTERNAL_NAME\n                from DIM.PRODUCT_DIM\n                where PRODUCT_INTERNAL_NAME is not null\n                order by PRODUCT_INTERNAL_NAME"
            },
            {
               "pickType": "text",
               "placeinJoin": "false",
               "quoted": "true",
               "column": {
                  "value": "9A2001-030",
                  "text": "TEST_RECORD_PRODUCT.PRODUCT_PART_NUM"
               }
            },
            {
               "pickType": "text",
               "placeinJoin": "false",
               "quoted": "true",
               "column": {
                  "value": "ST3750640NS",
                  "text": "TEST_RECORD_PRODUCT.PRODUCT_ST_MODEL_NUM"
               }
            },
            {
               "pickType": "queryList",
               "placeinJoin": "false",
               "quoted": "true",
               "column": {
                  "value": "DRIVE",
                  "text": "TEST_RECORD_PRODUCT.PRODUCT_TYPE"
               },
               "query": "select distinct PRODUCT_TYPE\n                from DIM.PRODUCT_DIM\n                where PRODUCT_TYPE is not null\n                order by PRODUCT_TYPE"
            }
         ],
         "required_quick_picks": [],
         "default_quick_picks": []
      }
   ],
   "failures": [],
   "parallel_chunk_date_fields": []
};

export const tabledataData = [{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":1,
"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"","EFFECTIVITY_END_DATE_KEY":20091109,
"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4196599,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N",
"BOM_TYPE":"Pri","BATCH_SEQ_ID":5429344,"BOM_ORDER_SEQ_ID":1018,"EFFECTIVITY_START_DATE":"October, 02 2009 17:07:32",
"SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"ECR0140389","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"",
"PARENT_PRODUCT_KEY":4203265,"SEAGATE_FIND_NUM":909,"EFFECTIVITY_END_DATE":"November, 09 2009 19:14:24","OLD_EFFECTIVITY_START_DATE":"",
"EFFECTIVITY_START_DATE_KEY":20091002,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"Y","DEPTH":2,
"SOURCE_CREATE_DATE_TIME":"November, 17 2011 14:20:06"},
{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":8,
"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"","EFFECTIVITY_END_DATE_KEY":20100420,"OLD_EFFECTIVITY_END_DATE":"",
"CHILD_PRODUCT_KEY":4177187,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":5429344,"BOM_ORDER_SEQ_ID":1019,"EFFECTIVITY_START_DATE":"November, 09 2009 19:14:24","SITE_LOCATION_KEY":10,
"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4203265,"SEAGATE_FIND_NUM":910,
"EFFECTIVITY_END_DATE":"April, 20 2010 11:40:18","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20091109,
"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":2,"SOURCE_CREATE_DATE_TIME":"November, 17 2011 14:20:06"},
{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":10,"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"","EFFECTIVITY_END_DATE_KEY":20091109,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4177187,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":5429344,"BOM_ORDER_SEQ_ID":1020,"EFFECTIVITY_START_DATE":"October, 02 2009 17:07:32","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4203265,"SEAGATE_FIND_NUM":910,"EFFECTIVITY_END_DATE":"November, 09 2009 19:14:24","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20091002,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":2,"SOURCE_CREATE_DATE_TIME":"November, 17 2011 14:20:06"},
{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":11,"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"","EFFECTIVITY_END_DATE_KEY":19000101,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4177187,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":5429344,"BOM_ORDER_SEQ_ID":1021,"EFFECTIVITY_START_DATE":"April, 20 2010 11:40:18","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4203265,"SEAGATE_FIND_NUM":910,"EFFECTIVITY_END_DATE":"","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20100420,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":2,"SOURCE_CREATE_DATE_TIME":"November, 17 2011 14:20:06"},
{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":16,"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"","EFFECTIVITY_END_DATE_KEY":19000101,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4177186,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":5429344,"BOM_ORDER_SEQ_ID":1022,"EFFECTIVITY_START_DATE":"February, 01 2010 11:20:59","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4203265,"SEAGATE_FIND_NUM":911,"EFFECTIVITY_END_DATE":"","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20100201,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":2,"SOURCE_CREATE_DATE_TIME":"November, 17 2011 14:20:06"},
{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":16,"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"","EFFECTIVITY_END_DATE_KEY":20100201,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4176484,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":5429344,"BOM_ORDER_SEQ_ID":1023,"EFFECTIVITY_START_DATE":"November, 09 2009 19:14:24","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4203265,"SEAGATE_FIND_NUM":911,"EFFECTIVITY_END_DATE":"February, 01 2010 11:20:59","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20091109,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":2,"SOURCE_CREATE_DATE_TIME":"November, 17 2011 14:20:06"},
{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":4,"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"","EFFECTIVITY_END_DATE_KEY":20091109,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4176484,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":5429344,"BOM_ORDER_SEQ_ID":1024,"EFFECTIVITY_START_DATE":"October, 02 2009 17:07:32","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4203265,"SEAGATE_FIND_NUM":911,"EFFECTIVITY_END_DATE":"November, 09 2009 19:14:24","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20091002,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":2,"SOURCE_CREATE_DATE_TIME":"November, 17 2011 14:20:06"},
{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":1,"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"ECR0081350","EFFECTIVITY_END_DATE_KEY":19000101,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4183022,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":8605532,"BOM_ORDER_SEQ_ID":3363,"EFFECTIVITY_START_DATE":"July, 25 2007 14:50:25","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4188523,"SEAGATE_FIND_NUM":114,"EFFECTIVITY_END_DATE":"","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20070725,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":4,"SOURCE_CREATE_DATE_TIME":"August, 06 2014 10:30:56"},
{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":1,"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"ECR0081350","EFFECTIVITY_END_DATE_KEY":19000101,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4183023,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":8605532,"BOM_ORDER_SEQ_ID":3364,"EFFECTIVITY_START_DATE":"July, 25 2007 14:50:25","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4188523,"SEAGATE_FIND_NUM":115,"EFFECTIVITY_END_DATE":"","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20070725,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":4,"SOURCE_CREATE_DATE_TIME":"August, 06 2014 10:30:56"},{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":1,"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"ECR0081350","EFFECTIVITY_END_DATE_KEY":19000101,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4183024,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":8605532,"BOM_ORDER_SEQ_ID":3365,"EFFECTIVITY_START_DATE":"July, 25 2007 14:50:25","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4188523,"SEAGATE_FIND_NUM":116,"EFFECTIVITY_END_DATE":"","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20070725,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":4,"SOURCE_CREATE_DATE_TIME":"August, 06 2014 10:30:56"},{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":4,"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"ECR0081350","EFFECTIVITY_END_DATE_KEY":19000101,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4167381,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":8605532,"BOM_ORDER_SEQ_ID":3366,"EFFECTIVITY_START_DATE":"July, 25 2007 14:50:25","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4188523,"SEAGATE_FIND_NUM":701,"EFFECTIVITY_END_DATE":"","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20070725,
"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":4,"SOURCE_CREATE_DATE_TIME":"August, 06 2014 10:30:56"},{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":4,"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"ECR0081350","EFFECTIVITY_END_DATE_KEY":19000101,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4167386,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":8605532,"BOM_ORDER_SEQ_ID":3367,"EFFECTIVITY_START_DATE":"July, 25 2007 14:50:25","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4188523,"SEAGATE_FIND_NUM":702,"EFFECTIVITY_END_DATE":"","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20070725,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":4,"SOURCE_CREATE_DATE_TIME":"August, 06 2014 10:30:56"},{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":7,"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"ECR0081350","EFFECTIVITY_END_DATE_KEY":19000101,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4167385,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":8605532,"BOM_ORDER_SEQ_ID":3368,"EFFECTIVITY_START_DATE":"July, 25 2007 14:50:25","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4188523,"SEAGATE_FIND_NUM":703,"EFFECTIVITY_END_DATE":"","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20070725,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":4,"SOURCE_CREATE_DATE_TIME":"August, 06 2014 10:30:56"},{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":5,
"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"ECR0081350","EFFECTIVITY_END_DATE_KEY":19000101,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4167396,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":8605532,"BOM_ORDER_SEQ_ID":3369,"EFFECTIVITY_START_DATE":"July, 25 2007 14:50:25","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4188523,"SEAGATE_FIND_NUM":704,"EFFECTIVITY_END_DATE":"","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20070725,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":4,"SOURCE_CREATE_DATE_TIME":"August, 06 2014 10:30:56"},{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4239966,"QUANTITY":4,"ETL_LOAD_DATE":"December, 08 2018 10:50:41","ECR_IN_RELATIONSHIPS":"ECR0081350","EFFECTIVITY_END_DATE_KEY":19000101,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4184238,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":8605532,"BOM_ORDER_SEQ_ID":3370,"EFFECTIVITY_START_DATE":"July, 25 2007 14:50:25","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4188523,"SEAGATE_FIND_NUM":705,"EFFECTIVITY_END_DATE":"","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20070725,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":4,"SOURCE_CREATE_DATE_TIME":"August, 06 2014 10:30:56"},{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4251758,"QUANTITY":3,"ETL_LOAD_DATE":"December, 08 2018 10:50:42","ECR_IN_RELATIONSHIPS":"","EFFECTIVITY_END_DATE_KEY":19000101,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4202475,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":7157177,"BOM_ORDER_SEQ_ID":811,"EFFECTIVITY_START_DATE":"October, 27 2011 14:19:04","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4249724,"SEAGATE_FIND_NUM":104,"EFFECTIVITY_END_DATE":"","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20111027,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":4,"SOURCE_CREATE_DATE_TIME":"July, 17 2013 13:40:44"},{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4251758,"QUANTITY":2,"ETL_LOAD_DATE":"December, 08 2018 10:50:42","ECR_IN_RELATIONSHIPS":"","EFFECTIVITY_END_DATE_KEY":19000101,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4223409,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":7157177,"BOM_ORDER_SEQ_ID":812,"EFFECTIVITY_START_DATE":"October, 27 2011 14:19:04","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4249724,"SEAGATE_FIND_NUM":105,"EFFECTIVITY_END_DATE":"","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20111027,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"Y","DEPTH":4,"SOURCE_CREATE_DATE_TIME":"July, 17 2013 13:40:44"},{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4251758,"QUANTITY":2,"ETL_LOAD_DATE":"December, 08 2018 10:50:42","ECR_IN_RELATIONSHIPS":"","EFFECTIVITY_END_DATE_KEY":19000101,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4223410,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":7157177,"BOM_ORDER_SEQ_ID":813,"EFFECTIVITY_START_DATE":"October, 27 2011 14:19:04","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4249724,"SEAGATE_FIND_NUM":106,"EFFECTIVITY_END_DATE":"","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20111027,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"Y","DEPTH":4,"SOURCE_CREATE_DATE_TIME":"July, 17 2013 13:40:45"},{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4251758,"QUANTITY":1,"ETL_LOAD_DATE":"December, 08 2018 10:50:42","ECR_IN_RELATIONSHIPS":"","EFFECTIVITY_END_DATE_KEY":19000101,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4222641,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":7157177,"BOM_ORDER_SEQ_ID":814,"EFFECTIVITY_START_DATE":"December, 06 2011 16:13:23","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4249724,"SEAGATE_FIND_NUM":107,"EFFECTIVITY_END_DATE":"","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20111206,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":4,"SOURCE_CREATE_DATE_TIME":"July, 17 2013 13:40:45"},{"GROUP_NUM":0,"HEAD_PRODUCT_KEY":4251758,"QUANTITY":2,"ETL_LOAD_DATE":"December, 08 2018 10:50:42","ECR_IN_RELATIONSHIPS":"","EFFECTIVITY_END_DATE_KEY":20111206,"OLD_EFFECTIVITY_END_DATE":"","CHILD_PRODUCT_KEY":4222641,"HEAD_ASSY_TYPE_CODE":"OTHER","HIGHEST_PARENT_FLAG":"N","BOM_TYPE":"Pri","BATCH_SEQ_ID":7157177,"BOM_ORDER_SEQ_ID":815,"EFFECTIVITY_START_DATE":"October, 27 2011 14:19:04","SITE_LOCATION_KEY":10,"ECR_OUT_RELATIONSHIPS":"","LOWEST_CHILD_FLAG":"Y","CHILD_PRIMARY_COMP_PROD_KEY":"","PARENT_PRODUCT_KEY":4249724,"SEAGATE_FIND_NUM":107,"EFFECTIVITY_END_DATE":"December, 06 2011 16:13:23","OLD_EFFECTIVITY_START_DATE":"","EFFECTIVITY_START_DATE_KEY":20111027,"CHILD_SOURCE_TYPE":"Pri","CONTROLLING_ORG_FLAG":"N","DEPTH":4,"SOURCE_CREATE_DATE_TIME":"July, 17 2013 13:40:45"}];