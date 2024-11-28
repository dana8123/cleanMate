import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './cleaning-tasks.entity';
import { CleaningTasksService } from './cleaning-tasks.service';
import { CleaningTasksController } from './cleaning-tasks.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Task])], // Task 엔티티를 TypeOrmModule에 등록
    providers: [CleaningTasksService],
    controllers: [CleaningTasksController],
})

export class CleaningTasksModule { }
