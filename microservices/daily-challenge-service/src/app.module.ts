import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyChallenge } from './challenge.entity';
import { ChallengeService } from './challenge.service';
import { ChallengeController } from './challenge.controller';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),TypeOrmModule.forRootAsync({imports:[ConfigModule],useFactory:(c:ConfigService)=>({type:'postgres',url:c.get('DATABASE_URL'),entities:[DailyChallenge],synchronize:true}),inject:[ConfigService]}),TypeOrmModule.forFeature([DailyChallenge])],
  controllers: [ChallengeController],
  providers: [ChallengeService],
})
export class AppModule {}