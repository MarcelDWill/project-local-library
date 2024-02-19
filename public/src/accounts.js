//This function searches for an account in the accounts array based on the provided id.
//It uses the find method to iterate through the accounts array and returns the account object if its id matches the provided id.
//Returns the found account object or undefined if no match is found.
function findAccountById(accounts, id) {
  let foundId = accounts.find((account) => account.id === id);
 return foundId;
}

// This function sorts the accounts array based on the last name of each account.
//It uses the sort method to compare the last names of two accounts.
//Returns the accounts array sorted alphabetically by last name.
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1 );
}

// This function calculates the total number of times an account has borrowed books.
//It uses the reduce method to iterate through the books array and sum up the number of borrows for each book associated with the provided account.
//Returns the total number of borrows for the account.
function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = books.reduce((total, book) => {
    return total + book.borrows.filter(borrow => borrow.id === account.id).length;
}, 0);

return totalBorrows;
}

// This function returns an array of books currently borrowed by the provided account.
//It filters the books array to find books that have been borrowed by the account and not yet returned.
//For each borrowed book, it finds the corresponding author from the authors array and includes the author information in the result.
//Returns an array of book objects possessed by the account, including author information.
function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => {
    const isBorrowed = book.borrows.some(borrow => borrow.id === account.id && !borrow.returned);
    return isBorrowed;
  }).map(book => { 
    const author = authors.find(author => author.id === book.authorId);
    return { ...book, author };
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
