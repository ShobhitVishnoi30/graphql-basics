
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    title?: Nullable<string>;
    price?: Nullable<number>;
}

export interface Book {
    id: string;
    title: string;
    price: number;
}

export interface IQuery {
    books(): Book[] | Promise<Book[]>;
    findBookById(bookId: string): Nullable<Book> | Promise<Nullable<Book>>;
}

export interface IMutation {
    deleteBook(bookId: string): string | Promise<string>;
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    updateBook(bookId: string, updateBookArgs: AddBookArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
