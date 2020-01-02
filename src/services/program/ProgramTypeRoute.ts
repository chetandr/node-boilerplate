import { Router } from "express"
import { validateSchema } from "../../middleware/JsonValidator"
import * as programController from './ProgramController'
const router = Router();

/**
 *  Get All Programs - "GET /api/programs
 **/
router.get('/', programController.getProgramTypeTree);



export default router;
