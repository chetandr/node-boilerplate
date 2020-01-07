import { Router } from "express"
import * as programController from './ProgramController'
const router = Router();

/**
 *  Get All Programs - "GET /api/programs
 **/
router.get('/', programController.getPrograms);

/**
 *  Add One - "POST /api/programs/add"
 */

router.post('/', programController.addProgram);

/**
 * Update - "PUT /api/programs/update/:id"
 */

router.put('/:id', programController.updateProgram);

/**
 * Delete - "DELETE /api/programs/delete/:id"
 */

router.delete('/:id', programController.deleteUser);

/**
 * get - "Get Files"
 */
router.get('/getFiles', programController.getFiles);

/**
 * get - "Get env num"
 */
router.get('/:envnum', programController.getProgrambyEnv);


export default router;
