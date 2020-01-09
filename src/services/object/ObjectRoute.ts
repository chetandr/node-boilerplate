import { Router } from "express"
import { validateSchema } from "../../middleware/JsonValidator"
import { jsonArr }  from './ObjectSchema'
import * as objectController from './ObjectController'
const router = Router();

/**
 *  Get All Users - "GET /programs"
 **/
router.get('/', objectController.getObject);

/**
 *  Get All Users - "GET /getHadoopMetaData"
 **/
router.get('/hadoopMetaData', objectController.getHadoopMetaData);


/**
 *  Get All Users - "GET /getHadoopTableType"
 **/
router.get('/hadoopTableType', objectController.getHadoopTableType);


/**
 *  Get All Users - "GET /getXml"
 **/
router.get('/xml', objectController.getXml);


/**
 *  Get All Users - "GET /getFailDesc"
 **/
router.get('/failDesc', objectController.getFailDesc);


/**
 *  Get All Users - "GET /getColumns"
 **/
router.get('/columns', objectController.getColumns);


/**
 *  Get All Users - "GET /getDistinctValues"
 **/
router.get('/distinctValues', objectController.getDistinctValues);

/**
 *  Get All Users - "GET /getHadoopColumn"
 **/
router.get('/hadoopColumn', objectController.getHadoopColumn);

/**
 *  Get All Users - "GET /getTableColumnInfo"
 **/
router.get('/tableColumnInfo', objectController.getTableColumnInfo);

/**
 *  Get All Users - "GET /getTableObjectInfo"
 **/
router.get('/tableObjectInfo', objectController.getTableObjectInfo);

/**
 *  Get All Users - "GET /getHadoopTablesColumns"
 **/
router.get('/hadoopTablesColumns', objectController.getHadoopTablesColumns);

/**
 *  Get All Users - "GET /getAppendedColumns"
 **/
router.get('/appendedColumns', objectController.getAppendedColumns);

/**
 *  Get All Users - "GET /getProgramOrderId"
 **/
router.get('/programOrderId', objectController.getProgramOrderId);

/**
 *  Get All Users - "GET /getPrimaryKeys"
 **/    
router.get('/primaryKeys', objectController.getPrimaryKeys);

/**
 *  Export
 */
export default router;