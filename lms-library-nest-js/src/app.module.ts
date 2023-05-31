import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { Category } from './category/entity';
import { BrandModule } from './brand/brand.module';
import { Brands } from './brand/entity';

@Module({
  imports: [
    AuthModule,
    UserModule,
    CategoryModule,
    BrandModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'hoang',
      password: '123',
      database: 'LMSECO',
      entities: [User, Category, Brands],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
