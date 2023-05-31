import { User } from './entity';
import { Repository } from 'typeorm';
import { ChangePasswordDTO, ProfleSettingDTO, UserDTO } from './dto';
export declare class UserService {
    private repository;
    constructor(repository: Repository<User>);
    changePassword(id: number, dto: ChangePasswordDTO): Promise<any>;
    profileSetting(id: number, dto: ProfleSettingDTO): Promise<any>;
    userList(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    createUser(dto: UserDTO): Promise<User>;
    deleteUser(id: number): Promise<any>;
}
