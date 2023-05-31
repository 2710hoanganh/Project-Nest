import { Repository } from 'typeorm';
import { Brands } from './entity';
import { BrandDTO } from './dto';
export declare class BrandService {
    private repository;
    constructor(repository: Repository<Brands>);
    create(dto: BrandDTO): Promise<Brands>;
    get(id: number): Promise<Brands>;
    getAll(): Promise<Brands[]>;
    delete(id: number): Promise<string>;
    update(dto: BrandDTO, id: number): Promise<any>;
}
