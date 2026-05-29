import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AssetService } from './asset.service';
import { Asset } from './asset.entity';

describe('AssetService', () => {
  let service: AssetService;
  const mockRepo = {
    create: jest.fn((d) => d),
    save: jest.fn((d) => Promise.resolve({ id: 'uuid', ...d })),
    find: jest.fn(() => Promise.resolve([])),
    findOneBy: jest.fn(() => Promise.resolve(null)),
  };
  beforeEach(async () => {
    const m = await Test.createTestingModule({
      providers: [AssetService, { provide: getRepositoryToken(Asset), useValue: mockRepo }],
    }).compile();
    service = m.get(AssetService);
  });
  it('creates an asset', async () => { const r = await service.create({ name: 'img.png', url: 'https://cdn/img.png' }); expect(r).toBeDefined(); });
  it('returns all assets', async () => { expect(Array.isArray(await service.findAll())).toBe(true); });
});