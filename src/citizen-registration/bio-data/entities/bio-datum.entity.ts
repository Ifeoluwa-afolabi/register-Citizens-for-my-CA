import { LinkedIdentity } from "src/citizen-registration/Linked-Identity/entities/Linked-Identity.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity()
export class BioData {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({ nullable: true })
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    dateOfBirth: Date;

    @Column({ nullable: true })
    nationality: string

    @Column({ nullable: true })
    address: string

    @Column({ default: true })
    isActive: boolean;

    @OneToOne(type => LinkedIdentity, LinkedIdentity => LinkedIdentity.BioData)
    LinkedIdentity: LinkedIdentity;

}

