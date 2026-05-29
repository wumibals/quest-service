import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { DailyChallenge } from './challenge.entity';
@Controller('challenges')
export class ChallengeController {
  constructor(private readonly svc: ChallengeService) {}
  @Post() create(@Body() body: Partial<DailyChallenge>) { return this.svc.create(body); }
  @Get() findAll() { return this.svc.findAll(); }
  @Get('today') getToday() { return this.svc.getToday(); }
  @Get('date/:date') findByDate(@Param('date') date: string) { return this.svc.findByDate(date); }
}