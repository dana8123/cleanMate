import { Test, TestingModule } from '@nestjs/testing';
import { CleaningTasksController } from './cleaning-tasks.controller';

describe('CleaningTasksController', () => {
  let controller: CleaningTasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CleaningTasksController],
    }).compile();

    controller = module.get<CleaningTasksController>(CleaningTasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
