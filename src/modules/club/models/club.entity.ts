import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { CourseEntity } from '../../course/models/course.entity';

@Entity({ name: 'clubs' })
export class ClubEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    informalName?: string;

    @Column()
    type: string;

    @Column()
    establishedYear: string;

    @OneToMany(type => CourseEntity, course => course.club)
    courses: CourseEntity[];

    @CreateDateColumn()
    createdAt: Date;
}
