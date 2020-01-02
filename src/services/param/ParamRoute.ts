import { Router } from "express"
import * as paramController from './ParamController'
const router = Router();

/**
 *  Get parameters - "GET /api/params"
 **/
router.get('/', paramController.getParams);

/**
 *  Get parameter metadata by name - "GET /api/params/metabyname"
 **/
router.get('/metadata/:type', paramController.getParamMetadata);

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
