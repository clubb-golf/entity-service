import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { ClubEntity } from '../../club/models/club.entity';

@Entity({ name: 'courses' })
export class CourseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    informalName: string;

    @Column()
    establishedYear: string;

    @ManyToOne(type => ClubEntity, club => club.courses)
    club: ClubEntity;
}
