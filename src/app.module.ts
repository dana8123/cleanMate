import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CleaningTasksController } from './cleaning-tasks/cleaning-tasks.controller';
import { CleaningTasksService } from './cleaning-tasks/cleaning-tasks.service';
import { CleaningTasksModule } from './cleaning-tasks/cleaning-tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './cleaning-tasks/cleaning-tasks.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // PostgreSQL을 사용
      host: 'localhost', // DB 호스트
      port: 5432, // 기본 포트
      username: 'cleantask',
      password: 'cleantask',
      database: 'cleantask',
      entities: [Task], // DB에 연결할 엔티티
      synchronize: true, // 엔티티와 DB 스키마 동기화 (개발 환경에서만 사용, 실제 배포 시 false로 설정)
    }),
    CleaningTasksModule, // 예시로 TaskModule을 추가
  ],
})
export class AppModule { }
