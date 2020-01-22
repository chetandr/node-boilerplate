import { Router } from 'express';
import WorkflowBuilderRouter from '../services/workflowBuilder/WfbRoute';
import ProgramRouter from '../services/program/ProgramRoute';
import JobDetailsRouter from '../services/jobDetails/JobDetailsRoute';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/wfb', WorkflowBuilderRouter);
router.use('/prg', ProgramRouter);
router.use('/jd', JobDetailsRouter);


// Export the base-router
export default router;
