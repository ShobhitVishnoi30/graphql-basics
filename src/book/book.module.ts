import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { BookEntity } from 'src/entity/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookEntity]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/book/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/book/graphql.ts'),
      },
      // typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [],
  providers: [BookResolver, BookService],
})
export class BookModule {}
