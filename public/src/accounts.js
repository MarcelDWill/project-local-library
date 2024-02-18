function findAccountById(accounts, id) {
  let foundId = accounts.find((account) => account.id === id);
 return foundId;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1 );
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = books.reduce((total, book) => {
    return total + book.borrows.filter(borrow => borrow.id === account.id).length;
}, 0);

return totalBorrows;
}

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
