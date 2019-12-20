import { getConnection } from "typeorm";
import { Wfb } from "./WfbEntity";

export const getAllWfbs = () => {
    var wfbDB = getConnection().getRepository(Wfb);
    return wfbDB.find();
}

export const addWfb = (reqBody: any) => {
    var wfbDB = getConnection().getRepository(Wfb);
    var WfbData = new Wfb();
    return wfbDB.save(WfbData);
}

export const updateWfb = async (Wfb: any, id: number) => {
    var wfbDB = getConnection().getRepository(Wfb);

    const WfbExist = await wfbDB.findOne(id);
    if(!WfbExist) {
        throw new Error("Could not update Wfb.");
    }

    return await wfbDB.update(
        id,
        Wfb,
    );
}
export const deleteWfb = async (id: number) => {
    var wfbDB = getConnection().getRepository(Wfb);
    const WfbExist = await wfbDB.findOne(id);
    if(!WfbExist) {
        throw new Error("Could not delete Wfb.");
    }
    return await wfbDB.delete(id);
}