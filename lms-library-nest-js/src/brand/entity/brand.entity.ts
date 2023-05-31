import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Brands {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column()
  description: string;
  @Column({ type: 'timestamptz' })
  create_At: Date;
}
