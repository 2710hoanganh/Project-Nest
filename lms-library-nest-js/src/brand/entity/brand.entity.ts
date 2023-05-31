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
  @Column('timestamp with time zone', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  create_At: Date;
  @OneToMany(() => Products, (product: Products) => product.brand)
  public product: Products[];
}
