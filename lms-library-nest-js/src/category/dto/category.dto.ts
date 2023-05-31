import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CategoryDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  description: string;
}
