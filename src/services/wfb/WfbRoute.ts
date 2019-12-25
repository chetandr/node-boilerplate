import { Router } from "express"
import { validateSchema } from "../../middleware/JsonValidator"
import { jsonArr }  from './WfbSchema'
import * as wfbController from './WfbController'
const router = Router();

/**
 *  Get All Workflow - "GET /api/workflows/all"
 **/
router.get('/', wfbController.getWfb);

/**
 *  Add One - "POST /api/workflows/add"
 */

router.post('/', validateSchema('addWfb', jsonArr), wfbController.addWfb);

/**
 * Update - "PUT /api/workflows/update/:id"
 */

router.put('/:id', validateSchema('updateWfb', jsonArr), wfbController.updateWfb);

/**
 * Delete - "DELETE /api/workflows/delete/:id"
 */

router.delete('/:id', wfbController.deleteWfb);

/**
 *  Export
 */
export default router;
