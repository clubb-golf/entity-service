import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { ClubEntity } from '../../club/models/club.entity';
import { BuildEntity } from '../../build/models/build.entity';

@Entity({ name: 'course' })
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

    @OneToMany(type => BuildEntity, build => build.course)
    builds: BuildEntity[];

    @CreateDateColumn()
    createdAt: Date;
}
