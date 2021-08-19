import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { PlantType } from './PlantType';
import { Soil } from './Soil';

@Entity('plants')
class Plant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PlantType)
  @JoinColumn({ name: 'type_id' })
  type: PlantType;

  @ManyToMany(() => Soil)
  @JoinTable()
  soils: Soil[];

  @Column()
  description: string;

  @Column()
  image_url: string;

  @Column()
  common_name: string;

  @Column()
  scientific_name: string;

  @Column()
  temperature: number;

  @Column()
  watering_frequency: number;

  @Column()
  fertilize_frequency: number;

  @Column()
  toxicity_description: string;

  @Column()
  sun_exposure: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Plant };
