import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  UseGuards,
  Request,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { ChangePasswordDTO, ProfleSettingDTO, UserDTO } from './dto';
import { Role, User } from './entity';
import { Roles } from 'src/auth/role-check';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getMe(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('me/password')
  changePassword(@Body() dto: ChangePasswordDTO, @Request() req): Promise<any> {
    return this.service.changePassword(req.user.sub, dto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Put('me/profile')
  profileSetting(@Body() dto: ProfleSettingDTO, @Request() req): Promise<any> {
    return this.service.profileSetting(req.user.sub, dto);
  }

  // addmin
  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'))
  @Get('staff/list')
  getAll(): Promise<User[]> {
    return this.service.userList();
  }
  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'))
  @Get('staff/:id')
  getUser(@Param('id') id: number): Promise<User> {
    return this.service.getUser(id);
  }
  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'))
  @Post('create-staff')
  createUser(@Body() dto: UserDTO): Promise<User> {
    return this.service.createUser(dto);
  }
  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'))
  @Delete('delete/:id')
  deleteUser(@Param('id') id: number): Promise<any> {
    return this.service.deleteUser(id);
  }
}
