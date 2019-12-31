import { NextFunction, Request, Response } from "express";
import { logger } from '@middleware';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError, verifyJwt } from '@middleware';

export const getLdapGroups = async (req: Request, res: Response) => {
    try {
        // const tags = await userService.getAllTags();
        let groups = [{
            group_desc: "ALL",
            group_name: "ALL"
        }, {
            group_desc: "Allows QPM control Chart Admin to upload Manual Control Chart Limits",
            group_name: "eCube-QPM-Control_Chart_Admin"
        }, {
            group_desc: "Allows users to access freehand SQL query tool",
            group_name: "eCube-osa-direct-sql"
        }, {
            group_desc: "Testing data",
            group_name: "eCube-osa-sales-test"
        }, {
            group_desc: "Testing data",
            group_name: "eCube-osa-shinny-test"
        }] // Dummy response tobe removed

        return res.status(OK).json({
            message: "success",
            data: groups,
        });

    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
};