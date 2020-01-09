import { getManager, getConnection } from "typeorm";

export const getAllOwnerName = () => {
    let tableEmail = getManager().query(`SELECT DISTINCT INITCAP(trim(B.employee_first_name) ||' '||trim(B.employee_last_name)) AS OWNER_NAME,B.GLOBAL_ID as GLOBAL_ID
    FROM ecubeadmin.E3_BUILDER_CUSTOM_OBJS A,ecubeadmin.E3_EMPLOYEE_DIM B
    WHERE B.EMPLOYEE_GLOBAL_ID(+) =lpad(A.UPDATED_BY,10,0)
    AND B.employee_first_name  is not null 
    AND B.employee_last_name is not null
    ORDER BY 
    UPPER(OWNER_NAME)`);
    return tableEmail
}

export const getAllSubjectArea = () => {
    let subjectArea = getManager().query(`select subject_area,xml_path from ecubeadmin.E3_SUBJECT_AREA 
    where TRIM(XML_PATH) IS NOT NULL AND TRIM(EDIT_URL) IS NOT NULL order by subject_area`);
    return subjectArea;
}

export const getCustomObjectList = () => {
    let customList = getManager().query(`select subject_area,xml_path from ecubeadmin.E3_SUBJECT_AREA 
    where TRIM(XML_PATH) IS NOT NULL AND TRIM(EDIT_URL) IS NOT NULL order by subject_area`);
    return customList;
}

export const getXml = () => {
    let xmlData = getManager().query(``);
    return xmlData
}

export const getXmlW = () => {
    let xmlwData = getManager().query(``);
    return xmlwData
}

export const getCustomObject = () => {
    let customObject = getManager().query(``);
    return customObject
}

export const addCustomObject = () => {
    let saveObject = getManager().query(``);
    return saveObject
}

