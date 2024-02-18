//Calculates and returns the total number of books in the books array.
//Uses the length property of arrays to determine the total count.

function getTotalBooksCount(books) {
  return books.length;
}

//Calculates and returns the total number of accounts in the accounts array.
//Utilizes the length property of arrays to determine the total count.

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

//Determines the total count of books that are currently borrowed (not returned) from the library.
//Filters the books array to find books with at least one borrow record that has not been returned.
//Returns the count of such books.

function getBooksBorrowedCount(books) {
  let booksCheckedOut = books.filter(
    (book) => book.borrows.filter((record) => record.returned === false).length > 0 );
   return booksCheckedOut.length;
}

//Finds the most common genres among the books in the books array.
//Creates an object genreCounts to store the count of each genre.
//Iterates through the books array, increments the count for each genre encountered, and stores it in genreCounts.
//Sorts the genre counts in descending order and returns the top 5 most common genres.

function getMostCommonGenres(books) {
  const genreCounts = {};
  books.forEach(book => {
    const { genre } = book;
    genreCounts[genre] = (genreCounts[genre] || 0) + 1; });

  const genreEntries = Object.entries(genreCounts);
  genreEntries.sort((a, b) => b[1] - a[1]);
  const topGenres = genreEntries.slice(0, 5).map(([name, count]) => ({ name, count }));

  return topGenres;
}

//Identifies the most popular books based on the number of borrows they have.
//Maps each book to an object containing its title and the count of borrows.
//Sorts the books based on borrow count in descending order and returns the top 5.

function getMostPopularBooks(books) {
  return books
    .map(book => ({ name: book.title, count: book.borrows.length }))
    .sort((a, b) => b.count - a.count).slice(0, 5);
}

//Determines the most popular authors by counting the total borrows for each author's books.
//Iterates through the authors array and calculates the total borrows for each author by checking their books in the books array.
//Constructs an array of objects containing the author's name and their borrow count.
//Sorts the authors based on borrow count in descending order and returns the top 5.

function getMostPopularAuthors(books, authors) {
  const result = [];

  authors.forEach(author => {
    const authorName = `${author.name.first} ${author.name.last}`;
    let authorCount = 0;

    books.forEach(book => {
      if (book.authorId === author.id) {
        authorCount += book.borrows.length;
      }
    });

    result.push({ name: authorName, count: authorCount });
  });

  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
