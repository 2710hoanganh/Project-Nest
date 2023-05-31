import { BrandService } from './brand.service';
import { Brands } from './entity';
import { BrandDTO } from './dto';
export declare class BrandController {
    private service;
    constructor(service: BrandService);
    create(dto: BrandDTO): Promise<Brands>;
    get(id: number): Promise<Brands>;
    getAll(): Promise<Brands[]>;
    update(id: number, dto: BrandDTO): Promise<any>;
    delete(id: number): Promise<any>;
}
