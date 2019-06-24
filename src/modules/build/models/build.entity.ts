import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { DesignerEntity } from '../../designer/models/designer.entity';
import { CourseEntity } from '../../course/models/course.entity';

@Entity({ name: 'build' })
export class BuildEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    buildType: string;

    @Column()
    year: string;

    @Column()
    numOfHoles: string;

    @ManyToMany(type => DesignerEntity)
    @JoinTable({ name: 'designerBuilds' })
    designers: DesignerEntity[];

    @ManyToOne(type => CourseEntity, course => course.builds)
    course: CourseEntity;

    @CreateDateColumn()
    createdAt: Date;
}
