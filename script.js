class Library {
  constructor() {
    this.books = [];
    this.initEventListeners();
  }

  initEventListeners() {
    document.getElementById("new-book-btn").addEventListener("click", () => {
      document.getElementById("new-book-dialog").showModal(); // Show the dialog to add a new book
    });

    document.getElementById("cancel-btn").addEventListener("click", () => {
      document.getElementById("new-book-dialog").close(); // Close the dialog without adding a book
    });

    document.getElementById("new-book-form").addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent the form from submitting normally

      this.addBookToLibrary(); // Add the book to the library
      this.displayBooks(); // Refresh the displayed list of books
      document.getElementById("new-book-dialog").close(); // Close the dialog after adding the book
      document.getElementById("new-book-form").reset(); // Reset the form fields
    });
  }

  addBookToLibrary() {
    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let pageCount = document.getElementById("pageCount").value.trim();
    let readStatus = document.getElementById("readStatus").checked;

    const book = new Book(title, author, pageCount, readStatus);
    this.books.push(book);
  }

  removeBookFromLibrary(bookId) {
    this.books.splice(bookId, 1);
    this.displayBooks();
  }

  displayBooks() {
    const libraryDisplay = document.getElementById("library-display");
    libraryDisplay.innerHTML = "";

    this.books.forEach((book, index) => {
      const bookElement = document.createElement("div");
      bookElement.classList.add("book");

      const titleElement = document.createElement("h3");
      titleElement.textContent = book.title;

      const authorElement = document.createElement("p");
      authorElement.textContent = `Author: ${book.author}`;

      const pageCountElement = document.createElement("p");
      pageCountElement.textContent = `Pages: ${book.pageCount}`;

      const readStatusElement = document.createElement("p");
      readStatusElement.textContent = `Read Status: ${
        book.readStatus ? "Read" : "Not Read"
      }`;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        this.removeBookFromLibrary(index);
      });

      const toggleButton = document.createElement("button");
      toggleButton.textContent = `Mark ${book.readStatus ? "unread" : "read"}`;
      toggleButton.addEventListener("click", () => {
        book.toggleRead();
        this.displayBooks();
      });

      bookElement.appendChild(titleElement);
      bookElement.appendChild(authorElement);
      bookElement.appendChild(pageCountElement);
      bookElement.appendChild(readStatusElement);
      bookElement.appendChild(removeButton);
      bookElement.appendChild(toggleButton);

      libraryDisplay.appendChild(bookElement);
    });
  }
}

class Book {
  constructor(title, author, pageCount = "unknown", readStatus = false) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
  }

  toggleRead() {
    this.readStatus = !this.readStatus;
  }
}

const myLibrary = new Library();
