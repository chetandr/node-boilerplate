import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity()
@Unique(["program_type_key"])
export class ProgramType {

    @PrimaryGeneratedColumn()
    program_type_key!: string;

    @Column()
    program_type!: string;
    
}
