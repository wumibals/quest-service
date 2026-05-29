import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './asset.entity';
import { AssetService } from './asset.service';
import { AssetController } from './asset.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (c: ConfigService) => ({ type: 'postgres', url: c.get('DATABASE_URL'), entities: [Asset], synchronize: true }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Asset]),
  ],
  controllers: [AssetController],
  providers: [AssetService],
})
export class AppModule {}