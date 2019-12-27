# SeagateOSA - Request List

1. npm install

2. add "env" folder in root dir with following files

    $ touch development.env

    # Environment
    NODE_ENV=development

    # Server
    PORT=3000
    HOST=localhost
    JWT_SECRET_KEY=abcd

    ORM_BASEURL=http://localhost:4000/api/

    --------------------------------------------
    $ touch production.env

    # Environment
    NODE_ENV=production

    # Server
    PORT=8081
    HOST=<HOST_NAME>

    USE_MOCK_DB=false

    --------------------------------------------
    $ touch test.env

    # Environment
    NODE_ENV=testing

    # Server
    PORT=4000
    HOST=localhost


