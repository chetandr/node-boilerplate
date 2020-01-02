import { Router } from "express"
import { validateSchema } from "../../middleware/JsonValidator"
import { jsonArr }  from './ParamSchema'
import * as paramController from './ParamController'
const router = Router();

/**
 *  Get Params - "GET /api/params"
 **/
router.get('/:type?', paramController.getParams);

/**
 *  Get Parameter metadata by name - "GET /api/params/metabyname"
 **/
router.get('/metadata/:type', paramController.getParamMetadata);

/**
 *  Get Parameter metadata by name - "GET /api/params/output_param"
 **/
router.get('/output_param/:programKey?', paramController.getOutputParamByProgramKey);

/**
 *  Export
 */
export default router;
