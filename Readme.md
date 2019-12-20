# Boilerplate for node with Typescript.

1. npm install

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