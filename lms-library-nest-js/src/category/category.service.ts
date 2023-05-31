import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity';
import { CategoryDTO } from './dto';
import { promises } from 'dns';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private repository: Repository<Category>,
  ) {}

  async create(dto: CategoryDTO): Promise<Category> {
    try {
      const category = await this.repository.create({
        name: dto.name,
        description: dto.description,
      });
      await this.repository.save(category);
      return category;
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }

  async get(id: number): Promise<Category> {
    try {
      const category = await this.repository.findOneBy({
        id: id,
      });
      if (!category) {
        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
      }
      return category;
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }
  async getALl(): Promise<Category[]> {
    try {
      const categorys = await this.repository.find({
        select: {
          name: true,
          description: true,
          create_At: true,
        },
      });
      return categorys;
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }
  async delete(id: number): Promise<any> {
    try {
      const category = await this.repository.findOneBy({
        id,
      });
      if (!category) {
        throw new HttpException('Not Found ', HttpStatus.NOT_FOUND);
      }
      return {
        mgs: 'Category Deleted!',
      };
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }
  async edit(id: number, dto: CategoryDTO): Promise<any> {
    try {
      const category = await this.repository.findOneBy({
        id,
      });
      if (!category) {
        throw new HttpException('Not Found ', HttpStatus.NOT_FOUND);
      }
      await this.repository.update(
        { id },
        {
          name: dto.name || category.name,
          description: dto.name || category.description,
        },
      );
      return {
        mgs: 'Category Updated!',
      };
    } catch (error) {
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }
  }
}
