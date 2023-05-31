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
import { CategoryService } from './category.service';
import { Roles } from 'src/auth/role-check';
import { Role } from 'src/user/entity';
import { AuthGuard } from '@nestjs/passport';
import { CategoryDTO } from './dto';
import { Category } from './entity';

@Controller('category')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  createCategory(@Body() dto: CategoryDTO): Promise<Category> {
    return this.service.create(dto);
  }
  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getCategory(@Param() id: number) {
    return this.service.get(id);
  }
  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'))
  @Get('list')
  getAll() {
    return this.service.getALl();
  }
  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'))
  @Put('edit/:id')
  editCategory(@Param() id: number, @Body() dto: CategoryDTO) {
    return this.service.edit(id, dto);
  }
  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'))
  @Delete('delete/:id')
  deteleCategory(@Param() id: number) {
    return this.service.delete(id);
  }
}
