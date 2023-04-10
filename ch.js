// 1-Parse the JSON data into a JavaScript array of book objects using destructuring.
// 2-Define a Book class with properties for title, author, and year, using destructuring in the constructor.
// 3-Use a static method on the Book class with rest parameters to parse the JSON data and 4-create an array of Book objects, returning a Promise.
// 5-Use a getter method on the Book class to retrieve the author name.
// 6-Use the sort() method with a custom comparison function to sort the array of Book objects by author name.
// 7-Convert the sorted list of books into JSON format.
// 8-Output the sorted list of books in JSON format.

data = [  {    "title": "The Great Gatsby",
"author": "F. Scott Fitzgerald",
"year": 1925  }, 
{    "title": "To Kill a Mockingbird",
 "author": "Harper Lee",    "year": 1960  },
 {    "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",    "year": 1951  },
  {    "title": "The Hobbit",    "author": "J.R.R. Tolkien",    "year": 1937  }]

class book {
    constructor (title, author, year){
        this.title= title;
        this.author = author;
        this.year = year;
    }

    static fromJSON(jsonData) {
        let data1 = JSON.parse(jsonData);
        return new book (data1.title, data1.author, data1.year)
    
    }

    get authorName() {
        return this.author;
    }
}
const books = data.map(({ title, author, year }) => new book(title, author, year));

const sortedBooks = books.sort((a,b) => a.authorName.localeCompare(b.authorName));
console.log(JSON.stringify(sortedBooks));
//console.log(books);

//book.fromJSON(JSON.stringify({    "title": "The Great Gatsby",    "author": "F. Scott Fitzgerald",    "year": 1925  }));
//console.log(books[0].authorName);