import { Injectable } from '@nestjs/common';

@Injectable()
export class ClubService {
  getAllClubs() {
    return 'all clubs';
  }
}
