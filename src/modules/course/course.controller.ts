import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('courses')
export class CourseController {
  constructor(
    private readonly courseService: CourseService,
  ) {}

  @Get()
  getAllClubs() {
    return this.courseService.getAllCourses();
  }}
