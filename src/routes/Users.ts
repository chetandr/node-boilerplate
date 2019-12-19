import { verifyJwt } from '@shared'
import { Router } from "express"
import { validateSchema } from "../shared/JsonValidator"
import { jsonArr }  from '../schema/UserSchema'
import * as userController from '../controller/UserController'

const router = Router();

/**
 *  Get All Users - "GET /api/users/all"
 **/
router.get('/', verifyJwt, userController.getUsers);

/**
 *  Add One - "POST /api/users/add"
 */

router.post('/', validateSchema('addUser', jsonArr), userController.addUser);

/**
 * Update - "PUT /api/users/update/:id"
 */

router.put('/:id', verifyJwt, validateSchema('updateUser', jsonArr), userController.updateUser);

/**
 * Delete - "DELETE /api/users/delete/:id"
 */

router.delete('/:id', verifyJwt, userController.deleteUser);

/**
 *  Export
 */
export default router;
