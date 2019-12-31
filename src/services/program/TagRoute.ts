import { Router } from "express"
import * as tagController from './TagController'
const router = Router();

/**
 *  Get All Users - "GET /api/users/all"
 **/
router.get('/', tagController.getTags);

/**
 *  Add One - "POST /api/users/add"
 */

export default router;
