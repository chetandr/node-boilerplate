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

export const getProgrambyEnv = (envnum:any) => {
    var programDB = getConnection().getRepository(ProgramType);
    return programDB.find();
}