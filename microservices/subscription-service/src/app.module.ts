import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscription } from './subscription.entity';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),TypeOrmModule.forRootAsync({imports:[ConfigModule],useFactory:(c:ConfigService)=>({type:'postgres',url:c.get('DATABASE_URL'),entities:[Subscription],synchronize:true}),inject:[ConfigService]}),TypeOrmModule.forFeature([Subscription])],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
})
export class AppModule {}