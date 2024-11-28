import { Injectable } from '@nestjs/common';
import { Task } from './cleaning-tasks.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CleaningTasksService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>
    ) { }

    async createDefaultCleanList(title: String) {
        const task = new Task();
        task.title = title;
        return this.taskRepository.save(task);
    }

    createTask(title: String): Promise<Task> {
        const task = new Task();
        task.title = title;
        return this.taskRepository.save(task);
    }

    getAllTasks(): Promise<Task[]> {
        return this.taskRepository.find()
    }

    async updateTask(id: Number, title: String): Promise<Task> {
        const task = await this.taskRepository.findOneBy({ id: id })
        if (task) {
            task.title = title
            return this.taskRepository.save(task);
        }

        return null;
    }
}
