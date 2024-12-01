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

    async createDefaultCleanList() {
        const defaultTasks = [
            { title: "바닥 청소: 진공청소 및 걸레질" },
            { title: "쓰레기통 비우기: 분리수거 포함" },
            { title: "창문 닦기: 유리창 청소 (필요 시)" },
            { title: "가구 먼지 제거: 테이블, 의자, 장식장, TV 등" },
            { title: "조명 및 스위치 청소: 먼지와 손때 제거" },
            { title: "침대 정리: 시트, 이불, 베개 커버 교체 및 정리" },
            { title: "매트리스 점검: 얼룩이나 손상 여부 확인" },
            { title: "침대 주변 먼지 제거: 협탁 및 조명 청소" },
            { title: "변기, 세면대, 욕조 청소: 살균 및 얼룩 제거" },
            { title: "거울 닦기: 물자국 제거" },
            { title: "타일 및 배수구 청소: 곰팡이 및 찌든 때 제거" },
            { title: "새로운 욕실 용품 배치: 새 비누, 샴푸, 수건 제공" },
            { title: "화장실 냄새 제거: 환기 및 방향제 사용." },
            { title: "식기 세척 및 정리: 설거지 및 그릇 정리" },
            { title: "싱크대 청소: 살균 및 얼룩 제거" },
            { title: "음식물 쓰레기 처리: 음식물 쓰레기 봉투 교체" },
            { title: "소모품 체크: 휴지, 물티슈, 세제 등 리필" },
            { title: "잔여 물건 처리: 체크아웃 후 손님 물건 처리 (분실물 보관)" }
        ]

        const tasks = defaultTasks.map((task) => {
            const newTasks = new Task();
            newTasks.title = task.title;
            return newTasks;
        })
        console.log(tasks)
        return this.taskRepository.save(tasks);
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
