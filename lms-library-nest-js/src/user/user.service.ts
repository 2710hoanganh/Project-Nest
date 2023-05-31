import {
  Injectable,
  HttpException,
  HttpStatus,
  HttpCode,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Role, User } from './entity';
import { Repository } from 'typeorm';
import { ChangePasswordDTO, ProfleSettingDTO, UserDTO } from './dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async changePassword(id: number, dto: ChangePasswordDTO): Promise<any> {
    try {
      const user = await this.repository.findOneBy({ id: id });
      const passwordValidate = await bcrypt.compare(
        dto.oldPassword,
        user.password,
      ); // check password
      if (!passwordValidate) {
        throw new UnauthorizedException();
      }
      const hash = await bcrypt.hash(dto.newPassword, 10);
      await this.repository.update(
        { id },
        {
          password: hash,
        },
      );
      return 'Change password successfully !';
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async profileSetting(id: number, dto: ProfleSettingDTO): Promise<any> {
    try {
      const user = await this.repository.findOneBy({ id: id });
      if (!user) {
        throw new HttpException('User not found !', HttpStatus.NOT_FOUND);
      }
      await this.repository.update(
        { id },
        {
          firstname: dto.fisrtName || user.firstname,
          lastname: dto.lastName || user.lastname,
          phone: dto.phone || user.phone,
        },
      );
      return {
        mgs: 'Profile Updated !',
      };
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }

  //admin fuction :))
  async userList(): Promise<User[]> {
    try {
      const user = await this.repository.find({
        where: {
          role: Role.Staff,
        },
        select: {
          email: true,
          password: false,
          firstname: true,
          lastname: true,
          phone: true,
        },
      });
      return user;
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }

  async getUser(id: number): Promise<User> {
    try {
      const user = await this.repository.findOneBy({
        id: id,
      });
      if (!user) {
        throw new HttpException('User Not Found !', HttpStatus.NOT_FOUND);
      }
      return user;
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }
  async createUser(dto: UserDTO): Promise<User> {
    try {
      const hash = await bcrypt.hash(dto.password, 10);
      const user = await this.repository.create({
        email: dto.email,
        password: hash,
        role: Role.Staff,
      });
      await this.repository.save(user);
      return user;
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }

  async deleteUser(id: number): Promise<any> {
    try {
      const user = await this.repository.findOneBy({ id: id });
      if (!user) {
        throw new HttpException('User Not Found!', HttpStatus.NOT_FOUND);
      }
      await this.repository.delete(user);
      return {
        mgs: 'User Deleted!',
      };
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_GATEWAY);
    }
  }
}
