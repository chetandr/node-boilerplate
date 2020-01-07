import { Router } from "express"
import * as programController from './ProgramController'
const router = Router();

/**
 *  Get All Users - "GET Get Promote programs by Environment"
 **/
router.get('/:envnum', programController.getProgrambyEnv);

/**
 *  Add One - "POST /api/users/add"
 */

export default router;
