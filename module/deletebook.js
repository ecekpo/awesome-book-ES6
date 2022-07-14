// eslint-disable-next-line import/no-cycle
import { bookLibrary } from '../index.js';

const deleteFunc = () => {
  const deleteBtn = document.querySelector('#books-added');
  deleteBtn.addEventListener('click', (e) => {
    bookLibrary.deleteItem(e.target);
  });
};

export default deleteFunc;
