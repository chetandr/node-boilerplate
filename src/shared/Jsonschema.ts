
export const jsonschemaArr = [
    {
        "pathname": "/api/login",
        "schema": {
            "properties": {
              "username": { "type": "string" },
              "password": { "type": "number", "maximum": 3 }
            }
          }
    },
    {
        "pathname": "/request/:id",
        "schema": {
            "properties": {
              "username": { "type": "string" },
              "password": { "type": "number", "maximum": 3 }
            }
          }
    }

]