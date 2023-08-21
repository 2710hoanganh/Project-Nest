import { ProductService } from './product.service';
import { Products } from './entity';
import { ProductDTO } from './dto';
export declare class ProductController {
    private service;
    constructor(service: ProductService);
    create(dto: ProductDTO): Promise<Products>;
}
