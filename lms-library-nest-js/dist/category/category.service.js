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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entity_1 = require("./entity");
let CategoryService = class CategoryService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(dto) {
        try {
            const category = await this.repository.create({
                name: dto.name,
                description: dto.description,
            });
            await this.repository.save(category);
            return category;
        }
        catch (error) {
            throw new common_1.HttpException(error.detail, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async get(id) {
        try {
            const category = await this.repository.findOneBy({
                id: id,
            });
            if (!category) {
                throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
            }
            return category;
        }
        catch (error) {
            throw new common_1.HttpException(error.detail, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getALl() {
        try {
            const categorys = await this.repository.find({
                select: {
                    name: true,
                    description: true,
                    create_At: true,
                },
            });
            return categorys;
        }
        catch (error) {
            throw new common_1.HttpException(error.detail, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            const category = await this.repository.findOneBy({
                id,
            });
            if (!category) {
                throw new common_1.HttpException('Not Found ', common_1.HttpStatus.NOT_FOUND);
            }
            return {
                mgs: 'Category Deleted!',
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.detail, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async edit(id, dto) {
        try {
            const category = await this.repository.findOneBy({
                id,
            });
            if (!category) {
                throw new common_1.HttpException('Not Found ', common_1.HttpStatus.NOT_FOUND);
            }
            await this.repository.update({ id }, {
                name: dto.name || category.name,
                description: dto.name || category.description,
            });
            return {
                mgs: 'Category Updated!',
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.detail, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map