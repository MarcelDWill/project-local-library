function findAuthorById(authors, id) {
  let found = authors.find((author)=> author.id === id);
  return found;
}

function findBookById(books, id) {
  let foundBooks = books.find((book)=> book.id === id);
  return foundBooks;
}

function partitionBooksByBorrowedStatus(books) {
let booksBorrowed = books.filter((book) => !book.borrows[0].returned);
  let booksReturned = books.filter((book) => book.borrows[0].returned);
  return [booksBorrowed, booksReturned];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  }) .slice(0, 10);
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
