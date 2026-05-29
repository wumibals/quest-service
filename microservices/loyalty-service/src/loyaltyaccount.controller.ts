import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LoyaltyAccountService } from './loyaltyaccount.service';
@Controller('loyalty')
export class LoyaltyAccountController {
  constructor(private readonly svc: LoyaltyAccountService) {}
  @Post() create(@Body('userId') userId: string) { return this.svc.create(userId); }
  @Get(':userId') findByUser(@Param('userId') userId: string) { return this.svc.findByUser(userId); }
  @Post(':userId/points') addPoints(@Param('userId') userId: string, @Body('points') pts: number) { return this.svc.addPoints(userId, pts); }
}