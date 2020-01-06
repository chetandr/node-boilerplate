/**
 * Setup the Reqeust APIs.
 *
 */

import * as orm from 'request-promise';
import { BASEURL } from '../LoadEnv';

/**
 * @endpoint : ORM endpoint
 * @body : request body
 * @method: POST
 */

export const post = async (endpoint: string, body: object) => {
    let options = {
        uri: `${BASEURL}${endpoint}`,
        body: body,
        json: true // Automatically stringifies the body to JSON
    };

    let res = await orm.post(options).catch(function (err: any) {
        throwOrmServiceError(err);
    });

    return res;

}

/**
 * @endpoint : ORM endpoint
 * @body : request body
 * @method: PUT
 */

export const put = async (endpoint: string, body: object) => {
    let options = {
        uri: `${BASEURL}${endpoint}`,
        body: body,
        json: true // Automatically stringifies the body to JSON
    };

    let res = await orm.put(options).catch(function (err: any) {
        throwOrmServiceError(err);
    });

    return res;

}

/**
 * @endpoint : ORM endpoint
 * @body : request body
 * @method: GET
 */

export const get = async (endpoint: string) => {
    let options = {
        uri: `${BASEURL}${endpoint}`,
        json: true // Automatically stringifies the body to JSON
    };
    console.log(options)
    let res = await orm.get(options).catch(function (err: any) {
        throwOrmServiceError(err);
    });

    return res;

}

/**
 * @endpoint : ORM endpoint
 * @body : request body
 * @method: delete
 */

export const remove = async (endpoint: string) => {
    let options = {
        uri: `${BASEURL}${endpoint}`,
        json: true // Automatically stringifies the body to JSON
    };

    let res = await orm.delete(options).catch(function (err: any) {
        throwOrmServiceError(err);
    });

    return res;
}

const throwOrmServiceError = (err: any) => {
    let newErr: any = new Error();
    newErr.statusCode = err.statusCode; // status received from ORM service
    newErr.message = err.error.error // error message received from ORM service
    throw newErr // throws error, which is catchable in node service controller
}