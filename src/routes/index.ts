import { Router } from 'express';
import UserRouter from '../services/users/UserRoute';
import ProgramRouter from '../services/program/ProgramRoute';
import AuthRouter from './Auth';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users',UserRouter);
router.use('/program',ProgramRouter);
router.use('/auth', AuthRouter);

// Export the base-router
export default router;
