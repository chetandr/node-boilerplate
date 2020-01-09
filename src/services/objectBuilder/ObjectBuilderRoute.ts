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
 *  Get parameters - "GET /api/hadoopMetaData"
 **/
router.get('/distinctValues', objectBuilderController.distinctValues);

/**
 * Delete - "DELETE /api/:object"
 */

// router.delete('/:object', objectBuilderController.deleteObject);

/**
 *  Export
 */
export default router;
