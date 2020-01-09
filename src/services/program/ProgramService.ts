import { getConnection } from "typeorm";
import { Program } from "./ProgramEntity";
import { ProgramType } from "./ProgramTypeEntity";

export const getAllPrograms = () => {
    var programDB = getConnection().getRepository(Program);
    return programDB.find();
}

export const addProgram = (reqBody: any) => {
    var programDB = getConnection().getRepository(Program);
    let programData:any
    return programDB.save(programData);
}

export const updateProgram = async (program: any, id: number) => {
    var programDB = getConnection().getRepository(Program);
    return await programDB.update(
        id,
        program,
    );
}
export const deleteProgram = async (id: number) => {
    var programDB = getConnection().getRepository(Program);
    return await programDB.delete(id);
}

export const getProgramTypeTree = () => {
    var programDB = getConnection().getRepository(ProgramType);
    return programDB.find();
}

export const getFiles = () => {
    //var programDB = getConnection().getRepository(Program);
    //return programDB.find();
    return [{"date_modified":"2016-08-15 14:33:28.0","directory":"/seamnt/sasdata-dev/RStudio/Workspaces/yaoj","id":"/yaoj/.rstudio","leaf":false,"name":".rstudio","size":"8192","type":"Dir"},{"date_modified":"2015-09-17 19:56:44.0","directory":"/seamnt/sasdata-dev/RStudio/Workspaces/yaoj","id":"/yaoj/Importing Data from eCube.R","leaf":true,"name":"Importing Data from eCube.R","size":"564","type":"File"},{"date_modified":"2015-09-16 20:50:02.0","directory":"/seamnt/sasdata-dev/RStudio/Workspaces/yaoj","id":"/yaoj/version_6 test.csv","leaf":true,"name":"version_6 test.csv","size":"556073","type":"File"}];
}

export const getProgrambyEnv = (envnum:number) => {
    //var programDB = getConnection().getRepository(Program);
    //return programDB.find();
    return {
        "total": "699",
        "message": "Success!",
        "data": [{
        "active_environment_flag": "3",
        "admin_override_flag": "N",
        "deployment_status_flag": "",
        "document_link": "",
        "last_update_date": "2020-01-07 02:48:15.0",
        "last_update_gid": "729016",
        "ldap_groupname": "default",
        "owner_name": "Chetan Rane",
        "program_active_flag": "Y",
        "program_create_date": "2020-01-03 03:18:48.0",
        "program_desc": "$$$$$$#####test Program",
        "program_key": "14618",
        "program_name": "$$$$$$#####test Program",
        "program_owner_gid": "729016",
        "program_type": "USER DENODO",
        "program_type_key": "1026",
        "program_version": "4",
        "rnum": "1",
        "total": "699",
        "verified_flag": "Y"
        }, {
        "active_environment_flag": "2",
        "admin_override_flag": "N",
        "deployment_status_flag": "312",
        "document_link": "",
        "last_update_date": "2020-01-03 03:48:14.0",
        "last_update_gid": "729016",
        "ldap_groupname": "default",
        "owner_name": "Pohching Haw",
        "program_active_flag": "Y",
        "program_create_date": "2016-05-17 04:47:54.0",
        "program_desc": "*** This is a TEST program ***\r\ninput of testparam4",
        "program_key": "8026",
        "program_name": "*** TEST *** 3rd Program",
        "program_owner_gid": "512333",
        "program_type": "PY_2.7",
        "program_type_key": "1015",
        "program_version": "4",
        "rnum": "2",
        "total": "699",
        "verified_flag": "Y"
        }]
        };        
}