import { Router } from 'express';
import UserRouter from '../services/users/UserRoute';
import AuthRouter from './Auth';
import ParamRouter from '../services/param/ParamRoute';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users',UserRouter);
router.use('/workflows',UserRouter);
router.use('/auth', AuthRouter);
router.use('/params', ParamRouter);

// Export the base-router
export default router;
