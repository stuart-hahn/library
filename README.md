# Library App

## Overview

The **Library App** is a simple web application that allows users to manage a personal library of books. Users can add, view, and remove books from their library. The app is built using HTML, CSS, and JavaScript, and it features a clean, responsive design.

## Features

- **Add New Books:** Users can add new books by filling out a form in a modal dialog.
- **View Books:** All added books are displayed in a card layout, showing the title, author, page count, and read status.
- **Remove Books:** Each book card includes a "Remove" button, allowing users to delete books from their library.
- **Toggle Read Status:** Users can mark a book as "Read" or "Not Read" using a toggle button on each book card.
- **Responsive Design:** The app is fully responsive, providing a seamless experience on both desktop and mobile devices.

## Technologies Used

- **HTML5:** Provides the structure of the application.
- **CSS3:** Used for styling the application, including the layout and design of the dialog modal, buttons, and book cards. The app also utilizes CSS Flexbox for responsive design.
- **JavaScript (ES6+):** Handles the logic for adding, displaying, and removing books. JavaScript ES6 classes are used for managing book data, and modern features like `dialog` and `event listeners` are utilized for user interactions.

## Setup and Usage

### Prerequisites

To run this project, you need a modern web browser that supports HTML5, CSS3, and ES6 JavaScript features.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/library-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd library-app
   ```

3. **Open `index.html` in your web browser:**

   You can simply double-click the `index.html` file or serve it using a local web server if you prefer.

### How to Use

1. **Add a New Book:**

   - Click the "NEW BOOK" button to open the modal dialog.
   - Fill in the book details (Title, Author, Number of Pages, and Read Status).
   - Click "Add Book" to add the book to your library.

2. **View Your Library:**

   - All added books are displayed in the main section. Each book is presented in a card layout showing its details.

3. **Remove a Book:**

   - Click the "Remove" button on any book card to delete it from your library.

4. **Toggle Read Status:**
   - Click the "Mark as read/unread" button to toggle the read status of any book.

## Project Structure

```
library-app/
│
├── index.html         # The main HTML file
├── style.css          # The CSS file for styling the app
├── script.js          # The JavaScript file containing the app logic
└── README.md          # This README file
```

## Contributing

Contributions are welcome! If you have any ideas for improving the app or find any bugs, feel free to fork the repository and submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- The app was inspired by learning projects from various coding courses and tutorials.
- Thanks to all open-source contributors whose tools and resources helped make this project possible.
