import { Router } from "express"
import * as WorflowBuilderController from './wfbController'
const router = Router();

/**
 *  Get All categories - "GET /api/wfb/categories"
 **/
router.get('/categories', WorflowBuilderController.getCategories);

/**
 *  Get All statuses - "GET /api/wfb/statuses"
 **/
router.get('/statuses', WorflowBuilderController.getStatuses);

/**
 *  Get All subjectAreas - "GET /api/wfb/subjectAreas/:mineOnly?"
 **/
router.get('/subjectAreas/:mineOnly?', WorflowBuilderController.getSubjectAreas);

/**
 *  Get All yieldSubjectAreas - "GET /api/wfb/yieldSubjectAreas"
 **/
router.get('/yieldSubjectAreas', WorflowBuilderController.getSubjectAreas);

/**
 *  Get All owners - "GET /api/wfb/owners"
 **/
router.get('/owners', WorflowBuilderController.getOwners);

/**
 *  Get All programOwners - "GET /api/wfb/programOwners"
 **/
router.get('/programOwners',WorflowBuilderController.getProgramOwners);

/**
 *  Get All programFileType - "GET /api/wfb/programFileType/:subjectArea"
 **/
router.get('/programFileType/:subjectArea',WorflowBuilderController.getProgramFileType);

/**
 *  Get subjectArea - "GET /api/wfb/subjectArea/:subjectArea"
 **/
router.get('/subjectArea/:subjectArea',WorflowBuilderController.getSubjectArea);

/**
 *  Get All subjectAreaPermissions - "GET /api/wfb/subjectAreaPermissions"
 **/
router.get('/subjectAreaPermissions',WorflowBuilderController.getSubjectAreaPermissions);

/**
 *  Get All programs - "GET /api/wfb/programs"
 **/
router.get('/programs',WorflowBuilderController.getPrograms);

/**
 *  Get All programVersions - "GET /api/wfb/programVersions/:programKey"
 **/
router.get('/programVersions/:programKey',WorflowBuilderController.getProgramVersions);

/**
 *  Get All programInputPrompts - "GET /api/wfb/programInputPrompts/:programKey"
 **/
router.get('/programInputPrompts/:programKey',WorflowBuilderController.getProgramInputPrompts);

/**
 *  Get All programOutputPrompts - "GET /api/wfb/programOutputPrompts/:programKey"
 **/
router.get('/programOutputPrompts/:programKey',WorflowBuilderController.getProgramOutputPrompts);

/**
 *  Get All programOutputParameters - "GET /api/wfb/programOutputParameters/:programKey"
 **/
router.get('/programOutputParameters/:programKey',WorflowBuilderController.getProgramOutputParameters);

export default router;