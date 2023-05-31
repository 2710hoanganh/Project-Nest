import { Brands } from 'src/brand/entity';
import { Categorys } from '../../category/entity';
export declare class Products {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    create_At: Date;
    brand: Brands;
    category: Categorys;
}
