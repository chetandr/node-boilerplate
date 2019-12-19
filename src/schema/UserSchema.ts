
export const jsonArr = [
    {
        "pathname": "addUser",
        "schema": {
            "properties": {
                "username": { "type": "string" },
                "password": { "type": "string", "minLength": 6 },
                "firstName": { "type": "string" },
                "lastName": { "type": "string" },
                "age": { "type": "number" }
            }
        }
    },
    {
        "pathname": "updateUser",
        "schema": {
            "properties": {
                "firstName": { "type": "string" },
                "lastName": { "type": "string" },
                "age": { "type": "number" }
            }
        }
    },
    {
        "pathname": "/login",
        "schema": {
            "properties": {
                "username": { "type": "string" },
                "password": { "type": "string" }
            }
        }
    }
];