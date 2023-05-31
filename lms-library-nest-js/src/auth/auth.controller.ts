import { Body, Controller, Post, Res, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRegisterDTO, LoginDTO } from './dto'; //

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('sign-up')
  signup(@Body() dto: AuthRegisterDTO) {
    return this.service.signup(dto); //call service from auth.service.ts
  }

  @Post('sign-up/admin')
  signupAD(@Body() dto: AuthRegisterDTO) {
    return this.service.signupAdmin(dto); //call service from auth.service.ts
  }

  @Post('login')
  login(@Body() dto: LoginDTO): Promise<any> {
    return this.service.login(dto);
  }
}
