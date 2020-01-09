# SeagateOSA - Express ORM 

1. npm install

2. rename ormconfig.txt to ormconfig.json and add your local db creds.

3. add "env" folder in root dir with following files

    $ touch development.env

    # Environment
    NODE_ENV=development

    # Server
    PORT=3000
    HOST=localhost

    USE_MOCK_DB=true

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


# TypeORM migrations

Add command to package.json "script"
1. "typeorm:cli": "ts-node ./node_modules/typeorm/cli -f ormconfig.json"

Create Migration
1. npm run typeorm:cli -- migration:create -n NAME_OF_MIGRATION

Running Migration
1. npm run typeorm:cli -- migration:run

Revert Migration
1. npm run typeorm:cli -- migration:revert


src
  |
  services
  |    |
  |    |__users
  |    |    UserRoute.ts
  |    |    UserController.ts
  |    |    UserModel.ts
  |    |    UserEntity.ts
  |    |    UserSchema.ts
  |    |__request
  |          RequestRoute.ts
  |          RequestController.ts
  |          RequestModel.ts
  |          RequestEntity.ts
  |          RequestSchema.ts
  middleware
     auth.ts
     validator.ts
     logging.ts
  util
     commonfunctions.ts
     httperror.ts
  server.ts
  index.ts
  env
     prod
     staging
     dev
  spec
     user.spec.ts
     request.spec.ts