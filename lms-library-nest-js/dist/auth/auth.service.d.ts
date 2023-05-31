import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthRegisterDTO, LoginDTO } from './dto';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private repository;
    private jwt;
    private config;
    constructor(repository: Repository<User>, jwt: JwtService, config: ConfigService);
    signup(dto: AuthRegisterDTO): Promise<User>;
    signupAdmin(dto: AuthRegisterDTO): Promise<User>;
    login(dto: LoginDTO): Promise<any>;
    createToken(id: number, email: string, role: string): Promise<string>;
}
