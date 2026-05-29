import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LoyaltyAccountService } from './loyaltyaccount.service';
import { LoyaltyAccount } from './loyaltyaccount.entity';
describe('LoyaltyAccountService', () => {
  let service: LoyaltyAccountService;
  const mockRepo = { create: jest.fn((d) => d), save: jest.fn((d) => Promise.resolve({ id: 'uuid', points: 0, tier: 'bronze', ...d })), findOneBy: jest.fn(() => Promise.resolve(null)) };
  beforeEach(async () => {
    const m = await Test.createTestingModule({ providers: [LoyaltyAccountService, { provide: getRepositoryToken(LoyaltyAccount), useValue: mockRepo }] }).compile();
    service = m.get(LoyaltyAccountService);
  });
  it('creates account', async () => { expect(await service.create('u1')).toBeDefined(); });
  it('adds points and upgrades tier', async () => { mockRepo.findOneBy.mockResolvedValueOnce({ userId: 'u1', points: 490, tier: 'bronze' }); const r = await service.addPoints('u1', 20); expect(r.tier).toBe('silver'); });
});