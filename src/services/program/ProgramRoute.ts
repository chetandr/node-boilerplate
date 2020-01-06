import { Router } from "express"
import { validateSchema } from "../../middleware/JsonValidator"
import { jsonArr }  from './ProgramSchema'
import * as prgController from './ProgramController'
const router = Router();

/**
 *  Get All Users - "GET /api/programs"
 **/
router.get('/', prgController.getProgram);

/**
 *  Add One - "POST /api/program"
 */

router.post('/', validateSchema('addProgram', jsonArr), prgController.addProgram);

/**
 * Update - "PUT /api/program/:id"
 */

router.put('/:id', validateSchema('updateProgram', jsonArr), prgController.updateProgram);

/**
 * Delete - "DELETE /api/program/:id"
 */

router.delete('/:id', prgController.deleteProgram);

/**
 * get - "Get Program Tags"
 */
router.get('/:id', prgController.getProgramtags);

/**
 * get - "Get Files"
 */
router.get('/getFiles', prgController.getFiles);

/**
 *  Export
 */
export default router;