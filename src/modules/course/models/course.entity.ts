import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { ClubEntity } from '../../club/models/club.entity';

@Entity({ name: 'courses' })
export class CourseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable: true })
    name?: string;

    @Column({ nullable: true })
    informalName?: string;

    @Column()
    establishedYear: string;

    @ManyToOne(type => ClubEntity, club => club.courses)
    club: ClubEntity;

    @CreateDateColumn()
    createdAt: Date;
}
