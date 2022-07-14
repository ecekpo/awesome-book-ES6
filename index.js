// eslint-disable-next-line import/no-cycle, max-classes-per-file
import addItemFunc from './module/addBook.js';
// eslint-disable-next-line import/no-cycle
import deleteFunction from './module/deletebook.js';
import { DateTime } from './luxon.js';

const realTime = DateTime.now();

const dateFunc = () => {
  const timeDiv = document.querySelector('.time-div');
  timeDiv.innerHTML = `${realTime.toLocaleString(DateTime.DATETIME_MED)}`;
};
dateFunc();

// Manipulating Local Storage
export class Storage {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

export class bookLibrary {
  static showItems() {
    const books = Storage.getBooks();

    books.forEach((book) => bookLibrary.addToList(book));
  }

  static addToList(book) {
    const bookList = document.querySelector('#books-added');

    const row = document.createElement('tr');
    row.className = 'table-row';

    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>            
            <button class='delete'><a href='#'></a>Delete</button>
    
        `;

    bookList.appendChild(row);
  }

  static deleteItem(item) {
    if (item.classList.contains('delete')) {
      item.parentElement.remove();
    }
  }

  static alertMessage() {
    const container = document.querySelector('.container');
    const message = document.querySelector('.message');

    message.innerText = 'Please fill in an author name and book title';

    container.appendChild(message);

    // Alert message to go away after 3000ms
    setTimeout(() => message.remove(), 3000);
  }

  static clearFormFields() {
    document.querySelector('#book-title').value = '';
    document.querySelector('#book-author').value = '';
  }
}

// Show Books
document.addEventListener('DOMContentLoaded', bookLibrary.showItems);

//  Add a Book
addItemFunc();

// Remove from a Book
deleteFunction();