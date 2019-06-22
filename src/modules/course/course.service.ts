import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from './models/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity) private readonly courseRepository: Repository<CourseEntity>,
  ) {}

  getAllCourses() {
    return this.courseRepository.find();
  }

  getCourseById(id) {
    return this.courseRepository.findOne(id);
  }
}
