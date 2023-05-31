import { Products } from 'src/product/entity';
import { Column, PrimaryGeneratedColumn, OneToMany, Entity } from 'typeorm';

@Entity()
export class Brands {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column()
  description: string;
  @Column({ type: 'timestamptz' })
  create_At: Date;
  @OneToMany(() => Products, (product: Products) => product.brand)
  public product: Products[];
}
