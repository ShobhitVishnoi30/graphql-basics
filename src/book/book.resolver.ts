import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from 'src/schema/book.schema';
import { BookService } from './book.service';
import { AddBookArgs } from 'src/args/add.book.args';

@Resolver((of) => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query((returns) => [Book], { name: 'books' })
  async getAllBooks(): Promise<Book[]> {
    return await this.bookService.getBooks();
  }

  @Query((returns) => Book, { name: 'findBookById', nullable: true })
  async findBookById(
    @Args({ name: 'bookId', type: () => String }) id: string,
  ): Promise<Book> {
    return await this.bookService.getBookById(id);
  }

  @Mutation((returns) => String, { name: 'deleteBook' })
  deleteBook(
    @Args({ name: 'bookId', type: () => String }) id: string,
  ): Promise<String> {
    return this.bookService.deleteBook(id);
  }

  @Mutation((returns) => String, { name: 'addBook' })
  async addBook(
    @Args('addBookArgs') addBookArgs: AddBookArgs,
  ): Promise<String> {
    return await this.bookService.addBook(addBookArgs);
  }

  @Mutation((returns) => String, { name: 'updateBook' })
  async updateBook(
    @Args({ name: 'bookId', type: () => String }) id: string,
    @Args('updateBookArgs') updateBookArgs: AddBookArgs,
  ): Promise<String> {
    return await this.bookService.updateBook(id, updateBookArgs);
  }
}
