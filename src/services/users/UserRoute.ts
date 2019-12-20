import { Router } from "express"
import { validateSchema } from "../../middleware/JsonValidator"
import { jsonArr }  from './UserSchema'
import * as userController from './UserController'
const router = Router();

/**
 *  Get All Users - "GET /api/users/all"
 **/
router.get('/', userController.getUsers);

/**
 *  Add One - "POST /api/users/add"
 */

router.post('/', validateSchema('addUser', jsonArr), userController.addUser);

/**
 * Update - "PUT /api/users/update/:id"
 */

router.put('/:id', validateSchema('updateUser', jsonArr), userController.updateUser);

/**
 * Delete - "DELETE /api/users/delete/:id"
 */

router.delete('/:id', userController.deleteUser);

/**
 *  Export
 */
export default router;
