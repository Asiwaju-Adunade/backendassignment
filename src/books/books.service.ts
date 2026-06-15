export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

export class BooksService {
  private books: Book[] = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "The Red Dahlia", author: "Lynda La Plante", year: 1989 },
    { id: 4, title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
    { id: 5, title: "Things Fall Apart", author: "Chinua Achebe", year: 1958 },
    { id: 6, title: "Secret Lives of Baba Segi's Wives", author: "Lola Shoneyin", year: 2010 }
  ];

  getAllBooks(): Book[] {
    return this.books;
  }
}