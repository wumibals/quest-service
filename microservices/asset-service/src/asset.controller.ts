import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AssetService } from './asset.service';
import { Asset } from './asset.entity';

@Controller('assets')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}
  @Post() create(@Body() body: Partial<Asset>): Promise<Asset> { return this.assetService.create(body); }
  @Get() findAll(): Promise<Asset[]> { return this.assetService.findAll(); }
  @Get(':id') findOne(@Param('id') id: string): Promise<Asset | null> { return this.assetService.findOne(id); }
}