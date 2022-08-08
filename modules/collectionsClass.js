class Collections {
  constructor() {
    this.collections = JSON.parse(localStorage.getItem('collections')) || [];
  }

  addBook = (book) => {
    this.collections.push(book);
    localStorage.setItem('collections', JSON.stringify(this.collections));
  }

  removeBook = (index) => {
    this.collections.splice(this.collections[index], 1);
  }

  getBooks = () => {
    const reversed = [];
    for (let i = this.collections.length - 1; i >= 0; i -= 1) {
      reversed.push(this.collections[i]);
    }
    return reversed;
  }
}

export default Collections;