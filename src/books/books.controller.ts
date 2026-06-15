
import { Request, Response } from "express";
import { BooksService } from "./books.service";

const booksService = new BooksService();

export const getBooks = (req: Request, res: Response) => {
  const books = booksService.getAllBooks();

  res.json({
    success: true,
    data: books
  });
};