import { Router } from 'express';
import queryRouter from '../services/queryBuilder/QueryRoute';


// Init router and path
const router = Router();

// Add sub-routes
router.use('/', queryRouter);

// Export the base-router
export default router;
