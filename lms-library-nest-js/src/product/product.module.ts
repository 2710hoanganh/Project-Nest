import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
