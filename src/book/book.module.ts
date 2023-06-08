import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { BookEntity } from 'src/entity/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [],
  providers: [BookResolver, BookService],
})
export class BookModule {}
