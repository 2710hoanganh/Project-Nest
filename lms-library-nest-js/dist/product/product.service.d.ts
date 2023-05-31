import { Repository } from 'typeorm';
import { Products } from './entity';
export declare class ProductService {
    private repository;
    constructor(repository: Repository<Products>);
}
