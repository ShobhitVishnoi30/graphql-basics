import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BookModule } from './book/book.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './utilities/joi-validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.stage.dev',
      validationSchema: envSchema,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.NODE_ENV,
      port: +process.env.DB_PORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        path.join(__dirname, '**', '**', '*.entity{.ts,.js}'),
        path.join(__dirname, '**', '**', '*.entities{.ts,.js}'),
      ],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      // typePaths: ['./**/*.graphql'],
    }),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
