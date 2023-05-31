import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './entity';
import { ProductDTO } from './dto';
import { Categorys } from 'src/category/entity';
import { Brands } from 'src/brand/entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products) private repository: Repository<Products>,
    @InjectRepository(Categorys) private categoryRepo: Repository<Categorys>,
    @InjectRepository(Brands) private brandRepo: Repository<Brands>,
  ) {}

  async create(dto: ProductDTO): Promise<Products> {
    try {
      //use from " some shit "
      this.findCategory(dto.categoryName);
      this.findBrand(dto.brandName);

      const product = await this.repository.create({
        name: dto.name,
        description: dto.desc,
        price: dto.price,
        quantity: dto.quantity,
      });
      this.repository.save(product);

      return product;
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }

  //some shit:))

  async findCategory(name: string) {
    const category = await this.categoryRepo.findOneBy({
      name: name,
    });
    if (!category) {
      throw new HttpException('Category Not Found!', HttpStatus.NOT_FOUND);
    }
    return category;
  }
  async findBrand(name: string) {
    const brand = await this.brandRepo.findOneBy({
      name: name,
    });
    if (!brand) {
      throw new HttpException('Category Not Found!', HttpStatus.NOT_FOUND);
    }
    return brand;
  }
}
