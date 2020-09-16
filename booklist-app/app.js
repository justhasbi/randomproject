// Book class represent a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}

// UI Class: handle ui task
class UI {
    static displayBook() {
        const books = Store.getBooks();

        books.forEach((book) => {
            UI.addBookToList(book);
        });
    }

    static addBookToList(book) {
        const list = document.querySelector("#book-list")
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">Delete</a></td>
        `;

        list.appendChild(row);
    }

    static clearField() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }

    static deleteBook(element) {
        if(element.classList.contains("delete")) {
            element.parentElement.parentElement.remove();
        }
    }

    static showAllert(message, classname) {
        const div = document.createElement("div");
        div.className = `alert ${classname}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector(".alert").remove()
        }, 3000);
    }
}

// store class : handle storage browser
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books))
    }
}

// event: to display book
document.addEventListener("DOMContentLoaded", UI.displayBook);

// event: add book
document.querySelector("#book-form").addEventListener("submit", (e) => {
    // prevent actual submit
    e.preventDefault();

    // get from values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    
    if(title === "" || author === "" || isbn === "") {
        UI.showAllert("Fill all field", "danger");
    } else {
        // instantiate book 
        const book = new Book(title, author, isbn);
        // console.log(book);
        // Add book to UI
        UI.addBookToList(book);

        // Add book to storage
        Store.addBook(book)

        UI.showAllert("Book Inserted", "success")
        // Clear input fields
        UI.clearField();
    }
});
//  event: remove book

document.querySelector("#book-list").addEventListener("click", (e) => {
    // get target value
    // console.log(e.target);
    // remove book from UI
    UI.deleteBook(e.target);

    // Remove book from storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

    UI.showAllert("Book Deleted", "success")
});


