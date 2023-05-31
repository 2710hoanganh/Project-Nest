import {
  IsString,
  IsNotEmpty,
  Validate,
  IsInt,
  IsPhoneNumber,
  IsEmpty,
  IsOptional,
} from 'class-validator';

export class ChangePasswordDTO {
  @IsString()
  @IsNotEmpty()
  oldPassword: string;

  @IsString()
  @IsNotEmpty()
  newPassword: string;

  @IsNotEmpty()
  @IsString()
  @Validate((value: string, args: any) => value === args.object.newPassword)
  rePassword: string;
}

export class ProfleSettingDTO {
  @IsString()
  @IsOptional()
  fisrtName: string;
  @IsString()
  @IsOptional()
  lastName: string;
  @IsOptional()
  @IsInt()
  phone: number;
}

export class UserDTO {
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
