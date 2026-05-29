import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DailyChallenge } from './challenge.entity';
@Injectable()
export class ChallengeService {
  constructor(@InjectRepository(DailyChallenge) private readonly repo: Repository<DailyChallenge>) {}
  create(data: Partial<DailyChallenge>): Promise<DailyChallenge> { return this.repo.save(this.repo.create(data)); }
  findAll(): Promise<DailyChallenge[]> { return this.repo.find(); }
  findByDate(date: string): Promise<DailyChallenge | null> { return this.repo.findOneBy({ date }); }
  getToday(): Promise<DailyChallenge | null> { return this.findByDate(new Date().toISOString().split('T')[0]); }
}