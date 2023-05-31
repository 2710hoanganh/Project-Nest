import { Repository } from 'typeorm';
import { Category } from './entity';
import { CategoryDTO } from './dto';
export declare class CategoryService {
    private repository;
    constructor(repository: Repository<Category>);
    create(dto: CategoryDTO): Promise<Category>;
    get(id: number): Promise<Category>;
    getALl(): Promise<Category[]>;
    delete(id: number): Promise<any>;
    edit(id: number, dto: CategoryDTO): Promise<any>;
}
