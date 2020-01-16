import app from '../src/Server';
import supertest from 'supertest';
import { Response, SuperTest, Test } from 'supertest';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { pErr, paramMissingError } from '../src/middleware';
// import {createConnection} from "typeorm";

describe('Query Builder Routes', () => {

    const baseURL = '/querybuilder';
    const getObjectBuilder = `${baseURL}/`;
    const getHadoopColumn = `${baseURL}/hadoopColumn`;
    const getTableColumnInfo = `${baseURL}/tableColumnInfo`;
    const getTableObjectInfo = `${baseURL}/tableObjectInfo`;
    const getHadoopTablesColumns = `${baseURL}/hadoopTablesColumns`;
    const getAppendedColumns = `${baseURL}/appendedColumns`;
    const getProgramOrderId = `${baseURL}/programOrderId`;
    const getPrimaryKeys = `${baseURL}/primaryKeys`;
    let agent: SuperTest<Test>;

    beforeAll((done) => {
        // createConnection().then(async () => {
        agent = supertest.agent(app);
        done();
        // }).catch(error => console.log(error));
    });


    describe(`"Test Query Builder GET API call"`, () => {

        it(`Get Query Builder API call`, (done) => {

            agent.get(getObjectBuilder)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
                    console.log("in objectBuilderTwo : GET : Query Builder ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });

        it(`Save Query Builder API call`, (done) => {

            agent.post(getObjectBuilder)
                .send({name: 'Seagate_OSA'})
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
                    console.log("in objectBuilderTwo : POST : Query Builder ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

    describe("Test Hadoop column GET API call ", () => {
        
        it(`Get hadoopColumn API call`, (done) => {

            agent.get(getHadoopColumn)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
    
                    console.log("in objectBuilderTwo : GET : getHadoopColumn ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

    describe("Test Hadoop column GET API call ", () => {
        
        it(`Get hadoopColumn API call`, (done) => {

            agent.get(getTableColumnInfo)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
    
                    console.log("in objectBuilderTwo : GET : getTableColumnInfo ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

    describe("Test table object information GET API call ", () => {
        
        it(`Get TableObjectInfo API call`, (done) => {

            agent.get(getTableObjectInfo)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
    
                    console.log("in objectBuilderTwo : GET : getTableObjectInfo ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

    describe("Test hadoop tables columns GET API call ", () => {
        
        it(`Get HadoopTablesColumns API call`, (done) => {

            agent.get(getHadoopTablesColumns)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
    
                    console.log("in objectBuilderTwo : GET : getHadoopTablesColumns ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

    describe("Test appended columns GET API call ", () => {
        
        it(`Get AppendedColumns API call`, (done) => {

            agent.get(getAppendedColumns)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
    
                    console.log("in objectBuilderTwo : GET : getAppendedColumns ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

    describe("Test program order ID GET API call ", () => {
        
        it(`Get ProgramOrderId API call`, (done) => {

            agent.get(getProgramOrderId)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
    
                    console.log("in objectBuilderTwo : GET : getProgramOrderId ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

    describe("Test Primary keys GET API call ", () => {
        
        it(`Get PrimaryKeys API call`, (done) => {

            agent.get(getPrimaryKeys)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
    
                    console.log("in objectBuilderTwo : GET : getPrimaryKeys ")
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

});
