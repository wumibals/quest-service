import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoyaltyAccount } from './loyaltyaccount.entity';
@Injectable()
export class LoyaltyAccountService {
  constructor(@InjectRepository(LoyaltyAccount) private readonly repo: Repository<LoyaltyAccount>) {}
  create(userId: string): Promise<LoyaltyAccount> { return this.repo.save(this.repo.create({ userId })); }
  findByUser(userId: string): Promise<LoyaltyAccount | null> { return this.repo.findOneBy({ userId }); }
  async addPoints(userId: string, pts: number): Promise<LoyaltyAccount> {
    let acc = await this.repo.findOneBy({ userId });
    if (!acc) acc = this.repo.create({ userId, points: 0 });
    acc.points += pts;
    acc.tier = acc.points >= 1000 ? 'gold' : acc.points >= 500 ? 'silver' : 'bronze';
    return this.repo.save(acc);
  }
}