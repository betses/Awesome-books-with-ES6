const bookContainer = document.querySelector('.book-container');
const AddBookForm = document.querySelector('.book-form');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const error = document.querySelector('.error');
const viewBook = document.getElementById('books-section');
const addBook = document.getElementById('add-section');
const contact = document.getElementById('contact-section');
const list = document.getElementById('list');
const addButton = document.getElementById('add-new');
const contactButton = document.getElementById('contact');
const formAdd = document.querySelector('.form-add');
const dateTime = document.querySelector('.dateTime');
const isClicked = false;

export {
  bookContainer, AddBookForm, bookTitle, bookAuthor, error, viewBook, addBook,
  contact, list, addButton, contactButton, formAdd, isClicked, dateTime
};