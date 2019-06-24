import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from './course/course.module';
import { ClubModule } from './club/club.module';
import { DesignerModule } from './designer/designer.module';
import { BuildModule } from './build/build.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'entity_service',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CourseModule,
    ClubModule,
    DesignerModule,
    BuildModule,
  ],
})
export class AppModule {}
