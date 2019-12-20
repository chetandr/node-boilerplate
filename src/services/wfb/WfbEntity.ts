import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity()
@Unique(["id"])
export class Wfb {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column()
    tyepe!: string;

    @Column()
    created_at!: string;

    @Column()
    updated_at!: number;
    
}
