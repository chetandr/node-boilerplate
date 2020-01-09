import { Router } from "express"
import * as objectBuilderController from './QueryBuilderController'
const router = Router();

/**
 *  Get parameters - "GET query builder"
 **/
router.get('/', objectBuilderController.queryBuilder);

/**
 *  Get parameters - "GET /hadoopMetaData"
 **/
router.get('/hadoopMetaData', objectBuilderController.hadoopMetaData);

/**
 *  Get parameter metadata by name - "GET /hadoopTableType"
 **/
router.get('/hadoopTableType', objectBuilderController.hadoopTableType);

/**
 *  Get Parameter metadata by name - "GET /failDesc"
 **/
router.get('/failDesc', objectBuilderController.failDesc);


/**
 *  Get parameters - "GET /xml"
 **/
router.get('/xml', objectBuilderController.xml);

/**
 * GET - "GET /columns"
 */

router.get('/columns', objectBuilderController.columns);

/**
 *  Get parameters - "GET /getHadoopColumn"
 **/
router.get('/distinctValues', objectBuilderController.distinctValues);

/**
 *  Get parameters - "GET /getHadoopColumn"
 **/
router.get('/hadoopColumn', objectBuilderController.getHadoopColumn);

/**
 *  Get parameters - "GET /getTableColumnInfo"
 **/
router.get('/tableColumnInfo', objectBuilderController.getTableColumnInfo);

/**
 *  Get parameters - "GET /getTableObjectInfo"
 **/
router.get('/tableObjectInfo', objectBuilderController.getTableObjectInfo);

/**
 *  Get parameters - "GET /getHadoopTablesColumns"
 **/
router.get('/hadoopTablesColumns', objectBuilderController.getHadoopTablesColumns);

/**
 *  Get parameters - "GET /getAppendedColumns"
 **/
router.get('/appendedColumns', objectBuilderController.getAppendedColumns);

/**
 *  Get parameters - "GET /getProgramOrderId"
 **/
router.get('/programOrderId', objectBuilderController.getProgramOrderId);

/**
 *  Get parameters - "GET /getPrimaryKeys"
 **/
router.get('/primaryKeys', objectBuilderController.getPrimaryKeys);

/**
 *  Export
 */
export default router;
