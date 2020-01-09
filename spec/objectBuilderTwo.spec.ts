import app from '../src/Server';
import supertest from 'supertest';
import { Response, SuperTest, Test } from 'supertest';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { pErr, paramMissingError } from '../src/middleware';
// import {createConnection} from "typeorm";

describe('Query Builder Routes', () => {

    const baseURL = '/querybuilder';
    const getObjectBuilder = `${baseURL}/`;
    let agent: SuperTest<Test>;

    beforeAll((done) => {
        // createConnection().then(async () => {
        agent = supertest.agent(app);
        done();
        // }).catch(error => console.log(error));
    });


    describe(`"Test Query Builder GET API call"`, () => {

        it(`Get Query Builder API call`, (done) => {

            agent.get(baseURL)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
                    console.log("in objectBuilderTwo : GET : Query Builder ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });

    });


});
