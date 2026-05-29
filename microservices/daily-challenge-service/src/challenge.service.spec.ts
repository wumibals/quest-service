import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ChallengeService } from './challenge.service';
import { DailyChallenge } from './challenge.entity';
describe('ChallengeService', () => {
  let service: ChallengeService;
  const mockRepo = { create: jest.fn((d) => d), save: jest.fn((d) => Promise.resolve({ id: 'uuid', ...d })), find: jest.fn(() => Promise.resolve([])), findOneBy: jest.fn(() => Promise.resolve(null)) };
  beforeEach(async () => {
    const m = await Test.createTestingModule({ providers: [ChallengeService, { provide: getRepositoryToken(DailyChallenge), useValue: mockRepo }] }).compile();
    service = m.get(ChallengeService);
  });
  it('creates a challenge', async () => { expect(await service.create({ puzzleId: 'p1', date: '2025-01-01' })).toBeDefined(); });
  it('returns all challenges', async () => { expect(Array.isArray(await service.findAll())).toBe(true); });
});