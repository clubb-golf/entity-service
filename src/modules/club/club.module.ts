import { Module } from '@nestjs/common';
import { ClubController } from './club.controller';
import { ClubService } from './club.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubEntity } from './models/club.entity';
import { CourseModule } from '../course/course.module';

@Module({
  controllers: [ClubController],
  providers: [ClubService],
  imports: [
    TypeOrmModule.forFeature([ClubEntity]),
    CourseModule,
  ],
  exports: [],
})
export class ClubModule {}
