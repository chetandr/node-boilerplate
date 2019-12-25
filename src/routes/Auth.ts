import { Router, Request, Response } from 'express';
import { logger, paramMissingError, invalidPasswordError } from '@middleware';
import { BAD_REQUEST, OK, UNAUTHORIZED, CREATED, CONFLICT } from 'http-status-codes';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../LoadEnv'
import { validateSchema } from "../middleware/JsonValidator"
import { jsonArr } from '../services/users/UserSchema';
import * as orm from "../ormapis/requests";

const router = Router();

/**
 *  Login - "POST /api/auth/login"
 */

router.post('/login', validateSchema('/login', jsonArr), async (req: Request, res: Response) => {
    logger.info(req.body);
    let { username, password } = req.body;
    if (!(username && password)) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    let user: any
    try {
        user = await orm.post(`auth/login/`, req.body)
    }
    catch (err) {
        logger.error(err.message, err);
        return res.status(UNAUTHORIZED).json({
            error: err.message,
        });
    }

    //Sign JWT Token
    const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET_KEY, { expiresIn: "300m" })
    res.status(OK).json({
        message: "You are logged in successfully!",
        token: token,
    })
});

export default router;