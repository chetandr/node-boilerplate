import { Router } from "express"
import * as wfbController from './wfbController'
const router = Router();

/**
 *  Get All Users - "GET /api/wfb/categories"
 **/
router.get('/categories', wfbController.getCategories);
router.get('/statuses', wfbController.getStatuses);
router.get('/subjectAreas', wfbController.getSubjectAreas);

export default router;