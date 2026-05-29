import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { Subscription } from './subscription.entity';
@Controller('subscriptions')
export class SubscriptionController {
  constructor(private readonly svc: SubscriptionService) {}
  @Post() create(@Body() body: Partial<Subscription>) { return this.svc.create(body); }
  @Get(':userId') findByUser(@Param('userId') userId: string) { return this.svc.findByUser(userId); }
  @Post(':id/cancel') cancel(@Param('id') id: string) { return this.svc.cancel(id); }
}