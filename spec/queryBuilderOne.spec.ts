import app from '../src/Server';
import supertest from 'supertest';
import { Response, SuperTest, Test } from 'supertest';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { pErr, paramMissingError } from '../src/middleware';
// import {createConnection} from "typeorm";

describe('Query Builder Routes', () => {

    const baseURL = '/querybuilder';
    const getHadoopMetaData = `${baseURL}/hadoopMetaData`;
    const getHadoopTableType = `${baseURL}/hadoopTableType`
    const getXML = `${baseURL}/xml`;
    const getFailDesc = `${baseURL}/failDesc`;
    const getColumns = `${baseURL}/columns`;
    const getDistinctValues = `${baseURL}/distinctValues`;
    let agent: SuperTest<Test>;

    beforeAll((done) => {
        // createConnection().then(async () => {
        agent = supertest.agent(app);
        done();
        // }).catch(error => console.log(error));
    });


    describe(`"Test Hadoop GET API calls"`, () => {

        it(`Get HadoopMetaData API call`, (done) => {

            agent.get(getHadoopMetaData)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
                    console.log("in objectBuilderOne : GET : HadoopMetaData ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });

        it(`Get HadoopTableType API call`, (done) => {

            agent.get(getHadoopTableType)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
    
                    console.log("in objectBuilderOne : GET : HadoopTableType ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

    describe("Test XML GET API call ", () => {
        
        it(`Get XML API call`, (done) => {

            agent.get(getXML)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
    
                    console.log("in objectBuilderOne : GET : XML ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

    describe("Test FailDesc GET API call ", () => {
        
        it(`Get FailDesc API call`, (done) => {

            agent.get(getFailDesc)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
    
                    console.log("in objectBuilderOne : GET : FailDesc ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

    describe("Test Columns GET API call ", () => {
        
        it(`Get Columns API call`, (done) => {

            agent.get(getColumns)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
    
                    console.log("in objectBuilderOne : GET : Columns ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

    describe("Test DistinctValues GET API call ", () => {
        
        it(`Get DistinctValues API call`, (done) => {

            agent.get(getDistinctValues)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
    
                    console.log("in objectBuilderOne : GET : DistinctValues ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

});
