# Book Management GraphQL API

This is a Book Management API implemented using GraphQL. It provides functionality to manage books including adding, updating, deleting, and retrieving books.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [GraphQL Schema](#graphql-schema)
- [API Endpoints](#api-endpoints)
  - [Query - Get All Books](#query---get-all-books)
  - [Query - Find Book by ID](#query---find-book-by-id)
  - [Mutation - Add Book](#mutation---add-book)
  - [Mutation - Update Book](#mutation---update-book)
  - [Mutation - Delete Book](#mutation---delete-book)

## Getting Started

### Prerequisites

- Node.js (version >= 12)
- npm (Node Package Manager) or yarn
- PostgreSQL (Make sure it's installed and running)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ShobhitVishnoi30/graphql-basics.git
   ```

2. Navigate to the project directory:

   ```bash
   cd graphql-basics
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Set up the database connection by creating a `.env.stage.dev` file in the project root and providing the database connection details. You can use the `.env.example` file as a template:

   ```bash
   cp .env.example .env.stage.dev
   ```

   Update the `.env.stage.dev` file with your PostgreSQL database configuration.

2. Start the application:

   ```bash
   npm run start:dev
   ```

   The GraphQL API will be available at `http://localhost:3000/graphql`.

## GraphQL Schema

The GraphQL schema defines the available queries and mutations that can be executed against the API. Here are the defined types:

```graphql
type Book {
  id: String!
  title: String!
  price: Int!
}

type Query {
  books: [Book!]!
  findBookById(bookId: String!): Book
}

type Mutation {
  deleteBook(bookId: String!): String!
  addBook(addBookArgs: AddBookArgs!): String!
  updateBook(bookId: String!, updateBookArgs: AddBookArgs!): String!
}

input AddBookArgs {
  title: String
  price: Int
}
```

## API Endpoints

### Query - Get All Books

Retrieves all books in the database.

**Request:**

```graphql
query {
  books {
    id
    title
    price
  }
}
```

**Response:**

```json
{
  "data": {
    "books": [
      {
        "id": "138acc7d-1536-40be-9c01-c169ee8ec79d",
        "title": "my second book",
        "price": 300
      },
      {
        "id": "6ac8bccf-5c24-4264-ba6e-4507790466c1",
        "title": "first book",
        "price": 1862
      }
      // ...
    ]
  }
}
```

### Query - Find Book by ID

Retrieves a book by its ID.

**Request:**

```graphql
query {
  findBookById(bookId: "6ac8bccf-5c24-4264-ba6e-4507790466c1") {
    id
    title
    price
  }
}
```

**Response:**

```json
{
  "data": {
    "findBookById": {
      "id": "6ac8bccf-5c24-4264-ba6e-4507790466c1",
      "title": "shobhit book",
      "price": 1862
    }
  }
}
```

### Mutation - Add Book

Adds a new book to the database.

**Request:**

```graphql
mutation {
  AddBook($bookArgs:AddBookArgs!){
    addBook(addBookArgs:$bookArgs)
  }
}
```

**Response:**

```json
{
  "data": {
    "addBook": "Book added successfully"
  }
}
```

### Mutation - Update Book

Updates an existing book in the database.

**Request:**

```graphql
mutation {
  UpdateBook($bookId:String!,$bookArgs:AddBookArgs!){
    updateBook(bookId:$bookId,updateBookArgs:$bookArgs)
  }
}
```

**Response:**

```json
{
  "data": {
    "updateBook": "Book updated successfully"
  }
}
```

### Mutation - Delete Book

Deletes a book from the database.

**Request:**

```graphql
mutation {
  DeleteBook($bookId:Int!){
    deleteBook(bookId:$bookId)
  }
}
```

**Response:**

```json
{
  "data": {
    "deleteBook": "Book deleted successfully"
  }
}
```

---
