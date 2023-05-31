import { AuthService } from './auth.service';
import { AuthRegisterDTO, LoginDTO } from './dto';
export declare class AuthController {
    private service;
    constructor(service: AuthService);
    signup(dto: AuthRegisterDTO): Promise<import("../user/entity").User>;
    signupAD(dto: AuthRegisterDTO): Promise<import("../user/entity").User>;
    login(dto: LoginDTO): Promise<any>;
}
