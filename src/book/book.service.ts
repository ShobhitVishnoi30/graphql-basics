import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddBookArgs } from 'src/args/add.book.args';
import { BookEntity } from 'src/entity/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  async addBook(book: AddBookArgs) {
    try {
      let newBook = this.bookRepository.create(book);

      newBook = await this.bookRepository.save(newBook);

      return 'Book added successfully';
    } catch (error) {
      return 'Book not added';
    }
  }

  async updateBook(id: string, updatedBook: AddBookArgs) {
    try {
      let book = await this.bookRepository.findOne({
        where: {
          id,
        },
      });
      if (!book) {
        throw new Error('No book exist with this id');
      }
      Object.keys(updatedBook).forEach((key) => {
        if (updatedBook[key]) {
          return (book[key] = updatedBook[key]);
        }
      });

      await this.bookRepository.save(book);
      return 'book updated successfuly';
    } catch (err) {
      return err.message;
    }
  }

  async deleteBook(id: string) {
    try {
      await this.bookRepository.delete(id);
      return 'Book deleted successfully';
    } catch (err) {
      return err.message;
    }
  }

  async getBooks() {
    try {
      return await this.bookRepository.find();
    } catch (err) {
      return err.message;
    }
  }

  async getBookById(id: string) {
    try {
      return await this.bookRepository.findOne({
        where: {
          id,
        },
      });
    } catch (err) {
      return err.message;
    }
  }
}
