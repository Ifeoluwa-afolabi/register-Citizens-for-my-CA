import { ModeOfEntry } from "../../../citizen-registration/citizenRegistration.types";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BioData } from "src/citizen-registration/Bio-Data/entities/Bio-Datum.entity";

@Entity()
export class LinkedIdentity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    department: string;

    @Column({nullable: true})
    matriculationNumber: string;

    @Column({type: 'enum', enum: ModeOfEntry, default: ModeOfEntry.UTME})
    modeOfEntry: ModeOfEntry;

    @Column()
    programOfStudy: string;

    @Column({default: new Date().getFullYear()})
    yearOfEntry: number;

    @JoinColumn()
    @OneToOne(type => BioData, BioData => BioData.LinkedIdentity, {cascade:true})
    BioData: BioData;
}