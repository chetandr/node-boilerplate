import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity()
@Unique(["username"])
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column()
    password!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    age!: number;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
}
