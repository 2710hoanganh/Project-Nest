import { Brands } from 'src/brand/entity';
import { Categorys } from '../../category/entity';
import { Column, PrimaryGeneratedColumn, ManyToOne, Entity } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  quantity: number;
  @Column({ type: 'timestamptz' })
  create_At: Date;
  @ManyToOne(() => Brands, (brand: Brands) => brand.product)
  public brand: Brands;
  @ManyToOne(() => Categorys, (category: Categorys) => category.product)
  public category: Categorys;
}
