import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Book')
export class BookResolver {
  @Query('books')
  getAllBooks() {
    return [
      { id: 1, title: 'Harry potter', price: 500 },
      { id: 2, title: 'Hunger Games', price: 600 },
      { id: 3, title: 'H', price: 500 },
    ];
  }
}
