import { Router } from 'express';
import QueryBuilderRouter from '../services/queryBuilder/qbRoute';

import WorkflowBuilderRouter from '../services/workflowBuilder/wfbRoute';
import ProgramRouter from '../services/program/ProgramRoute';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/queryBuilder', QueryBuilderRouter);

router.use('/workflowBuilder', WorkflowBuilderRouter);
router.use('/prg', ProgramRouter);

router.get('/no_auth/checkThis', function(req, res, next){
    let myObj:any = {};
    myObj.success = true;
    myObj.message = "";
    myObj.data = [];
 
    var dateString = "Node.js server is up and running as of ";
    var today = new Date();
    dateString += today.toDateString() + " ";
    dateString += today.toLocaleTimeString() + ".";
    myObj.message = dateString;
 
    res.json(myObj);
});

// Export the base-router
export default router;
