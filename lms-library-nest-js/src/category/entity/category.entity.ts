import { Products } from '../../product/entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Categorys {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column({ nullable: true })
  description: string;
  @Column({ type: 'timestamptz' })
  create_At: Date;
  @OneToMany(() => Products, (product: Products) => product.category)
  public product: Products[];
}
