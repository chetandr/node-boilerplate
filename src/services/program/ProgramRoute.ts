import { Router } from "express"
import * as ProgramController from './ProgramController'
const router = Router();


/**
 *  Get All programOwners - "GET /prg/programOwners"
 **/
router.get('/programOwners',ProgramController.getProgramOwners);

/**
 *  Get All programFileType - "GET /prg/programFileType"
 **/
router.get('/programFileType',ProgramController.getProgramFileType);

/**
 *  Get All programVersions - "GET /prg/programVersions"
 **/
router.get('/programVersions',ProgramController.getProgramVersions);

/**
 *  Get All programInputPrompts - "GET /prg/programInputPrompts"
 **/
router.get('/programInputPrompts',ProgramController.getProgramInputPrompts);

/**
 *  Get All programOutputPrompts - "GET /prg/programOutputPrompts"
 **/
router.get('/programOutputPrompts',ProgramController.getProgramOutputPrompts);

/**
 *  Get All programOutputParameters - "GET /prg/programOutputParameters"
 **/
router.get('/programOutputParameters',ProgramController.getProgramOutputParameters);

/**
 *  Get program types tree - "GET /prg/programTypesTree"
 **/
router.get('/programTypesTree',ProgramController.getProgramTypesTree);
export default router;