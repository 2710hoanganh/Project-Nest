import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class ProductDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  desc: string;
  @IsInt()
  @IsNotEmpty()
  price: number;
  @IsInt()
  @IsNotEmpty()
  quantity: number;
  @IsString()
  @IsNotEmpty()
  brandName: string;
  @IsString()
  @IsNotEmpty()
  categoryName: string;
}
