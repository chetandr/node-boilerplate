import { Router } from "express"
import * as JobDetailsController from './JobDetailsController'
const router = Router();

router.get('/me',JobDetailsController.getMe);

router.get('/jobDetails/:pid',JobDetailsController.getJobDetails);

router.get('/status/:pid',JobDetailsController.getStatus);

router.get('/jobPrograms/:pid',JobDetailsController.getJobPrograms);

/*
* Query Parameters - 
*   program_key : numeric
*   run_latest : boolean
*/
router.get('/programInfo/:pid',JobDetailsController.getProgramInfo);

/*
* Query Parameters - 
*   program_orderId
*/
router.get('/programParameters/:pid',JobDetailsController.getProgramParameters);

/*
* Query Parameters - 
*   program_key : numeric
*   run_latest : boolean
*/
router.get('/programParameterList/:pid',JobDetailsController.getProgramParameterList);

/*
* Query Parameters - 
*   program_param_key : numeric
*/
router.get('/programParameterInfo/:pid',JobDetailsController.getProgramParameterInfo);

/*
* Query Params - 
*   sort: [{"property":"modifiedDate","direction":"DESC"}]
*/
router.get('/files/:pid',JobDetailsController.getFiles);

/*
* Query Params - 
*   sort: [{"property":"saveDate","direction":"DESC"}]
*/
router.get('/storedResults/:pid',JobDetailsController.getStoredResults);

/*
* Query Params - 
*   sort: [{"property":"email","direction":"ASC"}]
*/
router.get('/notifications/:pid',JobDetailsController.getNotifications);

router.get('/schedule/:pid',JobDetailsController.getSchedule);

router.get('/viewers/:pid',JobDetailsController.getViewers);

export default router;

