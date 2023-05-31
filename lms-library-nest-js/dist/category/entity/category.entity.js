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
exports.Categorys = void 0;
const entity_1 = require("../../product/entity");
const typeorm_1 = require("typeorm");
let Categorys = class Categorys {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Categorys.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Categorys.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Categorys.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true, default: Date.now() }),
    __metadata("design:type", Date)
], Categorys.prototype, "create_At", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entity_1.Products, (product) => product.category),
    __metadata("design:type", Array)
], Categorys.prototype, "product", void 0);
Categorys = __decorate([
    (0, typeorm_1.Entity)()
], Categorys);
exports.Categorys = Categorys;
//# sourceMappingURL=category.entity.js.map