import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products) private repository: Repository<Products>,
  ) {}
}
