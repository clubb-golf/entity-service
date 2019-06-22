import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClubEntity } from './models/club.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(ClubEntity) private readonly clubRepository: Repository<ClubEntity>,
  ) {}

  getAllClubs() {
    return this.clubRepository.find();
  }

  getClubById(id) {
    return this.clubRepository.findOne(id);
  }
}
