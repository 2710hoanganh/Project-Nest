import { UserService } from './user.service';
import { ChangePasswordDTO, ProfleSettingDTO, UserDTO } from './dto';
import { User } from './entity';
export declare class UserController {
    private service;
    constructor(service: UserService);
    getMe(req: any): any;
    changePassword(dto: ChangePasswordDTO, req: any): Promise<any>;
    profileSetting(dto: ProfleSettingDTO, req: any): Promise<any>;
    getAll(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    createUser(dto: UserDTO): Promise<User>;
    deleteUser(id: number): Promise<any>;
}
