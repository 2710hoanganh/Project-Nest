import { Repository } from 'typeorm';
import { Products } from './entity';
import { ProductDTO } from './dto';
import { Categorys } from 'src/category/entity';
import { Brands } from 'src/brand/entity';
export declare class ProductService {
    private repository;
    private categoryRepo;
    private brandRepo;
    constructor(repository: Repository<Products>, categoryRepo: Repository<Categorys>, brandRepo: Repository<Brands>);
    create(dto: ProductDTO): Promise<Products>;
    findCategory(name: string): Promise<Categorys>;
    findBrand(name: string): Promise<Brands>;
}
