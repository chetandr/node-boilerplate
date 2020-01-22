import { Router } from "express"
import * as ProgramController from './ProgramController'
const router = Router();


/**
 *  Get All programOwners - "GET /wfb/programOwners"
 **/
router.get('/programOwners',ProgramController.getProgramOwners);

/**
 *  Get All programFileType - "GET /wfb/programFileType/:subjectArea"
 **/
router.get('/programFileType/:subjectArea',ProgramController.getProgramFileType);

/**
 *  Get All programVersions - "GET /wfb/programVersions/:programKey"
 **/
router.get('/programVersions/:programKey',ProgramController.getProgramVersions);

/**
 *  Get All programInputPrompts - "GET /wfb/programInputPrompts/:programKey"
 **/
router.get('/programInputPrompts/:programKey',ProgramController.getProgramInputPrompts);

/**
 *  Get All programOutputPrompts - "GET /wfb/programOutputPrompts/:programKey"
 **/
router.get('/programOutputPrompts/:programKey',ProgramController.getProgramOutputPrompts);

/**
 *  Get All programOutputParameters - "GET /wfb/programOutputParameters/:programKey"
 **/
router.get('/programOutputParameters/:programKey',ProgramController.getProgramOutputParameters);

export default router;