import { Router } from "express"
import * as ProgramController from './ProgramController'
const router = Router();


/**
 *  Get All programOwners - "GET /prg/programOwners"
 **/
router.get('/programOwners',ProgramController.getProgramOwners);

/**
 *  Get All programFileType - "GET /prg/programFileType/:subjectArea"
 **/
router.get('/programFileType/:subjectArea',ProgramController.getProgramFileType);

/**
 *  Get All programVersions - "GET /prg/programVersions/:programKey"
 **/
router.get('/programVersions/:programKey',ProgramController.getProgramVersions);

/**
 *  Get All programInputPrompts - "GET /prg/programInputPrompts/:programKey"
 **/
router.get('/programInputPrompts/:programKey',ProgramController.getProgramInputPrompts);

/**
 *  Get All programOutputPrompts - "GET /prg/programOutputPrompts/:programKey"
 **/
router.get('/programOutputPrompts/:programKey',ProgramController.getProgramOutputPrompts);

/**
 *  Get All programOutputParameters - "GET /prg/programOutputParameters/:programKey"
 **/
router.get('/programOutputParameters/:programKey',ProgramController.getProgramOutputParameters);

/**
 *  Get program types tree - "GET /prg/programTypesTree"
 **/
router.get('/programTypesTree',ProgramController.getProgramTypesTree);
export default router;