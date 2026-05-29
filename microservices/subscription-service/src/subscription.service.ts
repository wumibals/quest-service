import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription, SubscriptionStatus } from './subscription.entity';
@Injectable()
export class SubscriptionService {
  constructor(@InjectRepository(Subscription) private readonly repo: Repository<Subscription>) {}
  create(data: Partial<Subscription>): Promise<Subscription> { return this.repo.save(this.repo.create(data)); }
  findByUser(userId: string): Promise<Subscription | null> { return this.repo.findOneBy({ userId }); }
  async cancel(id: string): Promise<Subscription> {
    const sub = await this.repo.findOneBy({ id });
    if (!sub) throw new Error('Not found');
    sub.status = SubscriptionStatus.CANCELLED;
    return this.repo.save(sub);
  }
}