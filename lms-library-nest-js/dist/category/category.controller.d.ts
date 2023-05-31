import { CategoryService } from './category.service';
import { CategoryDTO } from './dto';
import { Category } from './entity';
export declare class CategoryController {
    private service;
    constructor(service: CategoryService);
    createCategory(dto: CategoryDTO): Promise<Category>;
    getCategory(id: number): Promise<Category>;
    getAll(): Promise<Category[]>;
    editCategory(id: number, dto: CategoryDTO): Promise<any>;
    deteleCategory(id: number): Promise<any>;
}
