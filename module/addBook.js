import BookStore from './bookstore.js';
// eslint-disable-next-line import/no-cycle
import { bookLibrary, Storage } from '../index.js';

const addBookFunction = () => {
  const form = document.querySelector('#book-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get The form value
    const bookTitle = document.querySelector('#book-title').value;
    const bookAuthor = document.querySelector('#book-author').value;

    // Validation
    if (bookTitle === '' || bookAuthor === '') {
      bookLibrary.alertMessage();
    } else {
      const book = new BookStore(bookTitle, bookAuthor);

      bookLibrary.addToList(book);

      Storage.addBook(book);

      // Clear fields when submitting
      bookLibrary.clearFormFields();
    }
  });
};

export default addBookFunction;