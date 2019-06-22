import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { CourseEntity } from '../../course/models/course.entity';

@Entity({ name: 'clubs' })
export class ClubEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    informalName: string;

    @Column()
    type: string;

    @Column()
    establishedYear: string;

    @OneToMany(type => CourseEntity, course => course.club)
    courses: CourseEntity[];
}
