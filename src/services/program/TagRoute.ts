import { Router } from "express"
import { validateSchema } from "../../middleware/JsonValidator"
import { jsonArr }  from './TagSchema'
import * as tagController from './TagsController'
const router = Router();

/**
 *  Get All Users - "GET /api/tags"
 **/
router.get('/', tagController.getTags);

export default router;
