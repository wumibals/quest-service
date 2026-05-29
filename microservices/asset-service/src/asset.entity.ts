import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('assets')
export class Asset {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() name: string;
  @Column() url: string;
  @Column({ nullable: true }) mimeType: string;
  @Column({ default: 0 }) sizeBytes: number;
  @CreateDateColumn() createdAt: Date;
}