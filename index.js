// Grabbing elements from HTML and storing them in variables
const book = document.querySelector('#book-name');
const author = document.querySelector('#author-name');
const submit = document.querySelector('.add-btn');
const list = document.querySelector('#book-list');

const addBook = (event) => {
  // Prevent default submit actions
  event.preventDefault();
  if (book.value === '' && author.value === '') {
    // Form Validation
    book.classList.add('warning');
    author.classList.add('warning');

    book.setAttribute('placeholder', 'Please fill in a book ');
    author.setAttribute('placeholder', 'Please fill in an autor');

    const doneValidation = () => {
      book.classList.remove('warning');
      author.classList.remove('warning');

      book.setAttribute('placeholder', '');
      author.setAttribute('placeholder', '');
    };

    setTimeout(doneValidation, 2000);
  } else if (book.value === '') {
    book.classList.add('warning');
    book.setAttribute('placeholder', 'Please fill in a book ');

    const bookValidated = () => {
      book.classList.remove('warning');
      book.setAttribute('placeholder', '');
    };
    setTimeout(bookValidated, 2000);
  } else if (author.value === '') {
    author.classList.add('warning');
    author.setAttribute('placeholder', 'Please fill in an autor');

    const authorValidated = () => {
      author.classList.remove('warning');
      author.setAttribute('placeholder', '');
    };
    setTimeout(authorValidated, 2000);
  } else {
    // Create New Row
    const newRow = document.createElement('tr');
    list.appendChild(newRow);

    // Create new Column for Books
    const newBookColumn = document.createElement('th');
    newRow.appendChild(newBookColumn);

    // Add Books to new column
    newBookColumn.innerText = book.value;

    // Create new Column for Authors
    const newAuthorColumn = document.createElement('th');
    newRow.appendChild(newAuthorColumn);

    // Add Authors to new column
    newAuthorColumn.innerText = author.value;

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'delete';
    newRow.appendChild(deleteButton);

    // Delete Item from List
    deleteButton.addEventListener('click', () => {
      newRow.innerHTML = '';
    });
  }

  // Clean out the input fields when submitted
  book.value = '';
  author.value = '';
};

submit.addEventListener('click', addBook);
