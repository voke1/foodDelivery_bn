import { Test, TestingModule } from '@nestjs/testing';
import { SmesController } from './smes.controller';

describe('Smes Controller', () => {
  let controller: SmesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmesController],
    }).compile();

    controller = module.get<SmesController>(SmesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
