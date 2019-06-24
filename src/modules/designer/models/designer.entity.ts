import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'designers' })
export class DesignerEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstName: string;

    @Column({ nullable: true })
    middleName?: string;

    @Column()
    lastName: string;

    @Column({ nullable: true, type: 'date' })
    birthDate?: string;

    @Column({ nullable: true, type: 'date' })
    deathDate?: string;

    @CreateDateColumn()
    createdAt: Date;
}
