import { Router } from "express"
import * as programController from './ProgramController'
const router = Router();
/**
 *  Get All Programs by Environment eg. Dev Staging Prod  - "GET /api/promoteprograms/:envnum"
 **/
router.get('/:envnum', programController.getProgrambyEnv);



export default router;