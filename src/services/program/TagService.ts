import { getConnection } from "typeorm";
import { Program_Tags } from "./TagEntity";

export const getAllTags = () => {
    var tagDB = getConnection().getRepository(Program_Tags);
    return tagDB.find();
}