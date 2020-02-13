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

/**
 *  Get details of default columns - "GET /wfb/detailDefaultColumns"
 **/
router.get('/detailDefaultColumns',WorflowBuilderController.getDetailDefaultColumns);

/**
 *  Get specific program - "GET /wfb/specificProgram"
 **/
router.get('/specificProgram',WorflowBuilderController.getSpecificProgram);

/**
 *  Get default columns - "GET /wfb/defaultColumns"
 **/
router.get('/defaultColumns',WorflowBuilderController.getDefaultColumns);

/**
 *  Get program SQL - "GET /wfb/programSQL"
 **/
router.get('/programSQL',WorflowBuilderController.getProgramSQL);

/**
 *  Save publish flow - "GET /wfb/publishFlow"
 **/
router.post('/publishFlow',WorflowBuilderController.publishFlow);

/**
 *  Save request - "GET /wfb/submitRequest"
 **/
router.post('/submitRequest',WorflowBuilderController.submitRequest);

/**
 *  GET settings - "GET /wfb/settings"
 **/
router.get('/settings',WorflowBuilderController.getSettings);

/**
 *  GET user - "GET /wfb/user"
 **/
router.get('/user',WorflowBuilderController.getUser);

/**
 *  Get groups - "GET /wfb/groups"
 **/
router.get('/groups',WorflowBuilderController.getGroups);

/**
 *  Get request - "GET /wfb/groupPrograms"
 **/
router.get('/groupPrograms',WorflowBuilderController.getGroupPrograms);

/**
 *  GET metadata - "GET /wfb/metadata"
 **/
router.get('/metadata',WorflowBuilderController.getMetadata);


export default router;