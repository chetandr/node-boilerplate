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
    var programDB = getConnection().getRepository(Program);
    return programDB.find();
}