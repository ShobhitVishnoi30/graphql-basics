import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field()
  id: String;

  @Field()
  title: String;

  @Field((type) => Int)
  price: number;
}
