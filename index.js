import { AddBookForm, bookTitle, bookAuthor, error, viewBook, addBook,
  contact, list, addButton, contactButton, formAdd, isClicked, dateTime
} from './modules/htmlElements.js';
import Book from './modules/bookClass.js';
import luxon from './modules/luxon.js';

const books = new Book();

document.addEventListener('DOMContentLoaded', () => {
  viewBook.style.display = 'none';
  addBook.style.display = 'block';
  contact.style.display = 'none';
});

list.addEventListener('click', () => {
  if (isClicked === false) {
    viewBook.style.display = 'block';
    addBook.style.display = 'none';
    contact.style.display = 'none';
  }
});

addButton.addEventListener('click', () => {
  if (isClicked === false) {
    viewBook.style.display = 'none';
    addBook.style.display = 'block';
    contact.style.display = 'none';
  }
});

contactButton.addEventListener('click', () => {
  if (isClicked === false) {
    viewBook.style.display = 'none';
    addBook.style.display = 'none';
    contact.style.display = 'block';
  }
});

AddBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = bookTitle.value;
  const author = bookAuthor.value;
  if (title === '' || author === '') {
    error.innerHTML = 'Please fill in all fields';
    setTimeout(() => {
      error.innerHTML = '';
    }, 5000);
  } else {
    const books = new Book(title, author);
    books.addBook();
    formAdd.innerHTML = `"${title}" was added to your collection`;
    formAdd.style.animation = 'fadeIn 2s ease-in-out';
    setTimeout(() => {
      formAdd.style.animation = 'fadeOut 2s ease-in-out';
    }, 5000);
    setTimeout(() => {
      formAdd.innerHTML = '';
    }, 6000);
    bookTitle.value = '';
    bookTitle.focus();
    bookAuthor.value = '';
    error.innerHTML = '';
  }
});
dateTime.innerText = luxon.DateTime.now().setLocale('en-US').toLocaleString(luxon.DateTime.DATETIME_FULL_WITH_SECONDS);
window.onload = books.render();