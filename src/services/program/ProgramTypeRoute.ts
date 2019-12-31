import { Router } from "express"
import * as programController from './ProgramController'
const router = Router();

/**
 *  Get Program Type tree
 */

router.get('/', programController.getProgramTypeTree);



export default router;
