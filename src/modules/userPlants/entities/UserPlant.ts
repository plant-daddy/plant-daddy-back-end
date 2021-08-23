import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Plant } from '../../plants/entities/Plant';
import { User } from '../../users/entities/User';

@Entity('users_plants')
class UserPlant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  plant_id: number;

  @ManyToOne(() => Plant)
  @JoinColumn({ name: 'plant_id' })
  plant: Plant;

  @Column()
  user_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  nickname: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { UserPlant };
