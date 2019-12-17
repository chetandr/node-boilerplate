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
