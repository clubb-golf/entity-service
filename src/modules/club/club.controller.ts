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

  @Get('/:id')
  getClubById(@Param() { id }) {
    return this.clubService.getClubById(id);
  }
}
