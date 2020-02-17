export const datasetsTreeData = `
{"id":"root","children":[{"text":"None","id":"/seamnt/sasdata-dev/sasdata/ecube/results/E9005417/None","children":[]},{"path":"/seamnt/sasdata-dev/sasdata/ecube/results/E9005417","date_modified":"02/14/2020 11:44:05 AM","path_and_name":"&Results_Path/E9005417/all.sas7bdat","size":"131072","text":"all.sas7bdat","id":"&Results_Path/E9005417/all.sas7bdat","leaf":true,"name":"all.sas7bdat"}]}
`
export const metadataData = `{"isInstance":false,
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

export const xmlData = `
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
         "alias": "DRIVE_PRODUCT_ST_MODEL_DIM",
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
         "alias": "PRD_QUALIFICATION_DATE",
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
         "alias": "PRD_QUALIFICATION_EMPLOYEE",
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
         "alias": "PRD_QUALIFICATION_FRM_LOCATION",
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
         "alias": "PRD_QUALIFICATION_TO_LOCATION",
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
         "alias": "PRODUCT_QUALIFICATIONS_FACT",
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
         "alias": "STREAMLINE_QUAL_DIM",
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
         "alias": "STREAMLINE_QUAL_IMP_DATE",
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
         "alias": "STREAMLINE_QUAL_IMP_FACT",
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
         "alias": "TEST_RECORD_BUILD_LOCATION",
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
         "alias": "TEST_RECORD_DATE",
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
         "alias": "TEST_RECORD_FACT",
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
         "alias": "TEST_RECORD_LOCATION",
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
         "alias": "TEST_RECORD_PRODUCT",
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
}
`