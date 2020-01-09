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
 *  Add One - "POST /program"
 */
router.post('/', validateSchema('addObject', jsonArr), objectController.addObject);

/**
 * Update - "PUT /program/:id"
 */
router.put('/:id', validateSchema('updateObject', jsonArr), objectController.updateObject);

/**
 * Delete - "DELETE /program/:id"
 */

router.delete('/:id', objectController.deleteObject);

/**
 *  Export
 */
export default router;