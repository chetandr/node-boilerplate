import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity()
@Unique(["program_tag_key"])
export class Program_Tags {

    @PrimaryGeneratedColumn()
    program_tag_key!: number;

    @Column()
    program_tag!: string;
    
}
