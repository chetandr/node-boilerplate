import { getConnection } from "typeorm";
import { User } from "./UserEntity";

export const getAllUsers = () => {
    var userDB = getConnection().getRepository(User);
    return userDB.find({ select: ["firstName", "lastName", "age", "username"], cache: true});
}

export const addUser = (reqBody: any) => {
    var userDB = getConnection().getRepository(User);
    
    var userData = new User();
    userData.firstName = reqBody.firstName;
    userData.lastName = reqBody.lastName;
    userData.age = reqBody.age;
    userData.username = reqBody.username;
    userData.password = reqBody.password;
    userData.hashPassword()
    return userDB.save(userData);
}

export const updateUser = async (user: any, id: number) => {
    var userDB = getConnection().getRepository(User);

    const userExist = await userDB.findOne(id);
    if(!userExist) {
        throw new Error("Could not update user.");
    }

    return await userDB.update(
        id,
        user,
    );
}
export const deleteUser = async (id: number) => {
    var userDB = getConnection().getRepository(User);
    const userExist = await userDB.findOne(id);
    if(!userExist) {
        throw new Error("Could not delete user.");
    }
    return await userDB.delete(id);
}