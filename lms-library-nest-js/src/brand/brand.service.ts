import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brands } from './entity';
import { BrandDTO } from './dto';
import { basename } from 'path';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brands) private repository: Repository<Brands>,
  ) {}

  async create(dto: BrandDTO): Promise<Brands> {
    try {
      const brand = await this.repository.create({
        name: dto.brandName,
        description: dto.brandDesc,
      });
      await this.repository.save(brand);
      return brand;
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }
  async get(id: number): Promise<Brands> {
    try {
      const brand = await this.repository.findOneBy({ id: id });
      if (!brand) {
        throw new HttpException('Not Found!', HttpStatus.NOT_FOUND);
      }
      return brand;
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }
  async getAll(): Promise<Brands[]> {
    try {
      const brands = await this.repository.find({
        select: {
          name: true,
          description: true,
          create_At: true,
        },
      });
      return brands;
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }
  async delete(id: number): Promise<string> {
    try {
      const brand = await this.repository.findOneBy({ id: id });
      if (!brand) {
        throw new HttpException('Not Found!', HttpStatus.NOT_FOUND);
      }
      this.repository.delete(brand);
      return 'Brand Deleted!';
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }

  async update(dto: BrandDTO, id: number): Promise<any> {
    try {
      const brand = await this.repository.findOneBy({
        id: id,
      });
      if (!brand) {
        throw new HttpException('Not Found!', HttpStatus.NOT_FOUND);
      }
      await this.repository.update(
        { id },
        {
          name: dto.brandName || brand.name,
          description: dto.brandDesc || brand.description,
        },
      );
      return 'Brand Updated';
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }
}
