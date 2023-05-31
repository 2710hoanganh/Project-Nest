"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entity_1 = require("./entity");
const entity_2 = require("../category/entity");
const entity_3 = require("../brand/entity");
let ProductService = class ProductService {
    constructor(repository, categoryRepo, brandRepo) {
        this.repository = repository;
        this.categoryRepo = categoryRepo;
        this.brandRepo = brandRepo;
    }
    async create(dto) {
        try {
            this.findCategory(dto.categoryName);
            this.findBrand(dto.brandName);
            const product = await this.repository.create({
                name: dto.name,
                description: dto.desc,
                price: dto.price,
                quantity: dto.quantity,
            });
            this.repository.save(product);
            return product;
        }
        catch (error) {
            throw new common_1.HttpException(error.detail, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findCategory(name) {
        const category = await this.categoryRepo.findOneBy({
            name: name,
        });
        if (!category) {
            throw new common_1.HttpException('Category Not Found!', common_1.HttpStatus.NOT_FOUND);
        }
        return category;
    }
    async findBrand(name) {
        const brand = await this.brandRepo.findOneBy({
            name: name,
        });
        if (!brand) {
            throw new common_1.HttpException('Category Not Found!', common_1.HttpStatus.NOT_FOUND);
        }
        return brand;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entity_1.Products)),
    __param(1, (0, typeorm_1.InjectRepository)(entity_2.Categorys)),
    __param(2, (0, typeorm_1.InjectRepository)(entity_3.Brands)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map