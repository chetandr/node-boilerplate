import { Router } from 'express';
import WorkflowBuilderRouter from '../services/workflowBuilder/WfbRoute';
import ProgramRouter from '../services/program/ProgramRoute';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/wfb', WorkflowBuilderRouter);
router.use('/prg', ProgramRouter);


// Export the base-router
export default router;
