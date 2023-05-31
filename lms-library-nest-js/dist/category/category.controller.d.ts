import { CategoryService } from './category.service';
import { CategoryDTO } from './dto';
import { Categorys } from './entity';
export declare class CategoryController {
    private service;
    constructor(service: CategoryService);
    createCategory(dto: CategoryDTO): Promise<Categorys>;
    getCategory(id: number): Promise<Categorys>;
    getAll(): Promise<Categorys[]>;
    editCategory(id: number, dto: CategoryDTO): Promise<any>;
    deteleCategory(id: number): Promise<any>;
}
