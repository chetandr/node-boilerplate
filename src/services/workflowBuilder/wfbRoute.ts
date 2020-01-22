import { Router } from "express"
import * as WorflowBuilderController from './WfbController'
const router = Router();

/**
 *  Get All categories - "GET /wfb/categories"
 **/
router.get('/categories', WorflowBuilderController.getCategories);

/**
 *  Get All statuses - "GET /wfb/statuses"
 **/
router.get('/statuses', WorflowBuilderController.getStatuses);

/**
 *  Get All subjectAreas - "GET /wfb/subjectAreas/:mineOnly?"
 **/
router.get('/subjectAreas', WorflowBuilderController.getSubjectAreas);

/**
 *  Get All yieldSubjectAreas - "GET /wfb/yieldSubjectAreas"
 **/
router.get('/yieldSubjectAreas', WorflowBuilderController.getSubjectAreas);

/**
 *  Get All owners - "GET /wfb/owners"
 **/
router.get('/owners', WorflowBuilderController.getOwners);

/**
 *  Get subjectArea - "GET /wfb/subjectArea/:subjectArea"
 **/
router.get('/subjectArea/:mineOnly/:subjectArea',WorflowBuilderController.getSubjectArea);

/**
 *  Get All subjectAreaPermissions - "GET /wfb/subjectAreaPermissions/:subjectArea"
 **/
router.get('/subjectAreaPermissions/:subjectArea',WorflowBuilderController.getSubjectAreaPermissions);

/**
 *  Get All Jobs - "GET /wfb/jobs"
 **/
router.get('/jobs',WorflowBuilderController.getJobs);



export default router;