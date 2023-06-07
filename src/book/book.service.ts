import { Injectable } from '@nestjs/common';
import { BookEntity } from 'src/entity/book.entity';
import { Book } from 'src/schema/book.schema';

@Injectable()
export class BookService {
  bookData: BookEntity[] = [];

  addBook(book: BookEntity): string {
    this.bookData.push(book);
    return 'book added successfully';
  }

  updateBook(id: number, updatedBook: BookEntity): string {
    const index = this.bookData.findIndex((book) => book.id === id);

    if (index !== -1) {
      this.bookData[index] = updatedBook;
      return 'Book updated successfully';
    } else {
      return 'Book not found';
    }
  }

  deleteBook(id: number): string {
    this.bookData = this.bookData.filter((book) => book.id !== id);
    return 'book deleted successfully';
  }

  getBooks(): BookEntity[] {
    return this.bookData;
  }

  getBookById(id: number): BookEntity {
    return this.bookData.find((book) => book.id === id);
  }
}
