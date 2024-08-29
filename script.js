console.log(
  "Check out Stuart's LinkedIn at https://www.linkedin.com/in/stuart-a-hahn/"
);

document.getElementById("new-book-btn").addEventListener("click", () => {
  document.getElementById("new-book-dialog").showModal();
});

document.getElementById("cancel-btn").addEventListener("click", () => {
  document.getElementById("new-book-dialog").close();
});

document.getElementById("new-book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  addBookToLibrary();
  displayBooks();
  document.getElementById("new-book-dialog").close();
  document.getElementById("new-book-form").reset();
});

const myLibrary = [];

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

function addBookToLibrary() {
  let title = document.getElementById("title").value.trim();
  let author = document.getElementById("author").value.trim();
  let pageCount = document.getElementById("pageCount").value.trim();
  let readStatus = document.getElementById("readStatus").checked;

  const book = new Book(title, author, pageCount, readStatus);
  myLibrary.push(book);
}

function removeBookFromLibrary(bookId) {
  myLibrary.splice(bookId, 1); // Use splice to remove the book
  displayBooks(); // Re-render the library
}

function displayBooks() {
  const libraryDisplay = document.getElementById("library-display");
  libraryDisplay.innerHTML = "";

  myLibrary.forEach((book, index) => {
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
      removeBookFromLibrary(index);
    });
    const toggleButton = document.createElement("button");
    toggleButton.textContent = `Mark ${book.readStatus ? "unread" : "read"}`;
    toggleButton.addEventListener("click", () => {
      book.toggleRead();
      displayBooks();
    });

    // Append elements to bookElement
    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(pageCountElement);
    bookElement.appendChild(readStatusElement);
    bookElement.appendChild(removeButton);
    bookElement.appendChild(toggleButton);

    // Append bookElement to libraryDisplay
    libraryDisplay.appendChild(bookElement);
  });
}
