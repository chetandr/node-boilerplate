
export const qbSchema = [
    {
        "pathname": "tableObjectInfo",
        "schema": {
            "properties": {
                "subjectArea": { "type": "string", "minLength": 1},
                "tableOwner": { "type": "string", "minLength": 1},
                "tableName": { "type": "string", "minLength": 1},
                "tableAlias": { "type": "string", "minLength": 1},
                "datasource": { "type": "string"}
            },
            required: ["subjectArea", "tableOwner", "tableName", "tableAlias", "datasource"]
        }
    }
];
