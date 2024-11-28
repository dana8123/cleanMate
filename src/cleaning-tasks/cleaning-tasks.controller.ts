import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CleaningTasksService } from './cleaning-tasks.service';

@Controller('cleaning-tasks')
export class CleaningTasksController {
    constructor(private readonly cleaningTaskService: CleaningTasksService) { }

    @Get()
    findAll() {
        return this.cleaningTaskService.getAllTasks()
    }

    @Post()
    createDefaultCleanList(): Array<String> {
        return [];
    }

    @Post()
    createTask(@Body() title: String): Boolean {
        // 새로운 청소내역을 생성
        return true
    }

    @Patch(':id')
    updateTask(@Param('id') id: Number, @Body('title') title: String) {
        // 청소내역을 수정하거나 완료처리하도록함
        return this.cleaningTaskService.updateTask(id, title)
    }
}
