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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const entity_1 = require("../../brand/entity");
const entity_2 = require("../../category/entity");
const typeorm_1 = require("typeorm");
let Products = class Products {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Products.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Products.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Products.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Products.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Products.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Products.prototype, "create_At", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entity_1.Brands, (brand) => brand.product),
    __metadata("design:type", entity_1.Brands)
], Products.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entity_2.Categorys, (category) => category.product),
    __metadata("design:type", entity_2.Categorys)
], Products.prototype, "category", void 0);
Products = __decorate([
    (0, typeorm_1.Entity)()
], Products);
exports.Products = Products;
//# sourceMappingURL=products.entity.js.map