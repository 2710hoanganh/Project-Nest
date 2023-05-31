import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entity';
import { Categorys } from 'src/category/entity';
import { Brands } from 'src/brand/entity';
@Module({
  imports: [TypeOrmModule.forFeature([Products, Categorys, Brands])],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
