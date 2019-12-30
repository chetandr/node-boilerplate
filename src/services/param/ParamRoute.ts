import { Router } from "express"
import * as paramController from './ParamController'
const router = Router();

/**
 *  Get All Users - "GET /api/programs"
 **/
router.get('/', paramController.getParams);

/**
 *  Add One - "POST /api/program"
 */

router.post('/', paramController.addParam);

/**
 * Update - "PUT /api/program/:id"
 */

router.put('/:id', paramController.updateParam);

/**
 * Delete - "DELETE /api/program/:id"
 */

router.delete('/:id', paramController.deleteParam);

/**
 *  Export
 */
export default router;
