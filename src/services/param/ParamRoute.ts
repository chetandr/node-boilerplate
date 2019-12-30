import { Router } from "express"
import { validateSchema } from "../../middleware/JsonValidator"
import { jsonArr }  from './ParamSchema'
import * as paramController from './ParamController'
const router = Router();

/**
 *  Get All Users - "GET /api/programs"
 **/
router.get('/', paramController.getParams);

/**
 *  Add One - "POST /api/program"
 */

router.post('/', validateSchema('addParams', jsonArr), paramController.addParams);

/**
 * Update - "PUT /api/program/:id"
 */

router.put('/:id', validateSchema('updateParams', jsonArr), paramController.updateParams);

/**
 * Delete - "DELETE /api/program/:id"
 */

router.delete('/:id', paramController.deleteParams);

/**
 *  Export
 */
export default router;
