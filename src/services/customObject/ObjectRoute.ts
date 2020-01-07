import { Router } from "express"
import * as objectController from './ObjectController'
const router = Router();

/**
 *  Get All OwnerName - "GET /api/object/ownerName"
 **/
router.get('/ownerName', objectController.getOwnerName);

/**
 *  Get All Users - "GET /api/object/subjectArea"
 **/
router.get('/ownerName', objectController.getOwnerName);
router.get('/subjectArea', objectController.getSubjectArea);
router.get('/customObjectList', objectController.getCustomObjectList);
router.get('/xml', objectController.getXml);
router.get('/xmlW', objectController.getXmlW);
router.get('/customObject', objectController.getCustomObject);
router.get('/addObject', objectController.addCustomObject);

export default router;
