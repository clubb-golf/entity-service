import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClubEntity } from './models/club.entity';
import { Repository } from 'typeorm';
import { CourseService } from '../course/course.service';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(ClubEntity) private readonly clubRepository: Repository<ClubEntity>,
    private readonly courseService: CourseService,
  ) {}

  getAllClubs() {
    return this.clubRepository.find();
  }

  async getClub(id) {
    const club = await this.clubRepository.findOne(id);
    return club;
  }

  async getClubDetails(id) {
    const club = await this.clubRepository.findOne(id);
    const courses = await this.courseService.getAllCoursesOfClub(id);
    club.courses = courses;
    return club;
  }

  async getAllCoursesOfClub(id) {
    return await this.courseService.getAllCoursesOfClub(id);
  }
}
