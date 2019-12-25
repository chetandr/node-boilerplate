import { Router } from "express"
import * as userController from './UserController'
const router = Router();

/**
 *  Get All Users - "GET /api/users/all"
 **/
router.get('/', userController.getUsers);

/**
 *  Add One - "POST /api/users/add"
 */

router.post('/', userController.addUser);

/**
 * Update - "PUT /api/users/update/:id"
 */

router.put('/:id', userController.updateUser);

/**
 * Delete - "DELETE /api/users/delete/:id"
 */

router.delete('/:id', userController.deleteUser);

/**
 *  Export
 */
export default router;
