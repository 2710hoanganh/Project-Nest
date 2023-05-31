import {
  IsNotEmpty,
  IsString,
  IsEmail,
  Matches,
  Validate,
} from 'class-validator';

export class AuthRegisterDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @Validate((value: string, args: any) => value === args.object.password)
  rePassword: string;
}

export class LoginDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
