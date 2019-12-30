import { Router } from 'express';
import AuthRouter from './Auth';
import UserRouter from '../services/users/UserRoute';
import ProgramRouter from '../services/program/ProgramRoute';
import ParamRouter from '../services/param/ParamRoute';


// Init router and path
const router = Router();

// Add sub-routes
router.use('/auth', AuthRouter);
router.use('/users', UserRouter);
router.use('/program', ProgramRouter);
router.use('/params', ParamRouter);
// Export the base-router
export default router;
