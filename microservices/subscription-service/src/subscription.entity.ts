import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
export enum SubscriptionPlan { FREE = 'free', PREMIUM = 'premium', PRO = 'pro' }
export enum SubscriptionStatus { ACTIVE = 'active', CANCELLED = 'cancelled', EXPIRED = 'expired' }
@Entity('subscriptions')
export class Subscription {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() userId: string;
  @Column({ type: 'enum', enum: SubscriptionPlan, default: SubscriptionPlan.FREE }) plan: SubscriptionPlan;
  @Column({ type: 'enum', enum: SubscriptionStatus, default: SubscriptionStatus.ACTIVE }) status: SubscriptionStatus;
  @Column({ nullable: true }) expiresAt: Date;
  @CreateDateColumn() createdAt: Date;
}