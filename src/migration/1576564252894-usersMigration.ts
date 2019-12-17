import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey, Timestamp } from "typeorm";
import { User } from '../entity/User';

export class usersMigration1576564252894 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn("user", new TableColumn({
            name: "username", 
            type: "Character varying",
            default: "12345"
        }));
        await queryRunner.addColumn("user", new TableColumn({
            name: "password", 
            type: "Character varying",
            isNullable: true,
            default: "12345"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
