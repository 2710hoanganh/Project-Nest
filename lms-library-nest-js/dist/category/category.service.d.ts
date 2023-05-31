import { Repository } from 'typeorm';
import { Categorys } from './entity';
import { CategoryDTO } from './dto';
export declare class CategoryService {
    private repository;
    constructor(repository: Repository<Categorys>);
    create(dto: CategoryDTO): Promise<Categorys>;
    get(id: number): Promise<Categorys>;
    getALl(): Promise<Categorys[]>;
    delete(id: number): Promise<any>;
    edit(id: number, dto: CategoryDTO): Promise<any>;
}
