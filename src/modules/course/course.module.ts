import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './models/course.entity';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  exports: [CourseService],
})
export class CourseModule {}
