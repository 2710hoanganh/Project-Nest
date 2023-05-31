import {
  Injectable,
  HttpException,
  HttpStatus,
  HttpCode,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthRegisterDTO, LoginDTO } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role, User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { time } from 'console';
@Injectable({})
export class AuthService {
  constructor(
    @InjectRepository(User) private repository: Repository<User>,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthRegisterDTO): Promise<User> {
    try {
      //hash the password
      const hash = await bcrypt.hash(dto.password, 10);
      //create new user
      const newUser = await this.repository.create({
        email: dto.email,
        password: hash,
      });
      await this.repository.save(newUser);
      return newUser;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async signupAdmin(dto: AuthRegisterDTO): Promise<User> {
    try {
      //hash the password
      const hash = await bcrypt.hash(dto.password, 10);
      //create new user
      const newUser = await this.repository.create({
        email: dto.email,
        password: hash,
        role: Role.Admin,
      });
      await this.repository.save(newUser);
      return newUser;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async login(dto: LoginDTO): Promise<any> {
    try {
      const user = await this.repository.findOneBy({
        email: dto.email,
      });
      if (!user) {
        throw new HttpException('Email not existing!', HttpStatus.BAD_REQUEST);
      } // check user
      const passwordValidate = await bcrypt.compare(
        dto.password,
        user.password,
      ); // check password
      if (!passwordValidate) {
        throw new UnauthorizedException();
      }
      return this.createToken(user.id, user.email, user.role); //return token:))
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  // create jwt token //jwt have 3 part : header + payload + signature :)))
  createToken(id: number, email: string, role: string) {
    const payload = { sub: id, email, role };
    const secret_key = this.config.get('JWT_KEY');
    const timeExpires = this.config.get('EXPIRES_IN');
    const token = this.jwt.signAsync(payload, {
      secret: secret_key,
      expiresIn: timeExpires,
    });

    return token;
  }
}
