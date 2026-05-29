import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoyaltyAccount } from './loyaltyaccount.entity';
import { LoyaltyAccountService } from './loyaltyaccount.service';
import { LoyaltyAccountController } from './loyaltyaccount.controller';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),TypeOrmModule.forRootAsync({imports:[ConfigModule],useFactory:(c:ConfigService)=>({type:'postgres',url:c.get('DATABASE_URL'),entities:[LoyaltyAccount],synchronize:true}),inject:[ConfigService]}),TypeOrmModule.forFeature([LoyaltyAccount])],
  controllers: [LoyaltyAccountController],
  providers: [LoyaltyAccountService],
})
export class AppModule {}