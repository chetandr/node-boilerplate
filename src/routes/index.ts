import { Router } from 'express';
import WorkflowBuilderRouter from '../services/workflowBuilder/wfbRoute';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/wfb', WorkflowBuilderRouter);

// Export the base-router
export default router;
