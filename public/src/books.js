//The findAuthorById function searches for an author in an array of authors
// based on a specified ID. It utilizes the find method to iterate through the array 
//and return the first author object that matches the given ID. If no author is found 
//with the specified ID, it returns undefined.
function findAuthorById(authors, id) {
  let found = authors.find((author)=> author.id === id);
  return found;
}

//The findBookById function searches for a book in an array of books based on a specified ID. 
//It uses the find method to iterate through the array and return the first book object that 
//matches the given ID. If no book is found with the specified ID, it returns undefined.
function findBookById(books, id) {
  let foundBooks = books.find((book)=> book.id === id);
  return foundBooks;
}

//The partitionBooksByBorrowedStatus function divides an array of books into two groups: borrowed books and returned books. 
//It filters the books array based on whether the first borrow record for each book indicates if it has been returned or not.
// It returns an array containing two sub-arrays: one with borrowed books and the other with returned books.
function partitionBooksByBorrowedStatus(books) {
let booksBorrowed = books.filter((book) => !book.borrows[0].returned);
  let booksReturned = books.filter((book) => book.borrows[0].returned);
  return [booksBorrowed, booksReturned];
}

//The getBorrowersForBook function retrieves the borrowing history for a given book by matching 
//the borrow records with the corresponding user accounts. It iterates over the borrow records
// of the book using the map method, finding the account associated with each borrow record by its ID 
//using the find method on the accounts array. Then, it merges the borrow record with the account information 
//using the spread operator { ...borrow, ...account }. Finally, it returns an array containing the borrowing history 
//for the book, limited to the first 10 records.
function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  }) .slice(0, 10);
}
// Helper function to find an item by ID within an array
function findItemById(array, id) {
  return array.find(item => item.id === id);
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
