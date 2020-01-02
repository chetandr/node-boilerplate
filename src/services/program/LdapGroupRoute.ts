import { Router } from "express"
import * as ldapController from './LdapGroupController'
const router = Router();

/**
 *  Get All Ldap Groups - "GET /api/ldapgroups/"
**/

router.get('/', ldapController.getLdapGroups);

export default router;