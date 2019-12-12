# Awesome Project Build with TypeORM

1. Steps to run this project:

2. npm install typeorm -g

3. typeorm init --name node-boilerplate --database postgres --express

4. cd node-boilerplate/

5. npm install

6. install postgres database 11.6

7. Setup database settings inside `ormconfig.json` file

8. npm start

changes:
--------
9. Add nodemon package to save development time.

npm install nodemon --save-dev

package.json ->

add "dev": "nodemon src/index.ts" to "scripts" ->

"scripts": {
   "start": "ts-node src/index.ts",
   "dev": "nodemon src/index.ts"
}

10. npm run dev