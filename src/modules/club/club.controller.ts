import { Controller, Get, Param } from '@nestjs/common';
import { ClubService } from './club.service';

@Controller('clubs')
export class ClubController {
  constructor(
    private readonly clubService: ClubService,
  ) {}

  @Get()
  getAllClubs() {
    return this.clubService.getAllClubs();
  }

  @Get('detail/:id')
  getClubDetails(@Param() { id }) {
    return this.clubService.getClubDetails(id);
  }

  @Get('/:id')
  getClubById(@Param() { id }) {
    return this.clubService.getClub(id);
  }

  @Get(':id/courses')
  getAllCoursesOfClub(@Param() { id }) {
    return this.clubService.getAllCoursesOfClub(id);
  }
}
