import { Router } from 'express';
import UserRouter from '../services/users/UserRoute';
import AuthRouter from './Auth';
import ParamRouter from '../services/param/ParamRoute';
import ProgramRouter from '../services/program/ProgramRoute';
import TagRouter from '../services/program/TagRoute';
import ProgramTypeRouter from '../services/program/ProgramTypeRoute';
import LdapGroupRoute from '../services/program/LdapGroupRoute';
<<<<<<< Updated upstream
import ObjectBuilderRoute from '../services/objectBuilder/ObjectBuilderRoute';
=======
import PromoteRoute from '../services/program/PromoteRoute';
>>>>>>> Stashed changes


// Init router and path
const router = Router();

// Add sub-routes
router.use('/users',UserRouter);
router.use('/workflows',UserRouter);
router.use('/auth', AuthRouter);
router.use('/params', ParamRouter);
router.use('/programs',ProgramRouter);
router.use('/programtypes', ProgramTypeRouter);
router.use('/ldapgroups', LdapGroupRoute);
router.use('/tags',TagRouter);
<<<<<<< Updated upstream
router.use('/querybuilder',ObjectBuilderRoute);
=======
router.use('/promoteprograms',PromoteRoute);
>>>>>>> Stashed changes


// Export the base-router
export default router;
