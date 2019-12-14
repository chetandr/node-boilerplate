import app from '../src/Server';
import supertest from 'supertest';
import { Response, SuperTest, Test } from 'supertest';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { pErr, paramMissingError } from '../src/shared';
import {createConnection} from "typeorm";
import { User } from "../src/entity/User";

describe('Users Routes', () => {

    const usersPath = '/api/users';
    const getUsersPath = `${usersPath}/all`;
    const addUsersPath = `${usersPath}/add`;
    const updateUserPath = `${usersPath}/update/:id`;
    const deleteUserPath = `${usersPath}/delete/:id`;

    let agent: SuperTest<Test>;
    
        beforeAll((done) => {
            createConnection().then(async () => {
                agent = supertest.agent(app);
                done();
            }).catch(error => console.log(error));
        });
    

    describe(`"GET:${getUsersPath}"`, () => {

        //a JSON object with all the users and
        it(`should return a status code of "${OK}" if the
            request was successful.`, (done) => {

            /*  const users = [
                new User(),
                new User(),
                new User(),
            ]; */
            //spyOn(UserDao.prototype, 'getAll').and.returnValue(Promise.resolve(users));

            agent.get(getUsersPath)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
                    // Caste instance-objects to 'User' objects
                    /*  const retUsers = res.body.users.map((user: IUser) => {
                        return new User(user);
                    }); 
                    expect(retUsers).toEqual(users);
                    */
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

    describe(`"POST:${addUsersPath}"`, () => {

        const userData = {
            "user": {
                "firstName": "sagar",
                "lastName": "Kokate",
                "age": 45
            }
        };

        const callApi = (reqBody: object) => {
            return agent.post(addUsersPath).type('form').send(reqBody);
        };

        /* it(`should return a status code of "${CREATED}" if the request was successful.`, (done) => {
            //spyOn(UserDao.prototype, 'add').and.returnValue(Promise.resolve());

            callApi(userData)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(CREATED);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        }); */

        it(`should return a JSON object with an error message of "${paramMissingError}" and a status
            code of "${BAD_REQUEST}" if the user param was missing.`, (done) => {

            callApi({})
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(BAD_REQUEST);
                    expect(res.body.error).toBe(paramMissingError);
                    done();
                });
        });
        
    });

    describe(`"PUT:${updateUserPath}"`, () => {

        const userData = {
            "user": {
                "firstName": "Santosh",
                "lastName": "Kokate",
                "age": 45
            }
        };

        const callApi = (reqBody: object, id: number) => {
            return agent.put(updateUserPath.replace(':id', id.toString())).type('form').send(reqBody);
        };

        it(`should return a status code of "${OK}" if the request was successful.`, (done) => {

            //spyOn(UserDao.prototype, 'update').and.returnValue(Promise.resolve());

            callApi(userData, 15)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });

        it(`should return a JSON object with an error message of "${paramMissingError}" and a
            status code of "${BAD_REQUEST}" if the user param was missing.`, (done) => {

            callApi({}, 15)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(BAD_REQUEST);
                    expect(res.body.error).toBe(paramMissingError);
                    done();
                });
        });
    });

    describe(`"DELETE:${deleteUserPath}"`, () => {

        const callApi = (id: number) => {
            return agent.delete(deleteUserPath.replace(':id', id.toString()));
        };

        it(`should return a status code of "${OK}" if the request was successful.`, (done) => {

            //spyOn(UserDao.prototype, 'delete').and.returnValue(Promise.resolve());

            callApi(15)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });

        it(`should return a JSON object with an error message and a status code of "${BAD_REQUEST}"
            if the request was unsuccessful.`, (done) => {

            const deleteErrMsg = 'Could not delete user.';
            //spyOn(UserDao.prototype, 'delete').and.throwError(deleteErrMsg);

            callApi(2)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(BAD_REQUEST);
                    expect(res.body.error).toBe(deleteErrMsg);
                    done();
                });
        });
    });
});
