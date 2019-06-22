import { Module } from '@nestjs/common';
import { ClubController } from './club.controller';
import { ClubService } from './club.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubEntity } from './models/club.entity';

@Module({
  controllers: [ClubController],
  providers: [ClubService],
  imports: [TypeOrmModule.forFeature([ClubEntity])],
  exports: [],
})
export class ClubModule {}
