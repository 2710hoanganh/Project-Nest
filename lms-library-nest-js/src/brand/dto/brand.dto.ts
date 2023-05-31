import { IsNotEmpty, IsString } from 'class-validator';

export class BrandDTO {
  @IsString()
  @IsNotEmpty()
  brandName: string;
  @IsString()
  brandDesc: string;
}
