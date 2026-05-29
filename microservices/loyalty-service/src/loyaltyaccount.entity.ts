import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
@Entity('loyalty_accounts')
export class LoyaltyAccount {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() userId: string;
  @Column({ default: 0 }) points: number;
  @Column({ default: 'bronze' }) tier: string;
  @CreateDateColumn() createdAt: Date;
}