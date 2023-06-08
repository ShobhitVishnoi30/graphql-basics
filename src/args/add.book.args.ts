import { Field, InputType, Int } from '@nestjs/graphql';
import { type } from 'os';

@InputType()
export class AddBookArgs {
  @Field({ nullable: true })
  title: string;

  @Field((type) => Int, { nullable: true })
  price: number;
}
