import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SubscriptionService } from './subscription.service';
import { Subscription, SubscriptionStatus } from './subscription.entity';
describe('SubscriptionService', () => {
  let service: SubscriptionService;
  const mockRepo = { create: jest.fn((d) => d), save: jest.fn((d) => Promise.resolve({ id: 'uuid', status: SubscriptionStatus.ACTIVE, ...d })), findOneBy: jest.fn(() => Promise.resolve({ id: 'uuid', status: SubscriptionStatus.ACTIVE })) };
  beforeEach(async () => {
    const m = await Test.createTestingModule({ providers: [SubscriptionService, { provide: getRepositoryToken(Subscription), useValue: mockRepo }] }).compile();
    service = m.get(SubscriptionService);
  });
  it('creates a subscription', async () => { expect(await service.create({ userId: 'u1' })).toBeDefined(); });
  it('cancels a subscription', async () => { const r = await service.cancel('uuid'); expect(r.status).toBe(SubscriptionStatus.CANCELLED); });
});