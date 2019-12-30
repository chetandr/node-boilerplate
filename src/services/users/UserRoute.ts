import { Router } from "express"
import { validateSchema } from "../../middleware/JsonValidator"
import { jsonArr }  from './UserSchema'
import * as userController from './UserController'
const router = Router();

/**
 *  Get All Users - "GET /api/users"
 **/
router.get('/', userController.getUsers);

/**
 *  Add One - "POST /api/users"
 */

router.post('/', validateSchema('addUser', jsonArr), userController.addUser);

/**
 * Update - "PUT /api/users/:id"
 */

router.put('/:id', validateSchema('updateUser', jsonArr), userController.updateUser);

/**
 * Delete - "DELETE /api/users/:id"
 */

router.delete('/:id', userController.deleteUser);

/**
 *  Export
 */
export default router;
