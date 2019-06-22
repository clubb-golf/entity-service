import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getAllCourses() {
    return 'all courses';
  }
}
