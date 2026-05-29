import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asset } from './asset.entity';

@Injectable()
export class AssetService {
  constructor(@InjectRepository(Asset) private readonly repo: Repository<Asset>) {}
  create(data: Partial<Asset>): Promise<Asset> { return this.repo.save(this.repo.create(data)); }
  findAll(): Promise<Asset[]> { return this.repo.find(); }
  findOne(id: string): Promise<Asset | null> { return this.repo.findOneBy({ id }); }
}