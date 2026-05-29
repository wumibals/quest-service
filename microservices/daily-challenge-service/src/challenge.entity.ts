import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
@Entity('daily_challenges')
export class DailyChallenge {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() puzzleId: string;
  @Column({ type: 'date' }) date: string;
  @Column({ default: 0 }) bonusPoints: number;
  @CreateDateColumn() createdAt: Date;
}