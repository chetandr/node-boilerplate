import { Router, Request, Response } from 'express';
import { logger, paramMissingError, invalidPasswordError } from '@shared';
import { BAD_REQUEST, OK, UNAUTHORIZED, CREATED, CONFLICT } from 'http-status-codes';
import { User } from '../entity/User';
import { getRepository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../LoadEnv'

const router = Router();

/******************************************************************************
 *                      Login - "POST /api/auth/login"
 ******************************************************************************/

router.post('/login', async (req: Request, res: Response) => {

    let { username, password } = req.body;
    if (!(username && password)) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }

    const userRepository = getRepository(User);
    let user: User;

    try {
        user = await userRepository.findOneOrFail({ where: { username } })
        if (!user.checkIfPasswordIsValid(password)) {
            throw new Error(invalidPasswordError)
        }
    }
    catch (err) {
        logger.error(err.message, err);
        return res.status(UNAUTHORIZED).json({
            error: err.message,
        });
    }

    //Sign JWT Token

    const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET_KEY, { expiresIn: "30m" })
    res.status(OK).json({
        token: token,
        userId: user.id
    })

})

/******************************************************************************
 *                       Register New User - "POST /api/users/newuser"
 ******************************************************************************/

router.post('/newuser',async (req: Request, res: Response) => {
    try {
        
        const { user } = req.body;
        console.log("----req body user-->>>>", user);
        if (!user) {
            throw new Error(paramMissingError)
        }

        var userData = new User();
        userData.firstName = user.firstName;
        userData.lastName = user.lastName;
        userData.age = user.age;
        userData.username = user.username;
        userData.password = user.password;
        userData.hashPassword()

    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }

    const userRepository = getRepository(User);

    try {
        await userRepository.save(userData);
    }
    catch(err){
        logger.error(err.message, err);
        return res.status(CONFLICT).json({
            error: err.message,
        });
    }
    
    return res.status(CREATED).end();    
});

export default router;