import { Router } from "express"
import { validateSchema } from "../../middleware/JsonValidator"
import { jsonArr }  from './QuerySchema'
import * as queryController from './QueryController'
const router = Router();

/**
 *  Get All Users - "GET /programs"
 **/
router.get('/', queryController.getQuery);


/**
 *  Get All Users - "GET /programs"
 **/
router.post('/', queryController.saveQueryBuilder);


/**
 *  Get All Users - "GET /getHadoopMetaData"
 **/
router.get('/hadoopMetaData', queryController.getHadoopMetaData);


/**
 *  Get All Users - "GET /getHadoopTableType"
 **/
router.get('/hadoopTableType', queryController.getHadoopTableType);


/**
 *  Get All Users - "GET /getXml"
 **/
router.get('/xml', queryController.getXml);


/**
 *  Get All Users - "GET /getFailDesc"
 **/
router.get('/failDesc', queryController.getFailDesc);


/**
 *  Get All Users - "GET /getColumns"
 **/
router.get('/columns', queryController.getColumns);


/**
 *  Get All Users - "GET /getDistinctValues"
 **/
router.get('/distinctValues', queryController.getDistinctValues);

/**
 *  Get All Users - "GET /getHadoopColumn"
 **/
router.get('/hadoopColumn', queryController.getHadoopColumn);

/**
 *  Get All Users - "GET /getTableColumnInfo"
 **/
router.get('/tableColumnInfo', queryController.getTableColumnInfo);

/**
 *  Get All Users - "GET /getTableObjectInfo"
 **/
router.get('/tableObjectInfo', queryController.getTableObjectInfo);

/**
 *  Get All Users - "GET /getHadoopTablesColumns"
 **/
router.get('/hadoopTablesColumns', queryController.getHadoopTablesColumns);

/**
 *  Get All Users - "GET /getAppendedColumns"
 **/
router.get('/appendedColumns', queryController.getAppendedColumns);

/**
 *  Get All Users - "GET /getProgramOrderId"
 **/
router.get('/programOrderId', queryController.getProgramOrderId);

/**
 *  Get All Users - "GET /getPrimaryKeys"
 **/    
router.get('/primaryKeys', queryController.getPrimaryKeys);

/**
 *  Export
 */
export default router;