import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity()
@Unique(["program_key"])
export class Program {

    @PrimaryGeneratedColumn()
    program_key!: number;

    @Column()
    program_type_key!: string;

    @Column()
    program_name!: string;

    @Column()
    program_desc!: string;

    @Column()
    program_owner_gid!: string;

    @Column()
    program_version!: string;

    @Column()
    program_active_flag!: string;

    @Column()
    verified_flag!: string;

    @Column()
    admin_override_flag!: string;

    @Column()
    active_environment_flag!: string;

    @Column()
    deployment_status_flag!: string;

    @Column()
    last_update_gid!: string;

    @Column()
    rnum!: string;

    @Column()
    owner_name!: string;

    @Column()
    workFlowMetadata!: string;

    @Column()
    program_type!: string;

    @Column()
    document_link!: string;

    @Column()
    node_id!: string;

    @Column()
    order_id!: string;

    @Column()
    parent_order_id!: string;

    @Column()
    workflow_name!: string;

    @Column()
    workflow_desc!: string;
    
    
}
