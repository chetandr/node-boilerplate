import { Router } from 'express';
import objectRouter from '../services/object/ObjectRoute';


// Init router and path
const router = Router();

// Add sub-routes
router.use('/', objectRouter);

// Export the base-router
export default router;
