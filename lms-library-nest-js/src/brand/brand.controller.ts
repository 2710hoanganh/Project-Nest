import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  UseGuards,
  Param,
  Body,
} from '@nestjs/common';
import { BrandService } from './brand.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/role-check';
import { Role } from 'src/user/entity';
import { Brands } from './entity';
import { BrandDTO } from './dto';

@Controller('brand')
export class BrandController {
  constructor(private service: BrandService) {}

  @Post('craete')
  @UseGuards(AuthGuard('jwt'))
  @Roles(Role.Admin || Role.Staff)
  create(@Body() dto: BrandDTO): Promise<Brands> {
    return this.service.create(dto);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @Roles(Role.Admin || Role.Staff)
  get(@Param() id: number): Promise<Brands> {
    return this.service.get(id);
  }
  @Get('list')
  @UseGuards(AuthGuard('jwt'))
  @Roles(Role.Admin || Role.Staff)
  getAll(): Promise<Brands[]> {
    return this.service.getAll();
  }

  @Put('edit/:id')
  @UseGuards(AuthGuard('jwt'))
  @Roles(Role.Admin || Role.Staff)
  update(@Param() id: number, @Body() dto: BrandDTO): Promise<any> {
    return this.service.update(dto, id);
  }

  @Delete('delete/:id')
  @UseGuards(AuthGuard('jwt'))
  @Roles(Role.Admin || Role.Staff)
  delete(@Param() id: number): Promise<any> {
    return this.service.delete(id);
  }
}
