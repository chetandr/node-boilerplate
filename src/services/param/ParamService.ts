import { getConnection } from "typeorm";
//import { User } from "./UserEntity";

export const getAllParams = () => {
    // var userDB = getConnection().getRepository(User);
    // return userDB.find({ select: ["firstName", "lastName", "age", "username"], cache: true});
    return [{datatype:"COLUMN_PICKER"},{datatype:"DATASET"},{datatype:"DATE"},{datatype:"DIRECTORY"},{datatype:"DYNAMIC_LIST"},{datatype:"EMPLOYEE"},{datatype:"NUMERIC"},{datatype:"PID"},{datatype:"STATIC_LIST"},{datatype:"TEXT"},{datatype:"TEXTAREA"}]   
}

export const getParamMetadata = (metaType: string) => {
    // var userDB = getConnection().getRepository(User);
    // return userDB.find({ select: ["firstName", "lastName", "age", "username"], cache: true});
    return { "meta_by_name": true, "meta_type": metaType }   
}

export const getOutputParamByProgramKey = () => {
    // var userDB = getConnection().getRepository(User);
    // return userDB.find({ select: ["firstName", "lastName", "age", "username"], cache: true});
    return { "getOutputParamByProgramKey": true }
}

export const addParam = (reqBody: any) => {
    /* var userDB = getConnection().getRepository(User);
    
    var userData = new User();
    userData.firstName = reqBody.firstName;
    userData.lastName = reqBody.lastName;
    userData.age = reqBody.age;
    userData.username = reqBody.username;
    userData.password = reqBody.password;
    userData.hashPassword()
    return userDB.save(userData); */
}

export const updateParam = async (user: any, id: number) => {
    /* var userDB = getConnection().getRepository(User);

    const userExist = await userDB.findOne(id);
    if(!userExist) {
        throw new Error("Could not update user.");
    }

    return await userDB.update(
        id,
        user,
    ); */
}
export const deleteParam = async (id: number) => {
   /*  var userDB = getConnection().getRepository(User);
    const userExist = await userDB.findOne(id);
    if(!userExist) {
        throw new Error("Could not delete user.");
    }
    return await userDB.delete(id); */
}