import { Test, TestingModule } from '@nestjs/testing';
import { SmesService } from './smes.service';

describe('SmesService', () => {
  let service: SmesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmesService],
    }).compile();

    service = module.get<SmesService>(SmesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
