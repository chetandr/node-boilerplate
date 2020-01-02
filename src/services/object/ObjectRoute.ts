import { Router } from "express"
import { validateSchema } from "../../middleware/JsonValidator"
import { jsonArr }  from './ObjectSchema'
import * as objectController from './ObjectController'
const router = Router();

/**
 *  Get All Users - "GET /api/programs"
 **/
router.get('/', objectController.getObject);

/**
 *  Get All Users - "GET /api/getHadoopMetaData"
 **/
router.get('/hadoopMetaData', objectController.getHadoopMetaData);


/**
 *  Get All Users - "GET /api/getHadoopTableType"
 **/
router.get('/hadoopTableType', objectController.getHadoopTableType);


/**
 *  Get All Users - "GET /api/getXml"
 **/
router.get('/xml', objectController.getXml);


/**
 *  Get All Users - "GET /api/getFailDesc"
 **/
router.get('/failDesc', objectController.getFailDesc);


/**
 *  Get All Users - "GET /api/getColumns"
 **/
router.get('/columns', objectController.getColumns);


/**
 *  Get All Users - "GET /api/getDistinctValues"
 **/
router.get('/distinctValues', objectController.getDistinctValues);

/**
 *  Add One - "POST /api/program"
 */
router.post('/', validateSchema('addObject', jsonArr), objectController.addObject);

/**
 * Update - "PUT /api/program/:id"
 */
router.put('/:id', validateSchema('updateObject', jsonArr), objectController.updateObject);

/**
 * Delete - "DELETE /api/program/:id"
 */

router.delete('/:id', objectController.deleteObject);

/**
 *  Export
 */
export default router;