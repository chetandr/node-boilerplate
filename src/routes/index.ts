import { Router } from 'express';
import UserRouter from '../services/users/UserRoute';
import AuthRouter from './Auth';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users',UserRouter);
router.use('/workflows',UserRouter);
router.use('/auth', AuthRouter);

// Export the base-router
export default router;
