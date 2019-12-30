import { Router } from 'express';
import UserRouter from '../services/users/UserRoute';
import AuthRouter from './Auth';
import WorkflowBuilderRouter from '../services/workflowBuilder/wfbRoute';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users',UserRouter);
router.use('/auth', AuthRouter);
router.use('/wfb', WorkflowBuilderRouter);

// Export the base-router
export default router;
