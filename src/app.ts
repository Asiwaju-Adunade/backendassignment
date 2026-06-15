
import { Router } from "express";
import booksRouter from "./books/books.route";

const appRouter = Router();

appRouter.use("/books", booksRouter);

export default appRouter;