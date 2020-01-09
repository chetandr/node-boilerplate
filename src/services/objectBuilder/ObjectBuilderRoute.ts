import { Router } from "express"
import * as objectBuilderController from './ObjectBuilderController'
const router = Router();

/**
 *  Get parameters - "GET query builder"
 **/
router.get('/', objectBuilderController.queryBuilder);

/**
 *  Get parameters - "GET /api/hadoopMetaData"
 **/
router.get('/hadoopMetaData', objectBuilderController.hadoopMetaData);

/**
 *  Get parameter metadata by name - "GET /api/hadoopTableType"
 **/
router.get('/hadoopTableType', objectBuilderController.hadoopTableType);

/**
 *  Get Parameter metadata by name - "GET /api/failDesc"
 **/
router.get('/failDesc', objectBuilderController.failDesc);


/**
 *  Get parameters - "GET /api/xml"
 **/
router.get('/xml', objectBuilderController.xml);

/**
 *  Add One - "POST /api/"
 */

router.post('/', objectBuilderController.addObject);

/**
 * Update - "PUT /api/columns"
 */

router.get('/columns', objectBuilderController.columns);

/**
 *  Get parameters - "GET /api/getHadoopColumn"
 **/
router.get('/hadoopColumn', objectBuilderController.getHadoopColumn);

/**
 *  Get parameters - "GET /api/getTableColumnInfo"
 **/
router.get('/tableColumnInfo', objectBuilderController.getTableColumnInfo);

/**
 *  Get parameters - "GET /api/getTableObjectInfo"
 **/
router.get('/tableObjectInfo', objectBuilderController.getTableObjectInfo);

/**
 *  Get parameters - "GET /api/getHadoopTablesColumns"
 **/
router.get('/hadoopTablesColumns', objectBuilderController.getHadoopTablesColumns);

/**
 *  Get parameters - "GET /api/getAppendedColumns"
 **/
router.get('/appendedColumns', objectBuilderController.getAppendedColumns);

/**
 *  Get parameters - "GET /api/getProgramOrderId"
 **/
router.get('/programOrderId', objectBuilderController.getProgramOrderId);

/**
 *  Get parameters - "GET /api/getPrimaryKeys"
 **/
router.get('/primaryKeys', objectBuilderController.getPrimaryKeys);

/**
 *  Export
 */
export default router;
