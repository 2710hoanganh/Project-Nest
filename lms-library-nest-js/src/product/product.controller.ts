import { Controller, Post,Get,Put,Delete,UseGuards ,Body} from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from "@nestjs/passport";
import { Roles } from 'src/auth/role-check';
import { Role } from 'src/user/entity';
import { Products } from './entity';
import { ProductDTO } from './dto';
@Controller('product')
export class ProductController {
  constructor(private service: ProductService) {}

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  @Roles(Role.Admin || Role.Staff)
  create(@Body() dto: ProductDTO): Promise<Products> {
    return this.service.createProduct(dto);
  }
  

}
