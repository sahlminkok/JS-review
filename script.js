const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: false,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring an object and an Array

/*
const book = getBook(3);
book;

// upon destructuring an object, we depend on the key property to extract the data

// const title = book.title;
// const author = book.author;

const { title, author, pages, genres, hasMovieAdaptation, publicationDate } =
  book;

console.log(title, author, pages);

// while upon destructuring an array, we depend on simply the order of the elements

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// console.log(primaryGenre);

const [primaryGenre, secondaryGenre, ...OtherGenres] = genres; // rest operator

console.log(primaryGenre, OtherGenres);

// spread operator with arrays

const newGenres = [...genres, "epic fantasy"];

console.log(newGenres);

// spread operator with objects

const updatedBook = {
  ...book,

  // adding a new property
  moviePublicationDate: "2001-12-19",

  // updating an existing property
  pages: 2300,
};
updatedBook;

// Arrow function
const date = (str) => str.split("-")[0];

// Template literals

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${date(
  publicationDate
)}`;
summary;

// Short circuiting with &&, ||, ??

// &&: If the first argument is true it returns the second
console.log(true && "Something Else");

// ||: If the first argument is 0, false, undefined, " ", null, it returns the 2nd argument
console.log(0 || "Second argument");

// .??: If the first argument is undefined, or null, it returns the 2nd argument
console.log(false ?? "Something");

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

const count = book.reviews.librarything?.reviewsCount ?? "no data";
count;

// Optional chaining

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

*/

const books = getBooks();

// Array Map Method

const x = [1, 2, 3, 4].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;

// Array Filter Method

const longBooks = books.filter(
  (book) => book.pages > 500 && book.hasMovieAdaptation
);
longBooks;

const adventuresBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventuresBooks;

// Array Reduce Method

const allBooksPages = books.reduce((acc, book) => acc + book.pages, 0);
allBooksPages;

// Array Sort Method

const arr = [20, 8, 90, 3, 1];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortBooksByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortBooksByPages;

// Working with immutable arrays

// 1) Adding book object in an array
const newBook = {
  id: 6,
  title: "Ruwan Bagaja",
  author: "Abdullahi Abubakar Imam",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Deleting book object from an array

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 5);
booksAfterDelete;

// 3) Updating book in an array

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
