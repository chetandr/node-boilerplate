import { Router } from 'express';
import AuthRouter from './Auth';
import UserRouter from '../services/users/UserRoute';
import ProgramRouter from '../services/program/ProgramRoute';
import ParamRouter from '../services/param/ParamRoute';
import TagRouter from '../services/program/TagRoute';
import ProgramTypeRouter from '../services/program/ProgramTypeRoute';
import LdapGroupRoute from '../services/program/LdapGroupRoute';


// Init router and path
const router = Router();

// Add sub-routes
router.use('/auth', AuthRouter);
router.use('/users', UserRouter);
router.use('/programs', ProgramRouter);
router.use('/params', ParamRouter);
router.use('/programtypes', ProgramTypeRouter);
router.use('/ldapgroups', LdapGroupRoute);
router.use('/tags',TagRouter);
// Export the base-router
export default router;
