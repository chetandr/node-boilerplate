import { Router } from 'express';
import QueryBuilderRouter from '../services/queryBuilder/qbRoute';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/queryBuilder', QueryBuilderRouter);


// Export the base-router
export default router;
