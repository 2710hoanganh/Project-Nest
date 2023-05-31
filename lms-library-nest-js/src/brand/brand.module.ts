import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brands } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brands])],
  providers: [BrandService],
  controllers: [BrandController],
})
export class BrandModule {}
