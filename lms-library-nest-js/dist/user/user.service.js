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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const entity_1 = require("./entity");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(repository) {
        this.repository = repository;
    }
    async changePassword(id, dto) {
        try {
            const user = await this.repository.findOneBy({ id: id });
            const passwordValidate = await bcrypt.compare(dto.oldPassword, user.password);
            if (!passwordValidate) {
                throw new common_1.UnauthorizedException();
            }
            const hash = await bcrypt.hash(dto.newPassword, 10);
            await this.repository.update({ id }, {
                password: hash,
            });
            return 'Change password successfully !';
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async profileSetting(id, dto) {
        try {
            const user = await this.repository.findOneBy({ id: id });
            if (!user) {
                throw new common_1.HttpException('User not found !', common_1.HttpStatus.NOT_FOUND);
            }
            await this.repository.update({ id }, {
                firstname: dto.fisrtName || user.firstname,
                lastname: dto.lastName || user.lastname,
                phone: dto.phone || user.phone,
            });
            return {
                mgs: 'Profile Updated !',
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.detail, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async userList() {
        try {
            const user = await this.repository.find({
                select: {
                    email: true,
                    password: false,
                    firstname: true,
                    lastname: true,
                    phone: true,
                },
            });
            return user;
        }
        catch (error) {
            throw new common_1.HttpException(error.detail, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getUser(id) {
        try {
            const user = await this.repository.findOneBy({
                id: id,
            });
            if (!user) {
                throw new common_1.HttpException('User Not Found !', common_1.HttpStatus.NOT_FOUND);
            }
            return user;
        }
        catch (error) {
            throw new common_1.HttpException(error.detail, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async createUser(dto) {
        try {
            const hash = await bcrypt.hash(dto.password, 10);
            const user = await this.repository.create({
                email: dto.email,
                password: hash,
                role: entity_1.Role.Staff,
            });
            await this.repository.save(user);
            return user;
        }
        catch (error) {
            throw new common_1.HttpException(error.detail, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteUser(id) {
        try {
            const user = await this.repository.findOneBy({ id: id });
            if (!user) {
                throw new common_1.HttpException('User Not Found!', common_1.HttpStatus.NOT_FOUND);
            }
            await this.repository.delete(user);
            return {
                mgs: 'User Deleted!',
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.detail, common_1.HttpStatus.BAD_GATEWAY);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map