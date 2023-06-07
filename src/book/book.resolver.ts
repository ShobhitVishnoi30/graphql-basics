import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book as BookModel } from '../graphql';
import { Book } from 'src/schema/book.schema';
import { BookService } from './book.service';
import { AddBookArgs } from 'src/args/add.book.args';

// @Resolver('Book')
// export class BookResolver {
//   @Query('books')
//   getAllBooks() {
//     return [
//       { id: 1, title: 'Harry potter', price: 500 },
//       { id: 2, title: 'Hunger Games', price: 600 },
//       { id: 3, title: 'H', price: 500 },
//     ];
//   }
// }

@Resolver((of) => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query((returns) => [Book], { name: 'books' })
  getAllBooks(): BookModel[] {
    return this.bookService.getBooks();
  }

  @Query((returns) => Book, { name: 'findBookById', nullable: true })
  findBookById(
    @Args({ name: 'bookId', type: () => Int }) id: number,
  ): BookModel {
    return this.bookService.getBookById(id);
  }

  @Mutation((returns) => String, { name: 'deleteBook' })
  deleteBook(@Args({ name: 'bookId', type: () => Int }) id: number): String {
    return this.bookService.deleteBook(id);
  }

  @Mutation((returns) => String, { name: 'addBook' })
  addBook(@Args('addBookArgs') addBookArgs: AddBookArgs): String {
    return this.bookService.addBook(addBookArgs);
  }

  @Mutation((returns) => String, { name: 'updateBook' })
  updateBook(
    @Args({ name: 'bookId', type: () => Int }) id: number,
    @Args('updateBookArgs') updateBookArgs: AddBookArgs,
  ): String {
    return this.bookService.updateBook(id, updateBookArgs);
  }
}
